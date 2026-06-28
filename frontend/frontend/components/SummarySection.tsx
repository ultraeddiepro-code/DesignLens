import { AnalysisResult } from "../types/analysis";

interface Props {
  result: AnalysisResult;
}

export default function SummarySection({
  result,
}: Props) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">
        Design Summary
      </h2>

      <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
        <p className="text-gray-300 leading-relaxed">
          {result.style.summary}
        </p>
      </div>
    </div>
  );
}