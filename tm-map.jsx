// tm-map.jsx — stylized Latin America silhouette with route nodes
// A simplified, recognizable outline used as a route diagram.

function LatAmMap({ nodes = [], locked = true }) {
  // viewBox 0 0 360 560 — geographically accurate South America outline
  const path = "M81 15 L146 25 L162 43 L227 78 L234 110 L317 139 L344 165 L317 213 L285 292 L245 332 L180 410 L122 466 L104 541 L53 482 L61 442 L78 371 L87 296 L87 252 L39 205 L10 147 L14 110 L35 78 L39 47 L68 23 Z";

  return (
    <svg viewBox="0 0 360 560" role="img" aria-label="Маршрут по Латинской Америке">
      <defs>
        <radialGradient id="tmMapFill" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#16271E" />
          <stop offset="100%" stopColor="#0C1812" />
        </radialGradient>
        <filter id="tmMapGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* dotted graticule backdrop */}
      <g opacity="0.12" stroke="#C8A877" strokeWidth="0.5">
        {Array.from({ length: 9 }).map((_, i) =>
        <line key={"h" + i} x1="20" y1={40 + i * 60} x2="340" y2={40 + i * 60} strokeDasharray="2 8" />
        )}
        {Array.from({ length: 6 }).map((_, i) =>
        <line key={"v" + i} x1={40 + i * 56} y1="20" x2={40 + i * 56} y2="540" strokeDasharray="2 8" />
        )}
      </g>

      {/* landmass */}
      <path d={path} fill="url(#tmMapFill)" stroke="#C8A877" strokeOpacity="0.45" strokeWidth="1.2" />
      <path d={path} fill="none" stroke="#C8A877" strokeOpacity="0.12" strokeWidth="6" />

      {/* route connecting line */}
      {nodes.length > 1 &&
      <polyline
        points={nodes.map((n) => `${n.x},${n.y}`).join(" ")}
        fill="none" stroke="#C8A877" strokeWidth="1.4"
        strokeDasharray="3 5" strokeOpacity={locked ? 0.35 : 0.8}
        style={{ transition: "stroke-opacity .6s" }} />

      }

      {/* nodes */}
      {nodes.map((n, i) => {
        const hidden = locked && n.secret;
        return (
          <g key={i} className="tm-marker" transform={`translate(${n.x} ${n.y})`}>
            {!hidden && <circle className="tm-map-pulse" r="4" fill="none" stroke="#C8A877" strokeWidth="1.2" />}
            <circle r={hidden ? 3 : 5} fill={hidden ? "#1a2c22" : "#C8A877"} stroke="#0C1812" strokeWidth="1.5" opacity={hidden ? 0.6 : 1} />
            {!hidden &&
            <text x="10" y="4" fontSize="10" fontWeight="600" fontFamily="Manrope, sans-serif" fill="#EAF0EA">
                {n.label}
              </text>
            }
            {hidden &&
            <text x="10" y="4" fontSize="10" fontWeight="600" fontFamily="Manrope, sans-serif" fill="#5E6E64">
                ? ? ?
              </text>
            }
          </g>);

      })}
    </svg>);

}

window.LatAmMap = LatAmMap;