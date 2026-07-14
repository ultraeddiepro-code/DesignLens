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

        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`px-5 py-2 rounded-xl transition

          ${
            active === tab
              ? "bg-blue-600"
              : "bg-zinc-800 hover:bg-zinc-700"
          }`}
        >
          {tab}
        </button>

      ))}

    </div>
  );
}