import { AnalysisResult } from "../types/analysis";

interface Props {
  result: AnalysisResult;
}

export default function HierarchySection({ result }: Props) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">
        Visual Hierarchy
      </h2>

      <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">

        <p>
          <strong>Hierarchy Score:</strong>{" "}
          {result.hierarchy.score}/100
        </p>

        <p>
          <strong>Primary Focus:</strong>{" "}
          {result.hierarchy.primary_focus}
        </p>

        <p>
          <strong>Secondary Focus:</strong>{" "}
          {result.hierarchy.secondary_focus}
        </p>

        <p className="mt-3">
          <strong>Reading Order:</strong>
        </p>

        <div className="flex gap-2 flex-wrap mt-2">
          {result.hierarchy.reading_order.map(
            (step, index) => (
              <span
                key={index}
                className="bg-zinc-800 px-3 py-2 rounded-lg"
              >
                {step}
              </span>
            )
          )}
        </div>

        <h3 className="font-semibold mt-5 mb-2">
          Suggestions
        </h3>

        <ul className="list-disc list-inside">
          {result.hierarchy.suggestions.map(
            (item, index) => (
              <li key={index}>
                {item}
              </li>
            )
          )}
        </ul>

      </div>
    </div>
  );
}