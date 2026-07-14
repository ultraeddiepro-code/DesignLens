import { AnalysisResult } from "../types/analysis";

interface Props {
  result: AnalysisResult;
}

export default function PaletteSection({
  result,
}: Props) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">
        Color Palette
      </h2>

      <div className="flex flex-wrap gap-4">
        {result.palette.map((color, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-700 rounded-xl p-full "
          >
            <div
              className="w-full h-24 rounded-lg border"
              style={{
                backgroundColor: color.hex,
              }}
            />

            <p className="mt-3 font-mono text-sm">
              {color.hex}
            </p>

            <p className="text-blue-400 text-sm">
              {color.name}
            </p>

            <p className="text-gray-400 text-xs">
              RGB({color.rgb.join(", ")})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}