def get_color_name(hex_color):
    colors = {
        "#FFFFFF": "White",
        "#000000": "Black",
        "#FF0000": "Red",
        "#00FF00": "Green",
        "#0000FF": "Blue",
        "#FFFF00": "Yellow",
        "#FFA500": "Orange",
        "#800080": "Purple",
        "#808080": "Gray"
    }

    rgb = tuple(
        int(hex_color[i:i+2], 16)
        for i in (1, 3, 5)
    )

    closest = None
    closest_distance = float("inf")

    for hex_ref, name in colors.items():
        ref_rgb = tuple(
            int(hex_ref[i:i+2], 16)
            for i in (1, 3, 5)
        )

        distance = sum(
            (a - b) ** 2
            for a, b in zip(rgb, ref_rgb)
        )

        if distance < closest_distance:
            closest_distance = distance
            closest = name

    return closest