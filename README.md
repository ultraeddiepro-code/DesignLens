# 🎨 DesignLens

> AI-powered visual design analysis platform built using **Next.js**, **FastAPI**, **TypeScript**, and **Python**.

DesignLens analyzes uploaded images and provides detailed insights into color, composition, accessibility, typography, hierarchy, harmony, contrast, and overall design quality.

---

# ✨ Features

## 🎨 Color Analysis
- Dominant color extraction using K-Means clustering
- HEX & RGB values
- Human-readable color names
- Color palette visualization

## 🖌 Style Detection
Automatically identifies design style.

Examples:
- Minimalist
- Vibrant
- Balanced
- Dark / Moody

## 😊 Mood Detection
Predicts the emotional feel of the design.

Examples:
- Professional
- Energetic
- Elegant
- Minimal
- Neutral

## 📄 Content Detection
Recognizes the type of uploaded design.

Examples:
- Poster
- Banner
- Social Media Graphic
- Landscape
- Square Design

## 📐 Layout Analysis
Detects the overall structure of the design.

Examples:
- Vertical Layout
- Horizontal Layout
- Balanced Layout

## ⭐ Design Score
Calculates an overall design quality score out of 100.

## 🎯 Composition Analysis
Analyzes:

- Balance
- Symmetry
- Rule of Thirds
- Focus Point
- Improvement Suggestions

## 🧠 Visual Hierarchy
Evaluates:

- Primary Focus
- Secondary Focus
- Reading Order
- Hierarchy Score
- Suggestions

## 🌈 Color Harmony
Detects:

- Monochromatic
- Analogous
- Complementary
- Triadic
- Mixed Harmony

## ♿ Accessibility Analysis
Evaluates readability and accessibility.

Returns:
- Accessibility Score
- Suggestions

## ✍ Typography Analysis
Measures:

- Text Density
- Readability
- Typography Suggestions

## ⚖ Contrast Analysis
Calculates:

- Contrast Ratio
- WCAG Rating
- Accessibility Grade

## 🤖 AI Design Critique
Provides:

- Design Summary
- Strengths
- Weaknesses
- Improvement Suggestions

## 📊 Interactive Dashboard
Modern dashboard displaying:

- Design Score
- Style
- Mood
- Layout
- Typography
- Accessibility
- Harmony

## 📑 Tabbed Interface
Organized results into tabs:

- Overview
- Colors
- Composition
- Accessibility
- AI Review

---

# 🖼 Current UI

- Hero landing section
- Upload component
- Image preview
- Dashboard cards
- AI critique panel
- Color palette visualization
- Interactive tab navigation
- Responsive layout

---

# 🛠 Tech Stack

## Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS

## Backend

- FastAPI
- Python
- Pillow
- NumPy
- Scikit-learn

---

# 📂 Project Structure

```text
DesignLens
│
├── backend
│   ├── analyzers
│   │   ├── accessibility.py
│   │   ├── colors.py
│   │   ├── color_names.py
│   │   ├── composition.py
│   │   ├── content.py
│   │   ├── contrast.py
│   │   ├── critique.py
│   │   ├── harmony.py
│   │   ├── hierarchy.py
│   │   ├── layout.py
│   │   ├── mood.py
│   │   ├── scoring.py
│   │   ├── style.py
│   │   └── typography.py
│   │
│   ├── uploads
│   └── app.py
│
├── frontend
│   ├── app
│   ├── components
│   ├── lib
│   ├── public
│   ├── styles
│   └── types
│
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/6thAce/DesignLens.git

cd DesignLens
```

---

## Backend Setup

```bash
cd backend

pip install fastapi
pip install uvicorn
pip install pillow
pip install numpy
pip install scikit-learn
pip install python-multipart
```

Run server

```bash
uvicorn app:app --reload
```

Backend

```
http://127.0.0.1:8000
```

Swagger Docs

```
http://127.0.0.1:8000/docs
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Open

```
http://localhost:3000
```

---

# API

## POST

```
/analyze
```

### Request

```
multipart/form-data

file
```

### Example Response

```json
{
  "filename": "poster.png",
  "palette": [],
  "style": {},
  "content_type": "Poster",
  "mood": "Professional",
  "layout": {},
  "composition": {},
  "hierarchy": {},
  "typography": {},
  "contrast": {},
  "harmony": {},
  "accessibility": {},
  "critique": {},
  "design_score": 92
}
```

---

# Current Modules

| Module | Status |
|----------|--------|
| Upload Image | ✅ |
| Preview Image | ✅ |
| Dashboard | ✅ |
| Tab Navigation | ✅ |
| Color Palette | ✅ |
| Color Naming | ✅ |
| Style Detection | ✅ |
| Mood Detection | ✅ |
| Content Detection | ✅ |
| Layout Analysis | ✅ |
| Composition Analysis | ✅ |
| Visual Hierarchy | ✅ |
| Typography Analysis | ✅ |
| Color Harmony | ✅ |
| Contrast Analysis | ✅ |
| Accessibility Analysis | ✅ |
| AI Design Critique | ✅ |
| Design Summary | ✅ |
| Overall Design Score | ✅ |

---

# Upcoming Features

## Export

- PDF Report
- JSON Export
- PNG Report

## AI

- AI-powered Redesign Suggestions
- Layout Optimization
- Smart Color Recommendations
- Design Improvement Engine

## Analysis

- OCR Text Detection
- Font Recognition
- Whitespace Analysis
- Alignment Detection
- Icon Detection
- Logo Detection

## User Experience

- Drag & Drop Upload
- Batch Image Analysis
- Image Comparison
- Analysis History
- Dark / Light Theme

---

# Roadmap

## Version 1.0 ✅
- Color Analysis
- Style Detection
- Dashboard
- Accessibility
- Typography
- Hierarchy
- Harmony
- Contrast
- AI Critique

## Version 1.5 🚧
- Export Reports
- Comparison Tool
- OCR
- Better UI
- History

## Version 2.0
- AI Redesign Assistant
- Figma Support
- Website Screenshot Analysis
- Social Media Analysis
- Brand Consistency Checker
- Cloud Deployment
- User Accounts

---

# Why DesignLens?

DesignLens helps designers, developers, marketers, students, and content creators quickly evaluate visual designs using AI-assisted analysis and actionable feedback.

---

# Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a new branch.
3. Commit your changes.
4. Open a Pull Request.

---

# License

MIT License

---

# Author

**Anuj Dubey**

GitHub: https://github.com/6thAce