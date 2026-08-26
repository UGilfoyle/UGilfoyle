import { execSync } from "child_process";
import fs from "fs";
import path from "path";

async function generateSvg() {
  const query = `query {
    user(login: "UGilfoyle") {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              weekday
            }
          }
        }
      }
    }
  }`;

  let data;
  try {
    const raw = execSync(`gh api graphql -f query='${query}'`, { encoding: "utf8" });
    data = JSON.parse(raw);
  } catch (err) {
    console.error("Failed to query GitHub GraphQL API:", err.message);
    process.exit(1);
  }

  const calendar = data.data.user.contributionsCollection.contributionCalendar;
  const totalContributions = calendar.totalContributions;
  const weeks = calendar.weeks;

  // Flatten days
  const allDays = weeks.flatMap((w) => w.contributionDays);
  // Get last 60 days for a focused, sharp daily area/bar trend chart
  const recentDays = allDays.slice(-60);

  const width = 850;
  const height = 240;
  const paddingLeft = 50;
  const paddingRight = 30;
  const paddingTop = 50;
  const paddingBottom = 40;

  const chartWidth = width - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;

  const maxCount = Math.max(...recentDays.map((d) => d.contributionCount), 10);

  // Generate SVG path for smooth gradient area chart
  const points = recentDays.map((d, index) => {
    const x = paddingLeft + (index / (recentDays.length - 1)) * chartWidth;
    const y = paddingTop + chartHeight - (d.contributionCount / maxCount) * chartHeight;
    return { x, y, count: d.contributionCount, date: d.date };
  });

  const linePathD = points.reduce((acc, pt, i, arr) => {
    if (i === 0) return `M ${pt.x} ${pt.y}`;
    const prev = arr[i - 1];
    const midX = (prev.x + pt.x) / 2;
    return `${acc} C ${midX} ${prev.y}, ${midX} ${pt.y}, ${pt.x} ${pt.y}`;
  }, "");

  const firstPt = points[0];
  const lastPt = points[points.length - 1];
  const areaPathD = `${linePathD} L ${lastPt.x} ${paddingTop + chartHeight} L ${firstPt.x} ${paddingTop + chartHeight} Z`;

  // Grid lines
  const gridLines = [0, 0.25, 0.5, 0.75, 1].map((ratio) => {
    const y = paddingTop + chartHeight - ratio * chartHeight;
    const val = Math.round(ratio * maxCount);
    return `
      <line x1="${paddingLeft}" y1="${y}" x2="${width - paddingRight}" y2="${y}" stroke="#30363d" stroke-dasharray="3,3" stroke-width="1" />
      <text x="${paddingLeft - 10}" y="${y + 4}" fill="#8b949e" font-size="11" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif">${val}</text>
    `;
  }).join("\n");

  // Date labels
  const dateLabels = [0, 15, 30, 45, recentDays.length - 1].map((idx) => {
    const pt = points[idx];
    const dateObj = new Date(pt.date);
    const label = dateObj.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    return `<text x="${pt.x}" y="${height - 15}" fill="#8b949e" font-size="11" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif">${label}</text>`;
  }).join("\n");

  // Dots for days with high contributions
  const dots = points
    .filter((pt) => pt.count > 0)
    .map((pt) => {
      return `
        <circle cx="${pt.x}" cy="${pt.y}" r="3" fill="#58a6ff" stroke="#0d1117" stroke-width="1.5" />
      `;
    })
    .join("\n");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="100%">
  <defs>
    <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#58a6ff" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#58a6ff" stop-opacity="0.0" />
    </linearGradient>
    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#388bfd" />
      <stop offset="100%" stop-color="#58a6ff" />
    </linearGradient>
  </defs>

  <!-- Background Card -->
  <rect width="${width}" height="${height}" rx="8" fill="#0d1117" stroke="#30363d" stroke-width="1" />

  <!-- Header -->
  <text x="24" y="32" fill="#c9d1d9" font-size="14" font-weight="600" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif">Contribution & Activity History (Last 60 Days)</text>
  <text x="${width - 24}" y="32" fill="#58a6ff" font-size="13" font-weight="600" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif">${totalContributions.toLocaleString()} Total Contributions</text>

  <!-- Grid -->
  ${gridLines}

  <!-- Area Fill -->
  <path d="${areaPathD}" fill="url(#areaGradient)" />

  <!-- Smooth Line -->
  <path d="${linePathD}" fill="none" stroke="url(#lineGradient)" stroke-width="2.5" stroke-linecap="round" />

  <!-- Contribution Points -->
  ${dots}

  <!-- Dates -->
  ${dateLabels}
</svg>`;

  const outPath = path.resolve("assets/activity.svg");
  fs.writeFileSync(outPath, svg.trim(), "utf8");
  console.log("Activity graph SVG successfully generated at:", outPath);
}

generateSvg();
