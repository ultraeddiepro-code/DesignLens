🎨 DesignLens

«AI-powered visual design analysis platform built with Next.js, FastAPI, and Python.»

DesignLens analyzes uploaded images and provides actionable design insights including color palette extraction, style recognition, accessibility analysis, composition evaluation, color harmony, visual hierarchy, typography metrics, and an overall design score.

---

✨ Features

🎨 Color Analysis

- Extract dominant colors using K-Means clustering
- HEX & RGB values
- Human-readable color names
- Visual color palette

🖌 Style Detection

Automatically identifies design styles such as:

- Minimalist
- Vibrant
- Dark / Moody
- Balanced Design

😊 Mood Detection

Predicts the overall mood of the design.

Examples:

- Minimal
- Professional
- Energetic
- Elegant
- Dark
- Neutral

📄 Content Detection

Recognizes the image category.

Current support:

- Poster
- Banner
- Square Design
- Landscape Design

📐 Layout Analysis

Detects overall layout orientation.

Examples:

- Vertical Poster
- Horizontal Banner
- Balanced Layout

⭐ Design Score

Generates an overall design quality score (0–100).

♿ Accessibility Analysis

Evaluates design accessibility.

Provides:

- Accessibility Score
- Improvement Suggestions

🎯 Composition Analysis

Analyzes:

- Visual Balance
- Symmetry
- Rule of Thirds
- Focus Point
- Composition Suggestions

🌈 Color Harmony

Detects harmony scheme:

- Monochromatic
- Analogous
- Triadic
- Complementary
- Mixed

🧠 Visual Hierarchy

Evaluates:

- Primary Focus
- Secondary Focus
- Reading Order
- Hierarchy Score
- Improvement Suggestions

✍ Typography Analysis

Measures:

- Text Density
- Readability
- Typography Suggestions

📝 Design Summary

Generates a concise summary describing the overall design characteristics.

---

🛠 Tech Stack

Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS

Backend

- FastAPI
- Python
- Pillow
- NumPy
- Scikit-learn

---

📂 Project Structure

DesignLens/
│
├── backend/
│   ├── analyzers/
│   │   ├── accessibility.py
│   │   ├── colors.py
│   │   ├── color_names.py
│   │   ├── composition.py
│   │   ├── content.py
│   │   ├── contrast.py
│   │   ├── harmony.py
│   │   ├── hierarchy.py
│   │   ├── layout.py
│   │   ├── mood.py
│   │   ├── scoring.py
│   │   ├── style.py
│   │   └── typography.py
│   │
│   ├── uploads/
│   └── app.py
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── public/
│   ├── types/
│   └── package.json
│
└── README.md

---

🚀 Getting Started

Clone Repository

git clone https://github.com/6thAce/DesignLens.git

cd DesignLens

---

Backend

cd backend

pip install fastapi
pip install uvicorn
pip install pillow
pip install numpy
pip install scikit-learn
pip install python-multipart

Run:

uvicorn app:app --reload

Backend URL

http://127.0.0.1:8000

Swagger API

http://127.0.0.1:8000/docs

---

Frontend

cd frontend

npm install

npm run dev

Open

http://localhost:3000

---

API

Analyze Image

Endpoint

POST /analyze

Request

multipart/form-data

file

Response

{
  "filename": "design.jpg",
  "palette": [],
  "style": {},
  "content_type": "Poster",
  "mood": "Professional",
  "layout": {},
  "composition": {},
  "hierarchy": {},
  "typography": {},
  "harmony": {},
  "contrast": {},
  "accessibility": {},
  "design_score": 91
}

---

Current Modules

Module| Status
Image Upload| ✅
Preview| ✅
Color Palette| ✅
Color Naming| ✅
Style Detection| ✅
Mood Detection| ✅
Content Detection| ✅
Layout Analysis| ✅
Composition Analysis| ✅
Color Harmony| ✅
Contrast Analysis| ✅
Accessibility Analysis| ✅
Typography Analysis| ✅
Visual Hierarchy| ✅
Design Summary| ✅
Design Score| ✅

---

Roadmap

Phase 1 ✅

- Image Upload
- Palette Extraction
- Style Detection
- Mood Detection
- Layout Detection

Phase 2 ✅

- Accessibility Analysis
- Composition Analysis
- Harmony Detection
- Typography Analysis
- Hierarchy Analysis

Phase 3 🚧

- AI Design Critique
- Side-by-side Design Comparison
- Export PDF Reports
- JSON Export
- Analysis History
- Drag & Drop Upload

Phase 4

- Brand Consistency Analysis
- UI Screenshot Analysis
- Social Media Creative Analysis
- Typography Recognition using OCR
- AI Redesign Suggestions
- Batch Image Processing
- Cloud Deployment

---

Future Vision

DesignLens aims to become an AI-powered design assistant capable of evaluating graphics, posters, UI screenshots, social media creatives, presentations, and marketing assets while providing practical, actionable feedback for designers, developers, and content creators.

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

GitHub: https://github.com/6thAce