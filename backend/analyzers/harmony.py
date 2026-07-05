import colorsys


def rgb_to_hue(rgb):
    r, g, b = [x / 255 for x in rgb]
    h, _, _ = colorsys.rgb_to_hsv(r, g, b)
    return h * 360


def analyze_harmony(palette):
    if len(palette) < 2:
        return {
            "scheme": "Unknown",
            "score": 0,
            "description": "Not enough colors."
        }

    hues = [
        rgb_to_hue(color["rgb"])
        for color in palette
    ]

    diffs = []

    for i in range(len(hues) - 1):
        diff = abs(hues[i] - hues[i + 1])
        diff = min(diff, 360 - diff)
        diffs.append(diff)

    avg_diff = sum(diffs) / len(diffs)

    if avg_diff < 25:
        scheme = "Monochromatic"
        score = 95

    elif avg_diff < 60:
        scheme = "Analogous"
        score = 90

    elif avg_diff < 120:
        scheme = "Triadic"
        score = 85

    elif avg_diff < 190:
        scheme = "Complementary"
        score = 92

   