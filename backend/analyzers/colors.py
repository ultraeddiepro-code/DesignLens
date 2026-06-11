from PIL import Image
from sklearn.cluster import KMeans
import numpy as np


def extract_palette(image_path, n_colors=5):
    image = Image.open(image_path)
    image = image.resize((200, 200))

    pixels = np.array(image).reshape(-1, 3)

    kmeans = KMeans(n_clusters=n_colors, random_state=42)
    kmeans.fit(pixels)

    colors = kmeans.cluster_centers_.astype(int)

    palette = []

    for color in colors:
        palette.append(
            "#{:02X}{:02X}{:02X}".format(
                color[0],
                color[1],
                color[2]
            )
        )

    return palette