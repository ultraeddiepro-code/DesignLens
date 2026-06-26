def analyze_accessibility(brightness, saturation):
    score = 100
    suggestions = []

    if brightness < 50:
        score -= 20
        suggestions.append(
            "Increase brightness for better readability."
        )

