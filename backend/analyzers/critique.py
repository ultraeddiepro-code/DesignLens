def generate_critique(
    style,
    mood,
    harmony,
    accessibility,
    design_score,
    typography,
    composition,
):
    strengths = []
    weaknesses = []
    suggestions = []

    if design_score >= 90:
        strengths.append(
            "Overall design quality is excellent."
        )
    elif design_score >= 75:
        strengths.append(
            "Overall design quality is good."
        )
    else:
        weaknesses.append(
            "Overall design could be improved."
        )

    if harmony["score"] >= 90:
        strengths.append(
            "Color harmony is visually pleasing."
        )
    else:
        suggestions.append(
            "Experiment with a more cohesive color palette."
        )

    if accessibility["score"] >= 90:
        strengths.append(
            "Good accessibility and readability."
        )
    else:
        weaknesses.append(
            "Accessibility could be improved."
        )

    if typography["readability"] == "Crowded":
        weaknesses.append(
            "Typography feels crowded."
        )

        suggestions.append(
            "Increase spacing between text elements."
        )

    if composition["balance"] < 80:
        suggestions.append(
            "Improve visual balance."
        )

    summary = (
        f"This design has a {style.lower()} style "
        f"with a {mood.lower()} mood. "
        f"The overall design score is "
        f"{design_score}/100."
    )

    return {
        "summary": summary,
        "strengths": strengths,
        "weaknesses": weaknesses,
        "suggestions": suggestions,
    }