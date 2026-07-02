from PIL import Image
import numpy as np


def analyze_composition(image_path):
    image = Image.open(image_path).convert("L")
    image = image.resize((300, 300))

    pixels = np.array(image)

    h, w = pixels.shape

    # Brightness center
    ys, xs = np.indices((h, w))

    total = pixels.sum()

    if total == 0:
        center_x = 0.5
        center_y = 0.5
    