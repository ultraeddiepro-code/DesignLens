import { AnalysisResult } from "../types/analysis";

interface Props {
  result: AnalysisResult;
}

export default function KeywordsSection({
  result,
}: Props) {
  return (
    <div className="mb-8">

      <h2 className="text-2xl font-bold mb-4">
        Keywords
      </h2>

      <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">

        <div className="flex flex-wrap gap-3">

          {result.style.keywords.map(
            (keyword, index) => (
              <span
                key={index}
                className="bg-zinc-800 px-4 py-2 rounded-lg"
              >
                {keyword}
              </span>
            )
          )}

        </div>

      </div>

    </div>
  );
}