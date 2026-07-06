const API_URL = "http://127.0.0.1:8000";

export async function analyzeImage(file: File) {
  const formData = new FormData();
  formData.append("file", file);

