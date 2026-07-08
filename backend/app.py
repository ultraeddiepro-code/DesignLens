from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from analyzers.colors import extract_palette
from analyzers.style import analyze_style
from analyzers.content import detect_content_type
from analyzers.mood import detect_mood
from analyzers.layout import analyze_layout
from analyzers.scoring import calculate_design_score
from analyzers.accessibility import analyze_accessibility
from analyzers.composition import analyze_composition
from analyzers.harmony import analyze_harmony
from analyzers.hierarchy import analyze_hierarchy
from analyzers.typography import analyze_typography

import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = "uploads"

os.makedirs(
    UPLOAD_DIR,
    exist_ok=True
)


@app.post("/analyze")
async def analyze(file: UploadFile = File(...)):

    filepath = os.path.join(
        UPLOAD_DIR,
        file.filename
    )

    with open(filepath, "wb") as f:
        f.write(await file.read())

    # -------------------------------
    # Core Analysis
    # -------------------------------

    palette_data = extract_palette(filepath)

    typography_data = analyze_typography(filepath)

    style_data = analyze_style(filepath)

    content_type = detect_content_type(filepath)

    mood = detect_mood(
        style_data["brightness"],
        style_data["saturation"]
    )

    layout_data = analyze_layout(filepath)

    # -------------------------------
    # Advanced Analysis
    # -------------------------------

    accessibility_data = analyze_accessibility(
        style_data["brightness"],
        style_data["saturation"]
    )

    composition_data = analyze_composition(filepath)

    harmony_data = analyze_harmony(
        palette_data["palette"]
    )

    hierarchy_data = analyze_hierarchy(filepath)

    # -------------------------------
    # Overall Score
    # -------------------------------

    design_score = calculate_design_score(
        style_data["brightness"],
        style_data["saturation"]
    )

    # -------------------------------
    # API Response
    # -------------------------------

    return {
        "filename": file.filename,
        **palette_data,
        "style": style_data,
        "content_type": content_type,
        "mood": mood,
        "layout": layout_data,
        "design_score": design_score,
        "accessibility": accessibility_data,
        "composition": composition_data,
        "harmony": harmony_data,
        "hierarchy": hierarchy_data,
        "typography": typography_data,
    }