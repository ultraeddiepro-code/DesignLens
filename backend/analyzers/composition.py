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
    else:
        center_x = (xs * pixels).sum() / total / w
        center_y = (ys * pixels).sum() / total / h

    # Left/right balance
    left = pixels[:, : w // 2].mean()
    right = pixels[:, w // 2 :].mean()

    balance = 100 - abs(left - right)

    balance = max(0, min(100, balance))

    # Symmetry
    flipped = np.fliplr(pixels)

    symmetry = (
        100
        - np.abs(pixels - flipped).mean() / 255 * 100
    )

   