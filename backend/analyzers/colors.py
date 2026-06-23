from PIL import Image
import numpy as np
from sklearn.cluster import KMeans
from analyzers.color_names import get_color_name


def extract_palette(image_path, n_colors=5):
    """
    Extract dominant colors from an image.

    Returns:
    {
        "palette": [
            {
                "hex": "#1F1E1F",
                "rgb": [31, 30, 31],
                "name": "Black"
            }
        ]
    }
    """

    # Open image
    image = Image.open(image_path)

    # Convert to RGB
    image = image.convert("RGB")

    # Resize for faster processing
    image = image.resize((200, 200))

    # Convert image to numpy array
    pixels = np.array(image)

    # Flatten image into list of pixels
    pixels = pixels.reshape(-1, 3)

    # Find dominant colors
    kmeans = KMeans(
        n_clusters=n_colors,
        random_state=42,
        n_init=10
    )

    kmeans.fit(pixels)

    colors = kmeans.cluster_centers_.astype(int)

    palette = []

    for color in colors:
        r, g, b = map(int, color)

        hex_color = f"#{r:02X}{g:02X}{b:02X}"

        palette.append({
            "hex": hex_color,
            "rgb": [r, g, b],
            "name": get_color_name(hex_color)
        })

    return {
        "palette": palette
    }