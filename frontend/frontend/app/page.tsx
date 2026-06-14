"use client";

import { useState } from "react";

interface PaletteColor {
  hex: string;
  rgb: number[];
}

interface AnalysisResult {
  filename: string;
  palette: PaletteColor[];
  style: {
    style: string;
    keywords: string[];
  };
}

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string>("");

  const uploadImage = async () => {
    if (!file) {
      alert("Please select an image first");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(
        "http://127.0.0.1:8000/analyze",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error(error);
      alert("Analysis failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">
        DesignLens
      </h1>

      <div className="mb-6">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const selectedFile =
              e.target.files?.[0] || null;

            setFile(selectedFile);

            if (selectedFile) {
              setPreviewUrl(
                URL.createObjectURL(selectedFile)
              );
            }
          }}
        />
      </div>

      <button
        onClick={uploadImage}
        disabled={loading}
        className="px-6 py-3 border rounded"
      >
        {loading ? "Analyzing..." : "Analyze Image"}
      </button>

      {previewUrl && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">
            Preview
          </h2>

          <img
            src={previewUrl}
            alt="Preview"
            className="max-w-md rounded border"
          />
        </div>
      )}

      {result && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">
            Analysis Result
          </h2>

          <p>
            <strong>Filename:</strong>{" "}
            {result.filename}
          </p>

          <p className="mt-2">
            <strong>Style:</strong>{" "}
            {result.style.style}
          </p>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3">
              Color Palette
            </h3>

            <div className="flex gap-4 flex-wrap">
              {result.palette.map((color, index) => (
                <div
                  key={index}
                  className="border rounded p-2"
                >
                  <div
                    className="w-24 h-24 rounded border"
                    style={{
                      backgroundColor: color.hex,
                    }}
                  />

                  <p className="mt-2 font-mono text-sm">
                    {color.hex}
                  </p>

                  <p className="text-xs">
                    RGB({color.rgb.join(", ")})
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3">
              Keywords
            </h3>

            <div className="flex gap-2 flex-wrap">
              {result.style.keywords.map(
                (keyword, index) => (
                  <span
                    key={index}
                    className="border px-3 py-1 rounded"
                  >
                    {keyword}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}