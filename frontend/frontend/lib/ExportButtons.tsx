import { AnalysisResult } from "../types/analysis";
import { exportJSON } from "../lib/exportJson";

interface Props {
  result: AnalysisResult;
}

export default function ExportButtons({
  result,
}: Props) {
  return (
    <div className="flex gap-4 mb-8">

