def luminance(rgb):
    values = []

    for c in rgb:
        c = c / 255

        if c <= 0.03928:
            c = c / 12.92
        else:
            c = ((c + 0.055) / 1.055) ** 2.4

        values.append(c)

    return (
        0.2126 * values[0]
        + 0.7152 * values[1]
        + 0.0722 * values[2]
    )


def contrast_ratio(c1, c2):
    l1 = luminance(c1)
    l2 = luminance(c2)

    lighter = max(l1, l2)
    darker = min(l1, l2)

    return round(
        (lighter + 0.05) /
        (darker + 0.05),
        2
    )
