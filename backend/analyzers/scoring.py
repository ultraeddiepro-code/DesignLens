def calculate_design_score(brightness, saturation):
    score = 100

    if brightness < 40:
        score -= 20

    if brightness > 240:
        score -= 20

    if saturation < 10:
        score -= 10

    if saturation > 120:
        score -= 15

    return max(0, min(100, score))