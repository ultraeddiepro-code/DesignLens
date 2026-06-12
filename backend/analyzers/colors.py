from PIL import Image
import numpy as np
from sklearn.cluster import KMeans


def extract_palette(image_path, n_colors=5):

    image = Image.open(image_path)

    image = image.convert("RGB")

    image = image.resize((200, 200))

    pixels = np.array(image)

    pixels = pixels.reshape(-1, 3)

    kmeans = KMeans(
        n_clusters=n_colors,
        random_state=42
    )

    kmeans.fit(pixels)

    colors = kmeans.cluster_centers_

    palette = []

    for color in colors:
        r, g, b = color.astype(int)

        palette.append(
            f"#{r:02X}{g:02X}{b:02X}"
        )

    return palette