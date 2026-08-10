"use client";

import { useMemo, useState } from "react";

type Level = { price: number; qty: number };
type Trade = {
  side: "BUY" | "SELL" | "RESET";
  price: number;
  qty: number;
  note: string;
  latencyUs: number;
  sequence: number;
};

const initialBids: Level[] = [
  { price: 100.04, qty: 420 },
  { price: 100.03, qty: 360 },
  { price: 100.02, qty: 610 },
  { price: 100.01, qty: 280 },
];

const initialAsks: Level[] = [
  { price: 100.05, qty: 330 },
  { price: 100.06, qty: 540 },
  { price: 100.07, qty: 260 },
  { price: 100.08, qty: 700 },
];

export default function OrderBookDemo() {
  const [bids, setBids] = useState(initialBids);
  const [asks, setAsks] = useState(initialAsks);
  const [trade, setTrade] = useState<Trade>({
    side: "BUY",
    price: 100.05,
    qty: 120,
    note: "Crossed spread, filled at best ask",
    latencyUs: 0.18,
    sequence: 0,
  });
  const [sequence, setSequence] = useState(0);
  const [prints, setPrints] = useState<Trade[]>([]);

  const spread = useMemo(() => (asks[0].price - bids[0].price).toFixed(2), [asks, bids]);
  const avgLatency = useMemo(() => {
    const samples = [trade, ...prints].filter((item) => item.side !== "RESET");
    if (!samples.length) return trade.latencyUs;
    return samples.reduce((sum, item) => sum + item.latencyUs, 0) / samples.length;
  }, [prints, trade]);

  const pushPrint = (nextTrade: Trade) => {
    setTrade(nextTrade);
    setPrints((current) => [nextTrade, ...current].slice(0, 4));
  };

  const crossOrder = () => {
    const nextSequence = sequence + 1;
    const isBuy = sequence % 2 === 0;
    if (isBuy) {
      const bestAsk = asks[0];
      const fillQty = Math.min(120 + sequence * 10, bestAsk.qty);
      pushPrint({
        side: "BUY",
        price: bestAsk.price,
        qty: fillQty,
        note: "Marketable buy matched by price-time priority",
        latencyUs: Number((0.14 + (nextSequence % 5) * 0.035 + (fillQty % 9) * 0.004).toFixed(3)),
        sequence: nextSequence,
      });
      setAsks((current) =>
        current.map((level, index) =>
          index === 0 ? { ...level, qty: Math.max(40, level.qty - fillQty) } : level
        )
      );
    } else {
      const bestBid = bids[0];
      const fillQty = Math.min(100 + sequence * 8, bestBid.qty);
      pushPrint({
        side: "SELL",
        price: bestBid.price,
        qty: fillQty,
        note: "Marketable sell consumed top bid liquidity",
        latencyUs: Number((0.15 + (nextSequence % 4) * 0.042 + (fillQty % 7) * 0.005).toFixed(3)),
        sequence: nextSequence,
      });
      setBids((current) =>
        current.map((level, index) =>
          index === 0 ? { ...level, qty: Math.max(35, level.qty - fillQty) } : level
        )
      );
    }
    setSequence(nextSequence);
  };

  const reset = () => {
    setBids(initialBids);
    setAsks(initialAsks);
    const resetTrade: Trade = {
      side: "RESET",
      price: 100.05,
      qty: 0,
      note: "Book state restored to the deterministic starting depth",
      latencyUs: 0.03,
      sequence: 0,
    };
    setTrade(resetTrade);
    setPrints([resetTrade]);
    setSequence(0);
  };

  return (
    <div className="technical-card overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] p-4">
        <div>
          <div className="section-kicker">Interactive Matching Core</div>
          <div className="mt-1 text-sm text-[var(--muted)]">
            Price-time priority, fills, and depth updates.
          </div>
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={crossOrder} className="button-primary px-3 py-2">
            Cross Order
          </button>
          <button type="button" onClick={reset} className="button-secondary px-3 py-2">
            Reset
          </button>
        </div>
      </div>

      <div className="grid gap-4 p-4 xl:grid-cols-[1fr_17rem]">
        <div className="grid gap-3 sm:grid-cols-2">
          <BookSide label="Bids" levels={bids} tone="bid" />
          <BookSide label="Asks" levels={asks} tone="ask" />
        </div>

        <div className="border border-[var(--line)] bg-[var(--surface-lowest)] p-3">
          <div className="mono mb-3 text-xs uppercase text-[var(--dim)]">Trade Print</div>
          <div
            className={`mono text-2xl font-bold ${
              trade.side === "BUY" ? "text-[var(--accent)]" : trade.side === "SELL" ? "text-[#ffb4ab]" : "text-[var(--muted)]"
            }`}
          >
            {trade.side}
          </div>
          <div className="mt-3 space-y-2 text-sm text-[var(--muted)]">
            <div className="flex justify-between border-t border-[var(--line)] pt-2">
              <span>Price</span>
              <span className="mono text-[var(--text)]">{trade.price.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-t border-[var(--line)] pt-2">
              <span>Qty</span>
              <span className="mono text-[var(--text)]">{trade.qty}</span>
            </div>
            <div className="flex justify-between border-t border-[var(--line)] pt-2">
              <span>Spread</span>
              <span className="mono text-[var(--text)]">{spread}</span>
            </div>
            <div className="flex justify-between border-t border-[var(--line)] pt-2">
              <span>Sample</span>
              <span className="mono text-[var(--text)]">{trade.latencyUs.toFixed(3)} us</span>
            </div>
            <div className="flex justify-between border-t border-[var(--line)] pt-2">
              <span>Avg</span>
              <span className="mono text-[var(--text)]">{avgLatency.toFixed(3)} us</span>
            </div>
          </div>
          <p className="mt-4 border-t border-[var(--line)] pt-3 text-xs leading-relaxed text-[var(--dim)]">
            {trade.note}
          </p>
          <div className="mt-4 border-t border-[var(--line)] pt-3">
            <div className="mono mb-2 text-[10px] uppercase text-[var(--dim)]">Recent actions</div>
            <div className="space-y-2">
              {prints.length ? (
                prints.map((item) => (
                  <div key={`${item.side}-${item.sequence}-${item.latencyUs}`} className="grid grid-cols-[3.5rem_1fr] gap-2 text-[11px]">
                    <span className="mono text-[var(--accent)]">{item.side}</span>
                    <span className="mono text-[var(--muted)]">
                      {item.side === "RESET" ? "state reset" : `${item.qty}@${item.price.toFixed(2)}`} / {item.latencyUs.toFixed(3)} us
                    </span>
                  </div>
                ))
              ) : (
                <div className="mono text-[11px] text-[var(--dim)]">run a cross order</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BookSide({
  label,
  levels,
  tone,
}: {
  label: string;
  levels: Level[];
  tone: "bid" | "ask";
}) {
  const maxQty = Math.max(...levels.map((level) => level.qty));
  const color = tone === "bid" ? "var(--accent)" : "#ffb4ab";

  return (
    <div className="border border-[var(--line)] bg-[var(--surface-lowest)] p-3">
      <div className="mono mb-3 flex justify-between text-xs uppercase text-[var(--dim)]">
        <span>{label}</span>
        <span>Px / Qty</span>
      </div>
      <div className="space-y-2">
        {levels.map((level, index) => (
          <div key={`${label}-${level.price}`} className="relative overflow-hidden border border-[var(--line)] px-3 py-2">
            <div
              className="absolute inset-y-0 opacity-15 transition-all duration-500"
              style={{
                [tone === "bid" ? "right" : "left"]: 0,
                width: `${Math.max(8, (level.qty / maxQty) * 100)}%`,
                background: color,
              }}
            />
            <div className="relative z-10 flex items-center justify-between">
              <span className="mono text-sm font-semibold" style={{ color }}>
                {level.price.toFixed(2)}
              </span>
              <span className="mono text-xs text-[var(--text)]">{level.qty}</span>
            </div>
            {index === 0 && (
              <div className="relative z-10 mt-1 text-[10px] uppercase text-[var(--dim)]">
                Best {tone === "bid" ? "bid" : "ask"}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
