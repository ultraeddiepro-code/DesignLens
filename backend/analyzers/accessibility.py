def analyze_accessibility(brightness, saturation):
    score = 100
    suggestions = []

    if brightness < 50:
        score -= 20
        suggestions.append(
            "Increase brightness for better readability."
        )

    if brightness > 230:
        score -= 15
        suggestions.append(
            "Reduce brightness to improve contrast."
        )

    