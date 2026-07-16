import { AnalysisResult } from "../types/analysis";
import { exportJSON } from "../lib/exportJson";

interface Props {
  result: AnalysisResult;
}

export default function ExportButtons({
  result,
}: Props) {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <button
        onClick={() => exportJSON(result)}
        className="bg-blue-600 hover:bg-blue-500 transition-colors px-5 py-3 rounded-xl font-semibold"
      >
        📥 Download JSON
      </button>

      <button
        className="bg-green-600 hover:bg-green-500 transition-colors px-5 py-3 rounded-xl font-semibold"
      >
        📄 Export PDF
      </button>
    </div>
  );
}