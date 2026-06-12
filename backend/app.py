from fastapi import FastAPI, UploadFile, File
from analyzers.colors import extract_palette
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

    return {
        "filename": file.filename,
        "palette": palette
    }