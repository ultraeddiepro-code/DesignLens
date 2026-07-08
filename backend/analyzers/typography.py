from PIL import Image
import numpy as np


def analyze_typography(image_path):
    img = Image.open(image_path).convert("L")
    img = img.resize((600, 600))

    pixels = np.array(img)

    dark_pixels = np.sum(pixels < 120)
    total_pixels = pixels.size

    text_density = round(
        dark_pixels / total_pixels * 100,
        2
    )

    if text_density < 8:
        readability = "Excellent"
        suggestion = "Typography is spacious and easy to scan."

    elif text_density < 15:
        readability = "Good"
        suggestion = "Text density appears balanced."

    elif text_density < 25:
        readability = "Average"
        suggestion = "Consider increasing spacing."

    else:
        readability = "Crowded"
        suggestion = "Reduce text amount or increase whitespace."

    return {
        "text_density": text_density,
        "readability": readability,
        "suggestion": suggestion
    }