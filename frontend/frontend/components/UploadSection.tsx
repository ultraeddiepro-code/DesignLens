interface Props {
  loading: boolean;
  fileName: string;
  onAnalyze: () => void;
  onFileChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export default function UploadSection({
  loading,
  fileName,
  onAnalyze,
  onFileChange,
}: Props) {
  return (
    <div className="mb-10">

      <label
        htmlFor="image-upload"
        className="flex flex-col items-center justify-center w-full h-64 rounded-2xl border-2 border-dashed border-zinc-600 bg-zinc-900 hover:border-blue-500 hover:bg-zinc-800 transition cursor-pointer"
      >

        <div className="text-6xl mb-4">
          📤
        </div>

        <h2 className="text-2xl font-bold">
          Upload an Image
        </h2>

        <p className="text-gray-400 mt-2">
          Drag & drop or click to browse
        </p>

        <input
          id="image-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onFileChange}
        />

      </label>

      <div className="flex justify-center mt-6">
        <button
          onClick={onAnalyze}
          disabled={loading}
          className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 transition font-semibold"
        >
          {loading ? "Analyzing..." : "Analyze Design"}
        </button>
      </div>

    </div>
  );
}