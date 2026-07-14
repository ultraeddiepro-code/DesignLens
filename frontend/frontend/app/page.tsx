"use client";

import { useState } from "react";
import { AnalysisResult } from "../types/analysis";
import UploadSection from "../components/UploadSection";
import PreviewSection from "../components/PreviewSection";
import SummarySection from "../components/SummarySection";
import AccessibilitySection from "../components/AccessibilitySection";
import PaletteSection from "../components/PaletteSection";
import KeywordsSection from "../components/KeywordsSection";
import HarmonySection from "../components/HarmonySection";
import CompositionSection from "../components/CompositionSection";
import HierarchySection from "../components/HierarchySection";
import TypographySection from "../components/TypographySection";
import ContrastSection from "../components/ContrastSection";
import CritiqueSection from "../components/CritiqueSection";
import Dashboard from "../components/Dashboard";import Tabs from "../components/Tabs";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] =
    useState<AnalysisResult | null>(null);

  const [activeTab, setActiveTab] = useState("Overview");

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
        <div className="mb-10 text-center">

          <h1 className="text-6xl font-extrabold bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            DesignLens
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            AI-powered visual design analysis platform
          </p>

        </div>

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

        {result && (
          <>
            <Dashboard result={result} />

            <Tabs
              active={activeTab}
              setActive={setActiveTab}
            />

            {activeTab === "Overview" && (
              <>
                <div className="grid lg:grid-cols-2 gap-6 mb-8">
                  <PreviewSection
                    previewUrl={previewUrl}
                  />

                  <SummarySection
                    result={result}
                  />
                </div>

                <CritiqueSection
                  result={result}
                />
              </>
            )}

            {activeTab === "Colors" && (
              <>
                <HarmonySection
                  result={result}
                />

                <ContrastSection
                  result={result}
                />

                <PaletteSection
                  result={result}
                />
              </>
            )}

            {activeTab === "Composition" && (
              <>
                <div className="grid lg:grid-cols-2 gap-6">
                  <CompositionSection
                    result={result}
                  />

                  <HierarchySection
                    result={result}
                  />

                  <TypographySection
                    result={result}
                  />
                </div>
              </>
            )}

            {activeTab === "Accessibility" && (
              <AccessibilitySection
                result={result}
              />
            )}

            {activeTab === "AI Review" && (
              <>
                <CritiqueSection
                  result={result}
                />

                <KeywordsSection
                  result={result}
                />
              </>
            )}
          </>
        )}

      </div>
    </main>
  );
}