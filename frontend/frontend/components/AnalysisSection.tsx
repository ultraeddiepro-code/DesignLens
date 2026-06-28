import { AnalysisResult } from "../types/analysis";

interface Props {
  result: AnalysisResult;
}

export default function AnalysisSection({
  result,
}: Props) {
  return (
    <div className="mb-8">

      <h2 className="text-2xl font-bold mb-4">
        Analysis Result
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-700">

          <p>
            <strong>Filename:</strong>{" "}
            {result.filename}
          </p>

          <p>
            <strong>Style:</strong>{" "}
            {result.style.style}
          </p>

          <p>
            <strong>Content Type:</strong>{" "}
            {result.content_type}
          </p>

          <p>
            <strong>Mood:</strong>{" "}
            {result.mood}
          </p>

          <p>
            <strong>Layout:</strong>{" "}
            {result.layout.layout}
          </p>

          <p>
            <strong>Design Score:</strong>{" "}
            {result.design_score}/100
          </p>

          <p>
            <strong>Brightness:</strong>{" "}
            {result.style.brightness}
          </p>

          <p>
            <strong>Saturation:</strong>{" "}
            {result.style.saturation}
          </p>

        </div>

        <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-700">

          <h3 className="font-semibold mb-3">
            Keywords
          </h3>

          <div className="flex flex-wrap gap-2">

            {result.style.keywords.map(
              (keyword, index) => (
                <span
                  key={index}
                  className="bg-zinc-800 px-3 py-1 rounded-lg"
                >
                  {keyword}
                </span>
              )
            )}

          </div>

        </div>

      </div>

    </div>
  );
}