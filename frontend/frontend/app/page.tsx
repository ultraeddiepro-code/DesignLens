"use client";

import { useState } from "react";
import { AnalysisResult } from "../types/analysis";
import UploadSection from "../components/UploadSection";
import PreviewSection from "../components/PreviewSection";
import AnalysisSection from "../components/AnalysisSection";
import SummarySection from "../components/SummarySection";
import AccessibilitySection from "../components/AccessibilitySection";
import PaletteSection from "../components/PaletteSection";
import KeywordsSection from "../components/KeywordsSection";
import HarmonySection from "../components/HarmonySection";
import CompositionSection from "../components/CompositionSection";
import { analyzeImage as analyzeApi } from "../lib/api";
import HierarchySection from "../components/HierarchySection";
import TypographySection from "../components/TypographySection";

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
            <AnalysisSection result={result} />

            <SummarySection result={result} />
          
            <CompositionSection result={result} />
            
            <HierarchySection result={result} />

            <HarmonySection result={result} />

            <KeywordsSection result={result} />

            <AccessibilitySection result={result} />

            <PaletteSection result={result} />
          </>
        )}

      </div>
    </main>
  );
}