import { AnalysisResult } from "../types/analysis";
import StatCard from "./StatCard";

interface Props {
  result: AnalysisResult;
}

export default function Dashboard({
  result,
}: Props) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

      <StatCard
        title="Design Score"
        value={`${result.design_score}/100`}
      />

      <StatCard
        title="Style"
        value={result.style.style}
      />

      <StatCard
        title="Mood"
        value={result.mood}
      />

      <StatCard
        title="Content"
        value={result.content_type}
      />

      <StatCard
        title="Layout"
        value={result.layout.layout}
      />

      <StatCard
        title="Harmony"
        value={result.harmony.scheme}
      />

      <StatCard
        title="Accessibility"
        value={`${result.accessibility.score}/100`}
      />

      <StatCard
        title="Typography"
        value={result.typography.readability}
      />

    </div>
  );
}