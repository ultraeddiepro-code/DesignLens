import { AnalysisResult } from "../types/analysis";

interface Props {
  result: AnalysisResult;
}

export default function ContrastSection({ result }: Props) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">
        Contrast Analysis
      </h2>

      <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">

        <p>
          <strong>Contrast Ratio:</strong>{" "}
          {result.contrast.ratio}:1
        </p>

        <p>
          <strong>Rating:</strong>{" "}
          {result.contrast.rating}
        </p>

        <p>
          <strong>WCAG:</strong>{" "}
          {result.contrast.wcag}
        </p>

      </div>
    </div>
  );
}
