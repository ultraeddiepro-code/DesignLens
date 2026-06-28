"use client";

import { useState } from "react";
import { AnalysisResult } from "../types/analysis";
import UploadSection from "../components/UploadSection";
import PreviewSection from "../components/PreviewSection";
import AnalysisSection from "../components/AnalysisSection";

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

        <UploadSection
          loading={loading}
          onAnalyze={analyzeImage}
          onFileChange={(e) => {
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

        <PreviewSection
           previewUrl={previewUrl}
        />

        {result && (
          <>
            

            <AnalysisSection
              result={result}
            />
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                Accessibility
              </h2>

            <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">

              <p className="mb-4">
                <strong>Accessibility Score:</strong>{" "}
                {result.accessibility.score}/100
              </p>

              <h3 className="font-semibold mb-2">
                Suggestions
              </h3>

              <ul className="list-disc list-inside space-y-2">
                {result.accessibility.suggestions.map(
                  (tip, index) => (
                    <li
                      key={index}
                      className="text-gray-300"
                    >
                      {tip}
                    </li>
                  )
                )}
              </ul>

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