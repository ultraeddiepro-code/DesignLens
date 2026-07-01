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
            className="bg-zinc-900 border border-zinc-700 rounded-xl p-4 w-40"
          >
    