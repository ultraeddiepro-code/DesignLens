from PIL import Image


def analyze_layout(image_path):
    image = Image.open(image_path)

    width, height = image.size

    ratio = width / height

    if ratio < 0.8:
        layout = "Vertical Poster"

    elif ratio > 1.5:
        layout = "Horizontal Banner"

    else:
        layout = "Balanced Layout"

    return {
        "layout": layout
    }