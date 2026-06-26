from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

from analyzers.colors import extract_palette
from analyzers.style import analyze_style
from analyzers.content import detect_content_type
from analyzers.mood import detect_mood
from analyzers.layout import analyze_layout
from analyzers.scoring import calculate_design_score
from analyzers.accessibility import analyze_accessibility

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

    # Extract palette
    palette_data = extract_palette(filepath)

    # Analyze style
    style_data = analyze_style(filepath)

    # Detect mood
    mood = detect_mood(
        style_data["brightness"],
        style_data["saturation"]
    )

    # Detect content type
    content_type = detect_content_type(filepath)

    # Analyze layout
    layout_data = analyze_layout(filepath)

    # Calculate design score
    design_score = calculate_design_score(
        style_data["brightness"],
        style_data["saturation"]
    )

    return {
        "filename": file.filename,
        **palette_data,
        "style": style_data,
        "content_type": content_type,
        "mood": mood,
        "layout": layout_data,
        "design_score": design_score
    }