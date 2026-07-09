import { AnalysisResult } from "../types/analysis";

interface Props {
  result: AnalysisResult;
}

export default function TypographySection({ result }: Props) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">
        Typography
      </h2>

      <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">

        <p>
          <strong>Text Density:</strong>{" "}
          {result.typography.text_density}%
        </p>

        <p>
          <strong>Readability:</strong>{" "}
          {result.typography.readability}
        </p>

        <p className="mt-3 text-gray-300">
          {result.typography.suggestion}
        </p>

      </div>
    </div>
  );
}