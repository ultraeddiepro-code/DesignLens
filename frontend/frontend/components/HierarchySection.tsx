import { AnalysisResult } from "../types/analysis";

interface Props {
  result: AnalysisResult;
}

export default function HierarchySection({ result }: Props) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">
        Visual Hierarchy
      </h2>

      <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">

        <p>
          <strong>Hierarchy Score:</strong>{" "}
          {result.hierarchy.score}/100
        </p>

        <p>
          <strong>Primary Focus:</strong>{" "}
          {result.hierarchy.primary_focus}
        </p>
