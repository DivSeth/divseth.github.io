export default function BacktesterVisual() {
  const points = [
    [0, 72],
    [10, 68],
    [20, 62],
    [30, 67],
    [40, 50],
    [50, 54],
    [60, 42],
    [70, 35],
    [80, 31],
    [90, 28],
    [100, 22],
  ];
  const curve = points.map(([x, y]) => `${x},${y}`).join(" ");

  return (
    <div className="technical-card h-full p-4">
      <div className="mb-4 flex items-center justify-between border-b border-[var(--line)] pb-3">
        <div className="section-kicker">Strategy Output</div>
        <div className="mono text-xs text-[var(--dim)]">OHLCV / Risk</div>
      </div>
      <svg viewBox="0 0 100 92" className="h-72 w-full overflow-visible">
        {[20, 40, 60, 80].map((y) => (
          <line key={y} x1="0" x2="100" y1={y} y2={y} stroke="var(--line)" strokeWidth="0.3" />
        ))}
        {[8, 19, 30, 41, 52, 63, 74, 85, 96].map((x) => (
          <line key={x} x1={x} x2={x} y1="10" y2="84" stroke="var(--line)" strokeWidth="0.2" opacity="0.45" />
        ))}
        <polygon
          points={`${curve} 100,84 0,84`}
          fill="var(--accent)"
          opacity="0.08"
        />
        <polyline
          points={curve}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
        />
        <path d="M 0 64 C 18 72, 35 66, 52 74 S 82 70, 100 76" fill="none" stroke="#ffb4ab" strokeWidth="0.8" opacity="0.8" vectorEffect="non-scaling-stroke" />
        <circle cx="20" cy="62" r="1.8" fill="var(--accent)" />
        <circle cx="42" cy="50" r="1.8" fill="#ffb4ab" />
        <circle cx="68" cy="35" r="1.8" fill="var(--accent)" />
        <rect x="62" y="30" width="26" height="48" fill="#ffb4ab" opacity="0.05" />
        <text x="64" y="76" fill="var(--dim)" fontSize="3.5" className="mono">drawdown watch</text>
      </svg>
      <div className="grid grid-cols-3 border-t border-[var(--line)] pt-3 text-center">
        <Metric label="Sharpe" value="Verified" />
        <Metric label="Drawdown" value="Tracked" />
        <Metric label="VaR/CVaR" value="Historical" />
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-4">
        <Mini label="Cash" value="accounted" />
        <Mini label="Position" value="tracked" />
        <Mini label="Costs" value="slippage" />
        <Mini label="Tests" value="pytest" />
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-r border-[var(--line)] px-2 last:border-r-0">
      <div className="mono text-[10px] uppercase text-[var(--dim)]">{label}</div>
      <div className="mt-1 text-sm font-semibold text-[var(--text)]">{value}</div>
    </div>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-[var(--line)] bg-[var(--surface-lowest)] p-2 text-center">
      <div className="mono text-[10px] uppercase text-[var(--dim)]">{label}</div>
      <div className="mt-1 text-xs text-[var(--text)]">{value}</div>
    </div>
  );
}
