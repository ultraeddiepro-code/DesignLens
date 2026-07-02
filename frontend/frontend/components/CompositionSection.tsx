import { AnalysisResult } from "../types/analysis";

interface Props {
  result: AnalysisResult;
}

export default function CompositionSection({
  result,
}: Props) {
  return (
    <div className="mb-8">

      <h2 className="text-2xl font-bold mb-4">
        Composition
      </h2>

      <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">

        <p>
          <strong>Symmetry:</strong>{" "}
          {result.composition.symmetry.toFixed(1)}%
        </p>

        <p>
          <strong>Balance:</strong>{" "}
          {result.composition.balance.toFixed(1)}%
        </p>

        <p>
          <strong>Rule of Thirds:</strong>{" "}
          {result.composition.rule_of_thirds
            ? "Yes"
            : "No"}
        </p>

        <p>
          <strong>Focus Point:</strong>{" "}
          ({result.composition.focus_point.x},
          {" "}
          {result.composition.focus_point.y})
        </p>

        <div className="mt-4">

          <h3 className="font-semibold mb-2">
            Suggestions
          </h3>

          <ul className="list-disc list-inside space-y-1">
            {result.composition.suggestions.map(
              (tip, index) => (
                <li key={index}>
                  {tip}
                </li>
              )
            )}
          </ul>

        </div>

      </div>

    </div>
  );
}