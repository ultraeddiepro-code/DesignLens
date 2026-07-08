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
