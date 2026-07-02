import { AnalysisResult } from "../types/analysis";

interface Props {
  result: AnalysisResult;
}

export default function CompositionSection({
  result,
}: Props) {
  return (
    <div className="mb-8">

      <h2 className="text-2xl font-bold mb-4">
        Composition
      </h2>

      <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">

        <p>
          <strong>Symmetry:</strong>{" "}
          {result.composition.symmetry.toFixed(1)}%
        </p>

       