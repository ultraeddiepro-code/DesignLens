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

    symmetry = round(symmetry, 1)

    # Rule of thirds

    thirds_x = [1 / 3, 2 / 3]
    thirds_y = [1 / 3, 2 / 3]

    threshold = 0.08

    rule_of_thirds = any(
        abs(center_x - x) < threshold
        for x in thirds_x
    ) and any(
        abs(center_y - y) < threshold
        for y in thirds_y
    )

    suggestions = []

    if symmetry < 70:
        suggestions.append(
            "Improve visual symmetry."
        )

    if balance < 80:
        suggestions.append(
            "Balance the composition."
        )

    if not rule_of_thirds:
        suggestions.append(
            "Consider aligning the subject closer to a rule-of-thirds intersection."
        )

    if not suggestions:
        suggestions.append(
            "Composition appears balanced."
        )

    return {
        "symmetry": symmetry,
        "balance": round(balance, 1),
        "rule_of_thirds": rule_of_thirds,
        "focus_point": {
            "x": round(center_x, 2),
            "y": round(center_y, 2),
        },
        "suggestions": suggestions,
    }