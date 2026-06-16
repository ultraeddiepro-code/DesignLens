from PIL import Image
import numpy as np


def analyze_style(image_path):
    img = Image.open(image_path).convert("RGB")
    img = img.resize((200, 200))

    pixels = np.array(img)

    brightness = pixels.mean()

    saturation = (
        pixels.max(axis=2) - pixels.min(axis=2)
    ).mean()

    if brightness > 180 and saturation < 40:
        style = "Minimalist"
        keywords = [
            "clean",
            "minimal",
            "neutral tones",
            "simple composition",
            "modern"
        ]

    elif saturation > 80:
        style = "Vibrant"
        keywords = [
            "colorful",
            "bold",
            "high energy",
            "attention grabbing",
            "modern"
        ]

    elif brightness < 90:
        style = "Dark / Moody"
        keywords = [
            "cinematic",
            "dark",
            "dramatic",
            "high contrast",
            "luxury"
        ]

    else:
        style = "Balanced Design"
        keywords = [
            "editorial",
            "structured",
            "balanced",
            "professional",
            "clean"
        ]

    return {
        "style": style,
        "keywords": keywords,
        "brightness": round(float(brightness), 2),
        "saturation": round(float(saturation), 2)
    }