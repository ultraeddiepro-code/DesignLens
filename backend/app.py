from fastapi import FastAPI, UploadFile, File
from analyzers.colors import extract_palette
from analyzers.style import analyze_style
import os

app = FastAPI()

UPLOAD_DIR = "uploads"

os.makedirs(
    UPLOAD_DIR,
    exist_ok=True
)

@app.post("/analyze")
async def analyze(
    file: UploadFile = File(...)
):

    filepath = os.path.join(
        UPLOAD_DIR,
        file.filename
    )

    with open(filepath, "wb") as f:
        f.write(await file.read())

    palette = extract_palette(filepath)
    style_data = analyze_style(filepath)

    return {
        "filename": file.filename,
        "palette": palette
    }