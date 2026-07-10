import { AnalysisResult } from "../types/analysis";

interface Props {
  result: AnalysisResult;
}

export default function CritiqueSection({
  result,
}: Props) {
  return (
    <div className="mb-8">

      <h2 className="text-2xl font-bold mb-4">
        AI Design Critique
      </h2>

      <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">

        <p className="mb-6 text-gray-300">
          {result.critique.summary}
        </p>

        <h3 className="font-semibold text-green-400 mb-2">
          Strengths
        </h3>

        <ul className="list-disc list-inside mb-6">
          {result.critique.strengths.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3 className="font-semibold text-red-400 mb-2">
          Weaknesses
        </h3>
