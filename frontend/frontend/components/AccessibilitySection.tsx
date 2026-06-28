import { AnalysisResult } from "../types/analysis";

interface Props {
  result: AnalysisResult;
}

export default function AccessibilitySection({
  result,
}: Props) {
  return (
    <div className="mb-8">

      <h2 className="text-2xl font-bold mb-4">
        Accessibility
      </h2>

      <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">

        <p className="mb-4">
          <strong>Accessibility Score:</strong>{" "}
          {result.accessibility.score}/100
        </p>

        <h3 className="font-semibold mb-2">
          Suggestions
        </h3>

        <ul className="list-disc list-inside space-y-2">
          {result.accessibility.suggestions.map(
            (tip, index) => (
              <li
                key={index}
                className="text-gray-300"
              >
                {tip}
              </li>
            )
          )}
        </ul>

      </div>

    </div>
  );
}