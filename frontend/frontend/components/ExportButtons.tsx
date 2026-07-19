import { AnalysisResult } from "../types/analysis";
import { exportJSON } from "../lib/exportJson";
import { exportPDF } from "../lib/exportPdf";

interface Props {
  result: AnalysisResult;
}

export default function ExportButtons({
  result,
}: Props) {
  return (
    <div className="flex gap-4 mb-8">
      <button
        onClick={() => exportJSON(result)}
        className="bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-xl"
      >
        📥 Download JSON
      </button>

      <button
        onClick={exportPDF}
        className="bg-green-600 hover:bg-green-500 px-5 py-3 rounded-xl"
      >
        📄 Export PDF
      </button>
    </div>
  );
}