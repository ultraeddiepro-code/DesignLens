def detect_mood(brightness, saturation):
    if brightness < 90:
        return "Dark & Dramatic"

    if brightness > 180 and saturation < 40:
        return "Minimal & Elegant"

    if saturation > 80:
        return "Energetic & Playful"

    if brightness > 140:
        return "Modern & Professional"

    return "Balanced & Neutral"