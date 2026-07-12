interface Props {
  title: string;
  value: string | number;
  color?: string;
}

export default function StatCard({
  title,
  value,
  color = "text-white",
}: Props) {
  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-5">

      <p className="text-gray-400 text-sm">
        {title}
      </p>

      <p className={`text-2xl font-bold mt-2 ${color}`}>
        {value}
      </p>

    </div>
  );
}