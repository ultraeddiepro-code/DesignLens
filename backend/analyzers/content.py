from PIL import Image


def detect_content_type(image_path):
    image = Image.open(image_path)

    width, height = image.size

    ratio = width / height

    if ratio > 1.7:
        return "Banner"

    elif ratio > 1.2:
        return "Landscape Design"

    elif ratio < 0.8:
        return "Poster"

    else:
        return "Square Design"