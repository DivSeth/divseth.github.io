import Image from "next/image";

export default function AutoApplyShowcase() {
  return (
    <div className="technical-card h-full overflow-hidden">
      <div className="grid h-full gap-0 lg:grid-cols-[1fr_16rem]">
        <div className="relative min-h-[420px] border-b border-[var(--line)] bg-[var(--surface-lowest)] p-3 lg:border-b-0 lg:border-r">
          <Image
            src="/images/autoapply/application-pipeline.png"
            alt="AutoApply OS application pipeline dashboard"
            width={2048}
            height={1118}
            className="h-[74%] min-h-[280px] w-full border border-[var(--line)] object-cover object-left-top grayscale"
          />
          <div className="absolute bottom-6 right-6 w-[38%] min-w-[150px] border border-[var(--line)] bg-[var(--background)] p-2 shadow-2xl">
            <Image
              src="/images/autoapply/extension-popup.png"
              alt="AutoApply Chrome extension popup"
              width={718}
              height={550}
              className="w-full grayscale"
            />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3">
            <SurfaceStat label="Applications" value="pipeline" />
            <SurfaceStat label="Profiles" value="saved" />
            <SurfaceStat label="Sync" value="extension" />
          </div>
        </div>
        <div className="flex h-full flex-col p-4">
          <div className="section-kicker">Product Surface</div>
          <div className="mt-4 grid gap-3">
            {[
              ["Web", "Tracking dashboard"],
              ["Extension", "Autofill workflows"],
              ["Data", "RLS + encrypted PII"],
              ["Auth", "OAuth refresh + one-time setup"],
            ].map(([label, value]) => (
              <div key={label} className="border-t border-[var(--line)] pt-3">
                <div className="mono text-xs uppercase text-[var(--dim)]">{label}</div>
                <div className="mt-1 text-sm text-[var(--text)]">{value}</div>
              </div>
            ))}
          </div>
          <div className="mt-auto pt-4">
            <div className="border border-[var(--line)] bg-[var(--surface-lowest)] p-2">
              <Image
                src="/images/autoapply/application-profiles.png"
                alt="AutoApply profile management surface"
                width={2048}
                height={1118}
                className="aspect-[4/3] w-full object-cover object-left-top grayscale"
              />
            </div>
            <div className="mono mt-2 text-[10px] uppercase text-[var(--dim)]">
              Profile data feeds autofill state.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SurfaceStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-[var(--line)] bg-[var(--background)] p-2">
      <div className="mono text-[10px] uppercase text-[var(--dim)]">{label}</div>
      <div className="mt-1 text-xs text-[var(--text)]">{value}</div>
    </div>
  );
}
