🎨 DesignLens

«AI-powered design analysis platform that extracts meaningful visual insights from any image.»

"Next.js" (https://img.shields.io/badge/Next.js-16-black)
"React" (https://img.shields.io/badge/React-19-61DAFB)
"TypeScript" (https://img.shields.io/badge/TypeScript-5-blue)
"FastAPI" (https://img.shields.io/badge/FastAPI-0.115-009688)
"Python" (https://img.shields.io/badge/Python-3.11+-3776AB)
"License" (https://img.shields.io/badge/License-MIT-green)

---

📖 Overview

DesignLens is a full-stack web application that analyzes uploaded images and generates design-focused insights.

Instead of simply displaying an image, DesignLens examines its visual characteristics to provide information about:

- 🎨 Color palette
- 🧠 Design style
- 🌈 Mood
- 📐 Layout
- 📄 Content type
- ♿ Accessibility
- ⭐ Design quality score
- 📝 AI-style design summary

The goal is to help designers, developers, marketers, and content creators understand and evaluate visual designs more efficiently.

---

✨ Features

📤 Image Upload

- Upload PNG, JPG, JPEG, or WebP images
- Instant preview
- Fast processing pipeline

---

🎨 Color Analysis

Extracts dominant colors using K-Means clustering.

Displays:

- Color swatches
- HEX values
- RGB values
- Approximate color names

Example

White
#FFFFFF
RGB(255,255,255)

---

🧠 Style Detection

Automatically classifies the uploaded image into styles such as:

- Minimalist
- Vibrant
- Dark / Moody
- Balanced Design

---

📝 Design Summary

Generates a readable summary describing the overall design characteristics.

Example

«This image uses a minimalist design style with high brightness, low saturation, and a clean neutral palette.»

---

🌈 Mood Detection

Predicts the overall emotional feel.

Examples

- Professional
- Elegant
- Minimal
- Dark & Dramatic
- Energetic
- Neutral

---

📄 Content Type Detection

Classifies the uploaded image.

Current supported types

- Poster
- Banner
- Landscape Design
- Square Design

---

📐 Layout Detection

Detects the approximate composition.

Examples

- Vertical Poster
- Horizontal Banner
- Balanced Layout

---

⭐ Design Score

Calculates an overall design quality score.

Range

0 — 100

Based on

- Brightness
- Saturation
- Overall balance

---

♿ Accessibility Analysis

Evaluates readability.

Provides

- Accessibility score
- Improvement suggestions

Example

Accessibility Score
95 / 100

Suggestions

• Palette appears balanced.
• Increase contrast for small text.

---

🏗 Tech Stack

Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS

---

Backend

- FastAPI
- Python
- Pillow
- NumPy
- Scikit-learn

---

📂 Project Structure

DesignLens
│
├── backend
│   ├── analyzers
│   │   ├── accessibility.py
│   │   ├── color_names.py
│   │   ├── colors.py
│   │   ├── content.py
│   │   ├── layout.py
│   │   ├── mood.py
│   │   ├── scoring.py
│   │   └── style.py
│   │
│   ├── uploads
│   └── app.py
│
├── frontend
│   ├── app
│   ├── components
│   ├── types
│   ├── public
│   └── package.json
│
└── README.md

---

🚀 Installation

Clone

git clone https://github.com/YOUR_USERNAME/DesignLens.git

cd DesignLens

---

Backend Setup

cd backend

pip install fastapi
pip install uvicorn
pip install pillow
pip install numpy
pip install scikit-learn
pip install python-multipart

Run

uvicorn app:app --reload

Backend

http://127.0.0.1:8000

Swagger

http://127.0.0.1:8000/docs

---

Frontend Setup

cd frontend

npm install

npm run dev

Frontend

http://localhost:3000

---

API

Analyze Image

POST /analyze

Request

multipart/form-data

file

Example Response

{
  "filename": "poster.jpg",
  "palette": [
    {
      "hex": "#FFFFFF",
      "rgb": [255,255,255],
      "name": "White"
    }
  ],
  "style": {
    "style": "Minimalist",
    "brightness": 205.4,
    "saturation": 21.3,
    "keywords": [
      "clean",
      "modern",
      "minimal"
    ],
    "summary": "This image uses a minimalist design..."
  },
  "content_type": "Poster",
  "mood": "Minimal & Elegant",
  "layout": {
    "layout": "Vertical Poster"
  },
  "design_score": 96,
  "accessibility": {
    "score": 94,
    "suggestions": [
      "Palette appears balanced for general use."
    ]
  }
}

---

Current Capabilities

- ✅ Image Upload
- ✅ Image Preview
- ✅ Color Palette Extraction
- ✅ Color Naming
- ✅ Style Detection
- ✅ Mood Detection
- ✅ Content Type Detection
- ✅ Layout Detection
- ✅ Design Score
- ✅ Accessibility Analysis
- ✅ Design Summary
- ✅ REST API
- ✅ Modern React Frontend

---

Roadmap

Phase 1 — MVP ✅

- Image Upload
- Design Analysis
- Color Extraction
- Style Detection

---

Phase 2 — In Progress

- Modern Dashboard
- Component-based Frontend
- Improved UI/UX
- Better Loading States
- Export Reports

---

Phase 3

- Composition Analysis
- Typography Detection
- Color Harmony Detection
- Visual Hierarchy Detection
- Whitespace Analysis

---

Phase 4

- AI-powered Design Critique
- Similar Design Search
- Branding Analysis
- Batch Image Processing
- PDF Reports
- Public API

---

Screenshots

Add screenshots of:

- Home Page
- Upload Interface
- Analysis Dashboard
- Palette Extraction
- Accessibility Report

---

Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a Pull Request.

---

License

This project is licensed under the MIT License.

---

Author

Anuj Dubey

Built to explore AI-powered visual design analysis using FastAPI, Next.js, React, TypeScript, and Python.- Visual Hierarchy Detection
- Whitespace Analysis

---

Phase 4

- AI-powered Design Critique
- Similar Design Search
- Branding Analysis
- Batch Image Processing
- PDF Reports
- Public API

---

Screenshots

Add screenshots of:

- Home Page
- Upload Interface
- Analysis Dashboard
- Palette Extraction
- Accessibility Report

---

Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a Pull Request.

---

License

This project is licensed under the MIT License.

---

Author

Anuj Dubey

Built to explore AI-powered visual design analysis using FastAPI, Next.js, React, TypeScript, and Python.
Instead of simply displaying an image, DesignLens examines its visual characteristics to provide information about:

• 🎨 Color palette
• 🧠 Design style
• 🌈 Mood
• 📐 Layout
• 📄 Content type
• ♿ Accessibility
• ⭐ Design quality score
• 📝 AI-style design summary

The goal is to help designers, developers, marketers, and content creators understand and evaluate visual designs more efficiently.

───

✨ Features

📤 Image Upload

• Upload PNG, JPG, JPEG, or WebP images
• Instant preview
• Fast processing pipeline

───

🎨 Color Analysis

Extracts dominant colors using K-Means clustering.

Displays:

• Color swatches
• HEX values
• RGB values
• Approximate color names

Example

White
#FFFFFF
RGB(255,255,255)

───

🧠 Style Detection

Automatically classifies the uploaded image into styles such as:

• Minimalist
• Vibrant
• Dark / Moody
• Balanced Design

───

📝 Design Summary

Generates a readable summary describing the overall design characteristics.

Example

«This image uses a minimalist design style with high brightness, low saturation, and a clean neutral palette.»

───

🌈 Mood Detection

Predicts the overall emotional feel.

Examples

• Professional
• Elegant
• Minimal
• Dark & Dramatic
• Energetic
• Neutral

───

📄 Content Type Detection

Classifies the uploaded image.

Current supported types

• Poster
• Banner
• Landscape Design
• Square Design

───

📐 Layout Detection

Detects the approximate composition.

Examples

• Vertical Poster
• Horizontal Banner
• Balanced Layout

───

⭐ Design Score

Calculates an overall design quality score.

Range

0 — 100

Based on

• Brightness
• Saturation
• Overall balance

───

♿ Accessibility Analysis

Evaluates readability.

Provides

• Accessibility score
• Improvement suggestions

Example

Accessibility Score
95 / 100

Suggestions

• Palette appears balanced.
• Increase contrast for small text.

───

🏗 Tech Stack

Frontend

• Next.js 16
• React 19
• TypeScript
• Tailwind CSS

───

Backend

• FastAPI
• Python
• Pillow
• NumPy
• Scikit-learn

───

📂 Project Structure

DesignLens
│
├── backend
│ ├── analyzers
│ │ ├── accessibility.py
│ │ ├── color_names.py
│ │ ├── colors.py
│ │ ├── content.py
│ │ ├── layout.py
│ │ ├── mood.py
│ │ ├── scoring.py
│ │ └── style.py
│ │
│ ├── uploads
│ └── app.py
│
├── frontend
│ ├── app
│ ├── components
│ ├── types
│ ├── public
│ └── package.json
│
└── README.md

───
