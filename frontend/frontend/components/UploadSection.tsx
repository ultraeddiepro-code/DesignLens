interface Props {
  loading: boolean;
  onAnalyze: () => void;
  onFileChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export default function UploadSection({
  loading,
  onAnalyze,
  onFileChange,
}: Props) {
  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 mb-8">

      <input
        type="file"
        accept="image/*"
        onChange={onFileChange}
      />

      <button
        onClick={onAnalyze}
        disabled={loading}
        className="mt-4 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-50"
      >
        {loading
          ? "Analyzing..."
          : "Analyze Image"}
      </button>

    </div>
  );
}