import { AnalysisResult } from "../types/analysis";

interface Props {
  result: AnalysisResult;
}

export default function HarmonySection({
  result,
}: Props) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">
        Color Harmony
      </h2>

      <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">

        <p>
          <strong>Scheme:</strong>{" "}
          {result.harmony.scheme}
        </p>

        <p>
          <strong>Harmony Score:</strong>{" "}
          {result.harmony.score}/100
        </p>

        <p className="mt-4 text-gray-300">
          {result.harmony.description}
        </p>

      </div>
    </div>
  );
}