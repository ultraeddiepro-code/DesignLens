"use client";

import { useState } from "react";

interface PaletteColor {
  hex: string;
  rgb: number[];
  name: string;
}

interface AnalysisResult {
  filename: string;

  palette: PaletteColor[];

  content_type: string;

  mood: string;

  design_score: number;

  layout: {
    layout: string;
  };

  style: {
    style: string;
    keywords: string[];
    brightness: number;
    saturation: number;
    summary: string;
  };
}

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] =
    useState<AnalysisResult | null>(null);

  const analyzeImage = async () => {
    if (!file) {
      alert("Please select an image.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("file", file);

      const response = await fetch(
        "http://127.0.0.1:8000/analyze",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Analysis failed");
      }

      const data = await response.json();

      setResult(data);
    } catch (error) {
      console.error(error);
      alert("Failed to analyze image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-2">
          DesignLens
        </h1>

        <p className="text-gray-400 mb-8">
          Upload an image and extract design insights.
        </p>

        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 mb-8">
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

          <button
            onClick={analyzeImage}
            disabled={loading}
            className="mt-4 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-50"
          >
            {loading
              ? "Analyzing..."
              : "Analyze Image"}
          </button>
        </div>

        {previewUrl && (
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
        )}

        {result && (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                Analysis Result
              </h2>

              <div className="grid md:grid-cols-2 gap-4">

                <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-700">

                  <p>
                    <strong>Filename:</strong>{" "}
                    {result.filename}
                  </p>

                  <p>
                    <strong>Style:</strong>{" "}
                    {result.style.style}
                  </p>

                  <p>
                    <strong>Content Type:</strong>{" "}
                    {result.content_type}
                  </p>

                  <p>
                    <strong>Mood:</strong>{" "}
                    {result.mood}
                  </p>

                  <p>
                    <strong>Layout:</strong>{" "}
                    {result.layout.layout}
                  </p>

                  <p>
                   <strong>Design Score:</strong>{" "}
                   {result.design_score}/100
                  </p>
                  
                  <p>
                    <strong>Brightness:</strong>{" "}
                    {result.style.brightness}
                  </p>

                  <p>
                    <strong>Saturation:</strong>{" "}
                    {result.style.saturation}
                  </p>

                </div>

                <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-700">

                  <h3 className="font-semibold mb-3">
                    Keywords
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {result.style.keywords.map(
                      (keyword, index) => (
                        <span
                          key={index}
                          className="bg-zinc-800 px-3 py-1 rounded-lg"
                        >
                          {keyword}
                        </span>
                      )
                    )}
                  </div>

                </div>

              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                Design Summary
              </h2>

              <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
                <p className="text-gray-300 leading-relaxed">
                  {result.style.summary}
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Color Palette
              </h2>

              <div className="flex flex-wrap gap-4">

                {result.palette.map(
                  (color, index) => (
                    <div
                      key={index}
                      className="bg-zinc-900 p-4 rounded-xl border border-zinc-700 w-40"
                    >
                      <div
                        className="w-full h-24 rounded-lg border"
                        style={{
                          backgroundColor:
                            color.hex,
                        }}
                      />

                      <p className="mt-3 font-mono text-sm">
                        {color.hex}
                      </p>

                      <p className="text-blue-400 text-sm">
                        {color.name}
                      </p>

                      <p className="text-gray-400 text-xs">
                        RGB(
                        {color.rgb.join(", ")}
                        )
                      </p>
                    </div>
                  )
                )}

              </div>
            </div>
          </>
        )}

      </div>
    </main>
  );
}