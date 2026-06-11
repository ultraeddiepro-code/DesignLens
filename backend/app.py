from fastapi import FastAPI, UploadFile, File

app = FastAPI()

@app.post("/analyze")
async def analyze(file: UploadFile = File(...)):
    return {
        "filename": file.filename,
        "status": "uploaded"
    }