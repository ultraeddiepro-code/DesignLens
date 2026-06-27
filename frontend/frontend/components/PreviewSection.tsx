interface Props {
  previewUrl: string;
}

export default function PreviewSection({
  previewUrl,
}: Props) {
  if (!previewUrl) return null;

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">
        Preview
      </h2>

      <img
        src={previewUrl}
        alt="Preview"
        className="max-w-lg rounded-xl border border-zinc-700"
      />
    </div>
  );
}