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

    