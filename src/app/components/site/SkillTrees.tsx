"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { careerClasses, type CareerClass } from "@/app/components/site/site-data";
import { toneStyles } from "@/app/components/site/design";

const NODE_W = 150;
const NODE_H = 46;
const GAP_X = 34;
const ROW_Y = [18, 118];

/** One class's tree: two branches of real tool progressions, joined at the root. */
function Tree({ career }: { career: CareerClass }) {
  const color = toneStyles[career.tone].color;
  const width = 5 * NODE_W + 4 * GAP_X + 4;
  const x = (index: number) => 2 + index * (NODE_W + GAP_X);
  const label = `${career.className} skill tree. ${career.skillTree
    .map((branch, index) => `Branch ${index + 1}: ${branch.join(", then ")}.`)
    .join(" ")}`;
  return (
    <div className="overflow-x-auto pb-2">
      <svg viewBox={`0 0 ${width} 184`} role="img" aria-label={label} className="h-auto w-full min-w-[46rem]">
        <path
          d={`M${x(0) + NODE_W / 2} ${ROW_Y[0] + NODE_H} V${ROW_Y[1]}`}
          stroke={color}
          strokeWidth="2"
          strokeDasharray="4 4"
          opacity="0.6"
        />
        {career.skillTree.map((branch, row) =>
          branch.map((node, index) => (
            <g key={node}>
              {index > 0 ? (
                <path
                  d={`M${x(index) - GAP_X} ${ROW_Y[row] + NODE_H / 2} h${GAP_X}`}
                  stroke={color}
                  strokeWidth="2"
                  markerEnd="url(#tree-arrow)"
                />
              ) : null}
              <rect
                x={x(index)}
                y={ROW_Y[row]}
                width={NODE_W}
                height={NODE_H}
                rx="4"
                fill={`rgba(21,13,36,${0.95})`}
                stroke={color}
                strokeWidth={index === branch.length - 1 ? 3 : 1.5}
              />
              <text
                x={x(index) + NODE_W / 2}
                y={ROW_Y[row] + NODE_H / 2 + 4}
                textAnchor="middle"
                fill="#FFF4E6"
                fontSize="11.5"
                fontFamily="var(--font-mono)"
              >
                {node}
              </text>
            </g>
          )),
        )}
        <defs>
          <marker id="tree-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0L10 5L0 10z" fill={color} />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

export default function SkillTrees() {
  return (
    <TabGroup>
      <TabList className="flex flex-wrap gap-2" aria-label="Choose your class">
        {careerClasses.map((career) => (
          <Tab
            key={career.id}
            className="mono border border-white/20 px-3 py-2 text-[11px] uppercase tracking-[0.12em] text-ink-100 hover:border-neon-cyan data-[selected]:border-sunset-pink data-[selected]:bg-sunset-pink data-[selected]:font-bold data-[selected]:text-night-900"
          >
            {career.className}
          </Tab>
        ))}
      </TabList>
      <TabPanels className="mt-6">
        {careerClasses.map((career) => (
          <TabPanel key={career.id} className="card fade-in p-6 sm:p-8">
            <p className={`mono text-[11px] uppercase tracking-[0.14em] ${toneStyles[career.tone].text}`}>
              Class · {career.title}
            </p>
            <h3 className="display mt-2 text-4xl">{career.className}</h3>
            <p className="mt-3 max-w-3xl leading-relaxed text-ink-100">{career.description}</p>
            <div className="mt-6">
              <Tree career={career} />
            </div>
            <p className="mono mt-3 text-[11px] text-ink-300">
              Typical progressions, not a certification track. You pick the branch.
            </p>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
}
