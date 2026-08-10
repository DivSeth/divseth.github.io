import type { WorkItem } from "@/data/work";

export function WorkVisual({ item }: { item: WorkItem }) {
  if (item.visual === "siemens") return <SiemensVisual />;
  if (item.visual === "deloitte") return <DeloitteVisual />;
  if (item.visual === "nic") return <NicVisual />;
  if (item.id === "gt") return <PolicyAnalyticsVisual />;
  if (item.id === "build") return <BuildUmassVisual />;
  return <SecondaryVisual label={item.focus} />;
}

function SiemensVisual() {
  return (
    <div className="technical-card overflow-hidden p-4">
      <div className="mb-4 flex items-center justify-between border-b border-[var(--line)] pb-3">
        <div className="section-kicker">Agent Factory + Runtime Trace</div>
        <div className="mono text-xs text-[var(--dim)]">tools / skills / loops</div>
      </div>
      <div className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mono mb-3 text-xs uppercase text-[var(--dim)]">Reusable agent path</div>
          <div className="grid gap-3">
            <Node title="Capability" detail="document, analysis, export" active />
            <Rail />
            <Node title="Tool Contract" detail="schema, inputs, guardrails" />
            <Rail />
            <Node title="Skill Context" detail="domain playbook + constraints" />
            <Rail />
            <Node title="Orchestrator" detail="select, call, verify, store" active />
          </div>
        </div>
        <div className="grid content-between gap-4">
          <div>
            <div className="mono mb-3 text-xs uppercase text-[var(--dim)]">Production hardening</div>
            <div className="grid gap-2">
              <Signal label="correlation ids" value="job trace" />
              <Signal label="queue safety" value="lock renewal" active />
              <Signal label="state checks" value="skip duplicate work" />
              <Signal label="telemetry" value="token + operation logs" />
            </div>
          </div>
          <div className="border border-[var(--line)] bg-[var(--surface-lowest)] p-4">
            <div className="mono text-xs uppercase text-[var(--dim)]">Runtime path</div>
            <div className="mt-3 flex items-center gap-3">
              <div className="text-3xl font-bold text-[var(--dim)]">6m44s</div>
              <div className="relative h-px flex-1 bg-[var(--line)]">
                <span className="absolute -right-1 -top-[5px] h-3 w-3 rotate-45 border-r border-t border-[var(--accent)]" />
              </div>
              <div className="text-4xl font-bold text-[var(--accent)]">5m50s</div>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              <Mini label="API" value="intake" />
              <Mini label="Queue" value="async" />
              <Mini label="Worker" value="parallel" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DeloitteVisual() {
  return (
    <div className="technical-card p-4">
      <div className="section-kicker mb-4">Embedding Retrieval</div>
      <div className="grid gap-3">
        {["Image corpus", "DINOv2 embeddings", "FAISS HNSW", "Nearest examples", "Prediction features"].map(
          (label, index) => (
            <div key={label} className="grid grid-cols-[2.5rem_1fr] items-center gap-3">
              <span className="mono text-xs text-[var(--dim)]">{String(index + 1).padStart(2, "0")}</span>
              <div className="relative border border-[var(--line)] bg-[var(--surface-lowest)] p-3">
                <div className="text-sm text-[var(--text)]">{label}</div>
                <div className="mt-2 h-1 bg-[var(--line)]">
                  <div className="h-full bg-[var(--accent)]" style={{ width: `${38 + index * 12}%` }} />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

function NicVisual() {
  return (
    <div className="technical-card overflow-hidden p-4">
      <div className="mb-4 flex items-center justify-between border-b border-[var(--line)] pb-3">
        <div className="section-kicker">Ingestion + Retrieval Flow</div>
        <div className="mono text-xs text-[var(--dim)]">chatbot / vector db</div>
      </div>
      <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="grid gap-3">
          <Node title="Upload" detail="documents enter ingestion" />
          <Rail />
          <Node title="Chunk + Embed" detail="Qwen3 vectors" active />
          <Rail />
          <Node title="Milvus Index" detail="searchable semantic store" />
          <Rail />
          <Node title="Grounded Reply" detail="retrieved context + Mistral" active />
        </div>
        <div className="relative min-h-[260px] border border-[var(--line)] bg-[var(--surface-lowest)] p-4">
          <div className="absolute left-5 top-5 h-[calc(100%-2.5rem)] w-px bg-[var(--line)]" />
          {[
            ["User", "Hindi / English / regional query", "top-5"],
            ["API", "session + retrieval request", "top-[28%]"],
            ["Vector DB", "ranked chunks returned", "top-[52%]"],
            ["LLM", "grounded answer", "top-[76%]"],
          ].map(([label, value, top], index) => (
            <div key={label} className={`absolute left-10 right-4 ${top}`}>
              <div className="grid grid-cols-[5rem_1fr] gap-3">
                <div className="mono text-xs uppercase text-[var(--accent)]">{label}</div>
                <div className="border border-[var(--line)] bg-[rgba(173,198,255,0.05)] p-2 text-sm text-[var(--text)]">
                  {value}
                </div>
              </div>
              {index < 3 && <div className="ml-[5.6rem] mt-2 h-5 w-px bg-[var(--accent)] opacity-70" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SecondaryVisual({ label }: { label: string }) {
  return (
    <div className="technical-card p-4">
      <div className="section-kicker">Secondary Work</div>
      <div className="mt-8 text-2xl font-semibold text-[var(--text)]">{label}</div>
    </div>
  );
}

function PolicyAnalyticsVisual() {
  const points = "0,68 12,63 24,57 36,51 48,44 60,38 72,29 84,24 100,18";
  const optimistic = "0,68 16,59 32,47 48,36 64,27 82,19 100,12";
  const slow = "0,68 16,66 32,61 48,57 64,50 82,43 100,39";

  return (
    <div className="technical-card p-4">
      <div className="mb-4 flex items-center justify-between border-b border-[var(--line)] pb-3">
        <div className="section-kicker">Policy Analytics</div>
        <div className="mono text-xs text-[var(--dim)]">forecast / index</div>
      </div>
      <svg viewBox="0 0 100 82" className="h-64 w-full overflow-visible">
        {[20, 40, 60].map((y) => (
          <line key={y} x1="0" x2="100" y1={y} y2={y} stroke="var(--line)" strokeWidth="0.35" />
        ))}
        <polyline points={slow} fill="none" stroke="var(--line)" strokeWidth="1.2" strokeDasharray="2 2" vectorEffect="non-scaling-stroke" />
        <polyline points={optimistic} fill="none" stroke="#ffb4ab" strokeWidth="1" opacity="0.9" vectorEffect="non-scaling-stroke" />
        <polygon points={`${points} 100,82 0,82`} fill="var(--accent)" opacity="0.08" />
        <polyline points={points} fill="none" stroke="var(--accent)" strokeWidth="1.3" vectorEffect="non-scaling-stroke" />
        <circle cx="72" cy="29" r="2" fill="var(--accent)" />
      </svg>
      <div className="grid grid-cols-3 border-t border-[var(--line)] pt-3 text-center">
        <Metric label="MPI" value="Trajectory" />
        <Metric label="SPI" value="Ranking" />
        <Metric label="Output" value="Scenarios" />
      </div>
    </div>
  );
}

function BuildUmassVisual() {
  return (
    <div className="technical-card p-4">
      <div className="mb-4 flex items-center justify-between border-b border-[var(--line)] pb-3">
        <div className="section-kicker">Product Delivery</div>
        <div className="mono text-xs text-[var(--dim)]">team / sprint / ship</div>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {[
          ["Discover", "stakeholder needs", 3],
          ["Shape", "wireframes + tickets", 5],
          ["Ship", "campaign features", 4],
        ].map(([title, detail, count]) => (
          <div key={title} className="border border-[var(--line)] bg-[var(--surface-lowest)] p-3">
            <div className="mono text-xs uppercase text-[var(--dim)]">{title}</div>
            <div className="mt-2 text-sm text-[var(--text)]">{detail}</div>
            <div className="mt-4 grid gap-2">
              {Array.from({ length: Number(count) }).map((_, index) => (
                <div key={index} className="h-7 border border-[var(--line)] bg-[rgba(173,198,255,0.05)]" />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <Node title="Team" detail="8-person student product group" />
        <Node title="Outcome" detail="$25k+ raised for public schools" active />
      </div>
    </div>
  );
}

function Node({ title, detail, active = false }: { title: string; detail: string; active?: boolean }) {
  return (
    <div className={`border p-3 ${active ? "border-[var(--accent)] bg-[rgba(173,198,255,0.06)]" : "border-[var(--line)] bg-[var(--surface-lowest)]"}`}>
      <div className="mono text-xs uppercase text-[var(--dim)]">{title}</div>
      <div className="mt-2 text-sm text-[var(--text)]">{detail}</div>
    </div>
  );
}

function Rail() {
  return <div className="ml-5 h-5 w-px bg-[var(--accent)] opacity-60" />;
}

function Signal({ label, value, active = false }: { label: string; value: string; active?: boolean }) {
  return (
    <div className={`grid grid-cols-[6.5rem_1fr] border p-2 ${active ? "border-[var(--accent)] bg-[rgba(173,198,255,0.06)]" : "border-[var(--line)] bg-[var(--surface-lowest)]"}`}>
      <div className="mono text-[10px] uppercase text-[var(--dim)]">{label}</div>
      <div className="text-xs text-[var(--text)]">{value}</div>
    </div>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-[var(--line)] p-2">
      <div className="mono text-[10px] uppercase text-[var(--dim)]">{label}</div>
      <div className="mt-1 text-xs text-[var(--text)]">{value}</div>
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
