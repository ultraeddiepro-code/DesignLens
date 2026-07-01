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
