import React from 'react';
import { GEO_REGIONS } from '../data/landingData';

/* Equirectangular projection at 10 units per degree. Outline and markers are
   projected through the same function, so every dot lands where its real
   coordinate puts it. Nothing here is drawn by eye. */
const LON_MIN = -18;
const LAT_MAX = 38;
const K = 10;

const px = (lon: number) => (lon - LON_MIN) * K;
const py = (lat: number) => (LAT_MAX - lat) * K;
const path = (pts: [number, number][]) =>
  pts.map(([lon, lat], i) => `${i ? 'L' : 'M'}${px(lon).toFixed(0)} ${py(lat).toFixed(0)}`).join(' ') + ' Z';

// Coastal waypoints, clockwise from Tunisia.
const MAINLAND: [number, number][] = [
  [10, 37], [20, 32], [25, 32], [30, 31], [33, 31], [35, 28], [37, 22], [39, 15],
  [43, 12], [48, 11.5], [51, 10.5], [48, 5], [44, 2], [41, -2], [40, -7], [40, -12],
  [40, -16], [35, -21], [33, -26], [31, -30], [27, -34], [22, -34.5], [18, -34],
  [15, -28], [12, -18], [13, -12], [12, -6], [9, -1], [9, 4], [5, 4], [0, 5],
  [-4, 5], [-8, 4.5], [-13, 8], [-16, 12], [-17, 15], [-16, 20], [-13, 25],
  [-10, 28], [-6, 32], [-5, 35], [0, 36], [5, 37],
];

const MADAGASCAR: [number, number][] = [[45, -12], [50, -15], [48, -25], [44, -21], [43, -16]];

/* Capital coordinates for the twelve focus markets. */
const MARKETS: { name: string; region: string; lon: number; lat: number }[] = [
  { name: 'Kenya', region: 'east', lon: 36.82, lat: -1.29 },
  { name: 'Ethiopia', region: 'east', lon: 38.74, lat: 9.03 },
  { name: 'Tanzania', region: 'east', lon: 35.75, lat: -6.16 },
  { name: 'Uganda', region: 'east', lon: 32.58, lat: 0.35 },
  { name: 'Rwanda', region: 'east', lon: 30.06, lat: -1.94 },
  { name: 'Nigeria', region: 'west', lon: 7.4, lat: 9.07 },
  { name: 'Ghana', region: 'west', lon: -0.19, lat: 5.6 },
  { name: "Côte d'Ivoire", region: 'west', lon: -5.29, lat: 6.83 },
  { name: 'South Africa', region: 'southern', lon: 28.19, lat: -25.75 },
  { name: 'Zambia', region: 'southern', lon: 28.32, lat: -15.39 },
  { name: 'Egypt', region: 'north', lon: 31.24, lat: 30.04 },
  { name: 'Morocco', region: 'north', lon: -6.84, lat: 34.02 },
];

const NAIROBI = { lon: 36.82, lat: -1.29 };

interface Props {
  selectedRegionId: string;
  onRegionSelect: (id: string) => void;
  className?: string;
}

export const AfricaInteractiveMap: React.FC<Props> = ({ selectedRegionId, onRegionSelect, className = '' }) => {
  const region = GEO_REGIONS.find((r) => r.id === selectedRegionId) ?? GEO_REGIONS[0];
  const isGlobal = region.id === 'global';

  return (
    <div className={`grid grid-cols-1 gap-x-14 gap-y-12 lg:grid-cols-12 ${className}`}>
      <div className="lg:col-span-4">
        <svg
          viewBox={`0 0 ${px(52)} ${py(-35)}`}
          className="mx-auto h-auto w-full max-w-[520px]"
          role="img"
          aria-label="Line map of Africa showing MindCraft's twelve focus markets, anchored in Nairobi"
        >
          <path d={path(MAINLAND)} fill="var(--color-emerald)" stroke="var(--color-line-strong)" strokeWidth="1.5" />
          <path d={path(MADAGASCAR)} fill="var(--color-emerald)" stroke="var(--color-line-strong)" strokeWidth="1.5" />

          {MARKETS.map((m) => {
            const on = !isGlobal && m.region === region.id;
            return (
              <circle
                key={m.name}
                cx={px(m.lon)}
                cy={py(m.lat)}
                r={on ? 7 : 5}
                fill={on ? 'var(--color-accent)' : 'var(--color-ink-3)'}
                className="transition-all duration-200"
              >
                <title>{m.name}</title>
              </circle>
            );
          })}

          {/* Nairobi is the anchor, always marked. */}
          <circle
            cx={px(NAIROBI.lon)}
            cy={py(NAIROBI.lat)}
            r="13"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="1.5"
            opacity="0.5"
          />
        </svg>

        <p className="mt-6 font-mono text-eyebrow tracking-[0.08em] text-[var(--color-ink-2)]">
          <span className="text-[var(--color-accent)]">●</span> Nairobi 1°17′S 36°49′E
        </p>
        <p className="mt-2 text-caption text-[var(--color-ink-3)]">
          Twelve focus markets. Focus means depth of coverage and an associate network, not an office.
        </p>
      </div>

      <div className="lg:col-span-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5">
          {GEO_REGIONS.map((r) => {
            const on = r.id === selectedRegionId;
            return (
              <button
                key={r.id}
                onClick={() => onRegionSelect(r.id)}
                aria-pressed={on}
                className={`group flex cursor-pointer flex-col items-start justify-start border-t-2 py-5 pr-5 text-left transition-colors ${
                  on
                    ? 'border-[var(--color-accent)]'
                    : 'border-[var(--color-line)] hover:border-[var(--color-line-strong)]'
                }`}
              >
                <span
                  className={`block text-h5 transition-colors ${
                    on ? 'text-[var(--color-ink-strong)]' : 'text-[var(--color-ink-2)] group-hover:text-[var(--color-ink)]'
                  }`}
                >
                  {r.name}
                </span>
                <span className="mt-1.5 block text-caption leading-snug text-[var(--color-ink-3)]">
                  {r.coverage}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 border border-[var(--color-line)] bg-[var(--color-ground-deep)]/70 p-6 lg:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <h3 className="text-h4">{region.name}</h3>
            <p className="text-caption text-[var(--color-ink-3)]">{region.nairobiRelation}</p>
          </div>

          <dl className="mt-6 grid grid-cols-1 gap-x-10 gap-y-6 border-t border-[var(--color-line)] pt-6 md:grid-cols-3">
            <div>
              <dt className="font-display text-body-sm font-medium text-[var(--color-ink-3)]">
                {isGlobal ? 'Markets' : 'Focus markets'}
              </dt>
              <dd className="mt-3 flex flex-wrap gap-2">
                {region.focusMarkets.map((m) => (
                  <span
                    key={m}
                    className="rounded-edge border border-[var(--color-accent-deep)] px-2.5 py-1 text-body-sm text-[var(--color-accent)]"
                  >
                    {m}
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt className="font-display text-body-sm font-medium text-[var(--color-ink-3)]">Context</dt>
              <dd className="mt-3 text-body-sm text-[var(--color-ink-2)]">{region.keyIntelligence}</dd>
            </div>
            <div>
              <dt className="font-display text-body-sm font-medium text-[var(--color-ink-3)]">Commercial</dt>
              <dd className="mt-3 text-body-sm text-[var(--color-ink-2)]">{region.commercialContext}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};
