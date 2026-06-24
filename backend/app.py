from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

from analyzers.colors import extract_palette
from analyzers.style import analyze_style
from analyzers.content import detect_content_type
from analyzers.mood import detect_mood
from analyzers.layout import analyze_layout

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

    palette_data = extract_palette(filepath)

    style_data = analyze_style(filepath)
    mood = detect_mood(
    style_data["brightness"],
    style_data["saturation"]
)

    content_type = detect_content_type(filepath)

    return {
    "filename": file.filename,
    **palette_data,
    "style": style_data,
    "content_type": content_type,
    "mood": mood
}