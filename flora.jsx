// flora.jsx — SVG fern fronds, palm leaves, monstera silhouettes used for parallax layers
// Loaded via Babel <script type="text/babel">

const Fern = ({ style, fill = "#050C09", opacity = 1 }) => (
  <svg className="fern-svg" viewBox="0 0 400 600" preserveAspectRatio="xMidYMid meet"
       style={{ ...style, opacity }} aria-hidden="true">
    {/* central stem */}
    <path d="M200 600 C 198 480, 202 360, 200 240 C 198 140, 202 60, 200 0"
          stroke={fill} strokeWidth="3" fill="none" />
    {/* leaflets along stem */}
    {Array.from({ length: 22 }).map((_, i) => {
      const t = i / 22;
      const y = 580 - t * 560;
      const len = 180 * (1 - t * 0.85);
      const droop = 14 + t * 12;
      return (
        <g key={i}>
          <path d={`M200 ${y} C ${200 - len * 0.35} ${y + droop}, ${200 - len * 0.7} ${y + droop * 1.4}, ${200 - len} ${y + droop * 1.8}`}
                stroke={fill} strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d={`M200 ${y} C ${200 + len * 0.35} ${y + droop}, ${200 + len * 0.7} ${y + droop * 1.4}, ${200 + len} ${y + droop * 1.8}`}
                stroke={fill} strokeWidth="2.5" fill="none" strokeLinecap="round" />
          {/* pinnules */}
          {Array.from({ length: 8 }).map((_, j) => {
            const u = (j + 1) / 9;
            const x1 = 200 - len * u;
            const y1 = y + droop * u * 1.6;
            const x2 = 200 + len * u;
            return (
              <g key={j}>
                <ellipse cx={x1} cy={y1 - 4} rx={len * 0.05} ry={3} fill={fill} transform={`rotate(${-30 - u * 20} ${x1} ${y1})`} />
                <ellipse cx={x2} cy={y1 - 4} rx={len * 0.05} ry={3} fill={fill} transform={`rotate(${30 + u * 20} ${x2} ${y1})`} />
              </g>
            );
          })}
        </g>
      );
    })}
  </svg>
);

const Monstera = ({ style, fill = "#050C09", opacity = 1, flip = false }) => (
  <svg className="fern-svg" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet"
       style={{ ...style, opacity, transform: flip ? "scaleX(-1)" : "none" }} aria-hidden="true">
    <g fill={fill}>
      {/* leaf body */}
      <path d="M 250 480
               C 130 470, 50 380, 50 250
               C 50 150, 110 70, 200 50
               C 260 40, 320 70, 360 130
               C 410 200, 430 290, 410 370
               C 390 440, 330 480, 250 480 Z" />
      {/* cutouts to suggest monstera fenestrations - using lighter fill */}
    </g>
    <g fill="rgba(255,255,255,0.08)">
      <ellipse cx="160" cy="220" rx="32" ry="14" transform="rotate(-30 160 220)" />
      <ellipse cx="220" cy="180" rx="38" ry="14" transform="rotate(-15 220 180)" />
      <ellipse cx="290" cy="190" rx="36" ry="14" transform="rotate(10 290 190)" />
      <ellipse cx="180" cy="300" rx="40" ry="16" transform="rotate(-25 180 300)" />
      <ellipse cx="270" cy="310" rx="44" ry="16" transform="rotate(8 270 310)" />
      <ellipse cx="220" cy="400" rx="36" ry="14" transform="rotate(-12 220 400)" />
      <ellipse cx="320" cy="400" rx="32" ry="14" transform="rotate(20 320 400)" />
    </g>
    {/* stem */}
    <path d="M 250 480 L 250 500" stroke={fill} strokeWidth="6" />
  </svg>
);

const PalmFrond = ({ style, fill = "#050C09", opacity = 1, flip = false }) => (
  <svg className="fern-svg" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid meet"
       style={{ ...style, opacity, transform: flip ? "scaleX(-1)" : "none" }} aria-hidden="true">
    {/* curved central rachis */}
    <path d="M 20 380 C 200 360, 400 280, 580 100"
          stroke={fill} strokeWidth="4" fill="none" />
    {/* fronds */}
    {Array.from({ length: 30 }).map((_, i) => {
      const t = i / 29;
      // approximate point along the curve
      const x = 20 + (580 - 20) * t;
      const y = 380 - (380 - 100) * Math.pow(t, 1.3);
      const len = 60 + 110 * Math.sin(t * Math.PI);
      const angle = -60 - t * 30;
      return (
        <ellipse key={`a-${i}`} cx={x} cy={y} rx={len / 2} ry={6}
                 fill={fill}
                 transform={`rotate(${angle} ${x} ${y}) translate(${-len / 2} 0)`} />
      );
    })}
  </svg>
);

// Big silhouetted leaf - good for foreground blur layers
const BigLeaf = ({ style, fill = "#050C09", opacity = 1, rotate = 0 }) => (
  <svg className="fern-svg" viewBox="0 0 400 700" preserveAspectRatio="xMidYMid meet"
       style={{ ...style, opacity, transform: `rotate(${rotate}deg)` }} aria-hidden="true">
    <path d="M 200 680
             C 90 660, 30 540, 40 380
             C 50 230, 110 80, 200 20
             C 290 80, 350 230, 360 380
             C 370 540, 310 660, 200 680 Z"
          fill={fill} />
    <path d="M 200 680 L 200 20" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
    {Array.from({ length: 10 }).map((_, i) => {
      const y = 100 + i * 55;
      const w = 140 - Math.abs(i - 5) * 18;
      return (
        <g key={i}>
          <path d={`M 200 ${y} C ${200 - w * 0.4} ${y + 12}, ${200 - w * 0.8} ${y + 28}, ${200 - w} ${y + 42}`}
                stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" fill="none" />
          <path d={`M 200 ${y} C ${200 + w * 0.4} ${y + 12}, ${200 + w * 0.8} ${y + 28}, ${200 + w} ${y + 42}`}
                stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" fill="none" />
        </g>
      );
    })}
  </svg>
);

Object.assign(window, { Fern, Monstera, PalmFrond, BigLeaf });
