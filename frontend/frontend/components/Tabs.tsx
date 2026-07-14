interface Props {
  active: string;
  setActive: (tab: string) => void;
}

export default function Tabs({
  active,
  setActive,
}: Props) {

  const tabs = [
    "Overview",
    "Colors",
    "Composition",
    "Accessibility",
    "AI Review",
  ];

  return (
    <div className="flex gap-3 mb-8 flex-wrap">

      {tabs.map(tab => (

  