# Daud Shah | Portfolio

Personal portfolio website for **Daud Shah** — Computer Vision & AI engineer focused on multimodal medical AI, object detection, VLMs, and research manuscripts ready for publication.

**Live site:** [https://daud-shah.github.io](https://daud-shah.github.io)

---

## About

- **Name:** Daud Shah  
- **Location:** Islamabad, Pakistan  
- **Email:** [sdaud4214@gmail.com](mailto:sdaud4214@gmail.com)  
- **GitHub:** [github.com/daud-shah](https://github.com/daud-shah)  
- **LinkedIn:** [linkedin.com/in/daud-shah40](https://www.linkedin.com/in/daud-shah40)  

**Hero summary:** Computer Vision & AI engineer building multimodal medical AI, object detection, object segmentation, object tracking, OCR, VLMs, and research manuscripts ready for publication. Recent industry experience at CCRIPT Agency and Neuralogic (USA).

**Typewriter roles:** Computer Vision Engineer · AI/ML Developer · Research-oriented Developer

---

## CV downloads

| Version | Link |
|--------|------|
| AI Engineer CV | [Google Drive](https://drive.google.com/file/d/1o2fJ3T8JBF4rRon5_PHgiOEbD45Qivei/view?usp=sharing) |
| Computer Vision Engineer CV | [Google Drive](https://drive.google.com/file/d/1ZX5yOj3NuVQfkGFJdGw8Cu952wbJ2vUo/view?usp=sharing) |

---

## Experience & education

### CCRIPT Agency — Computer Vision Engineer
- **Location:** Islamabad, Pakistan  
- **Period:** Jan 2026 – Jun 2026 (6 months)  
- End-to-end object detection and segmentation (YOLO family)  
- Data annotation & QA (CVAT, Roboflow)  
- VLM experiments for scene understanding  
- Streamlit web apps for client demos  
- CV on architectural drawings and floor plans  
- Client-facing deliverables from prototypes  

### Neuralogic — Computer Vision Engineer
- **Location:** Texas, USA (remote)  
- **Period:** Jan 2026 – Jun 2026 (6 months)  
- Object detection & benchmarking (YOLO, PyTorch) for US-facing initiatives  
- Dataset curation and annotation standards  
- VLMs for technical/document imagery  
- Streamlit proof-of-concept demos  
- Architectural drawing CV pipelines  
- Reproducible train/eval workflows across time zones  

### NCAI Lab, UET Peshawar — AI & Computer Vision Engineer (Intern)
- **Location:** Peshawar, Pakistan  
- **Period:** Nov 2024 – Jan 2026  
- Traffic & safety CV: ambulances, rickshaws, license plates (YOLOv8/v11)  
- Annotation → training → evaluation; Roboflow flows  
- Video understanding (MMAction2) and OCR (PaddleOCR)  

### University of Agriculture, Peshawar — BS Computer Science
- **Period:** Nov 2022 – Nov 2026 (expected)  
- Final year · CGPA 3.57  

### Quaid-e-Azam Group of Schools & Colleges — FSc Pre-Engineering
- **Period:** 2020 – 2022 · Grade B  

---

## Research & publications

| Paper | Status | Highlights |
|-------|--------|------------|
| **Multi-Modal Chest X-Ray Classification** (FYP, UAP 2025) | IEEE JBHI · In preparation | ViT + Bio-ClinicalBERT, cross-attention, 172K pairs, **98.52%** macro-AUC, 15 labels |
| **DAUD-NET v2** — Efficient Video Action Recognition | IEEE Access · Manuscript prepared | **97.62%** on UCF-101, 71 GFLOPs, 44% fewer attention ops |
| **Multimodal Medical AI for Chest Disease Classification** | Ready for publication | ResNet-50 + BioClinicalBERT, **95.20%** accuracy, [code on GitHub](https://github.com/daud-shah/Explainable-Multimodal-Medical-Diagnosis-using-IU-X-Ray-) |
| **CoNKAN** — Kidney Stone Detection in CT | Journal · Under review | ConvNeXt + KAN attention, **99.13%** accuracy, zero FP on 346 test images |

---

## Client & deliverable projects

### Flood Hazard & Urban Sprawl Prediction — Islamabad, Pakistan
- ML · Remote sensing · GIS · Python · 2030–2050  
- LULC satellite data, 6 regression models (LOOCV), HEC-RAS rasters (35M pixels)  
- **r = 0.99** correlation between urbanization and flood risk  
- Delivered GeoTIFF maps, ArcGIS overlays, notebooks, documentation  

### Speech Emotion Recognition — University of Stirling, UK (MSc AI / Big Data)
- 62,000+ samples (RAVDESS, CREMA-D, TESS, SAVEE)  
- 234 acoustic features (MFCC, Mel, Chroma, etc.)  
- SVM → CNN-LSTM with channel + spatial attention  
- Target **93–97%** across eight emotions  

---

## Featured open-source projects

1. [AI Traffic Control System](https://github.com/daud-shah/ai-trafficsystem) — YOLOv11 real-time traffic signals  
2. [Pakistani License Plate Detection](https://github.com/daud-shah/pakistani-license-plate-detection) — YOLOv8 + PaddleOCR  
3. [Brain Tumor Segmentation](https://github.com/daud-shah/Detecet-tumor-and-deadcell) — YOLOv11 on MRI-style scans  
4. [Appliance Status Detection](https://github.com/daud-shah/appliance-status-detection) — On/off classification  
5. [Ambulance & Rickshaw Detection](https://github.com/daud-shah/ambulance_ricksha_delection) — Multi-class YOLOv11  

See [all repositories](https://github.com/daud-shah?tab=repositories) for 20+ additional projects.

---

## Tech stack (site)

| Layer | Files / tools |
|-------|----------------|
| Markup | `index.html` |
| Base theme | Colorlib template + `css/style.css` |
| Custom theme | `css/theme-overrides.css`, `css/portfolio-spec.css` |
| Scripts | `js/main.js`, `js/portfolio-spec.js` |
| Fonts | Inter, Poppins (Google Fonts) |
| Hosting | GitHub Pages (`main` branch) |

### Design palette

| Token | Value |
|-------|-------|
| Background | `#0a0a0f` |
| Card | `#12121a` |
| Primary (orange) | `#f97316` |
| Secondary (blue) | `#3b82f6` |
| Foreground | `#f8fafc` |
| Muted | `#94a3b8` |

---

## Repository structure

```
daud-shah.github.io/
├── index.html              # Main portfolio page
├── README.md               # This file (repo overview)
├── PORTFOLIO-MASTER.md     # Full content backup for rebuilding elsewhere
├── css/
│   ├── style.css           # Base Colorlib styles
│   ├── theme-overrides.css # Theme refinements
│   └── portfolio-spec.css  # Dark premium spec (animations, cards, timeline)
├── js/
│   ├── main.js             # Smooth scroll, carousel guards
│   └── portfolio-spec.js   # Nav, typewriter, counters, scroll-to-top
└── images/
    ├── profile.png         # Hero portrait
    └── proj_*.jpg|png      # Project thumbnails
```

---

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
# Python
python -m http.server 8080

# Node (npx)
npx serve .
```

Then visit `http://localhost:8080`.

---

## Deploy to GitHub Pages

This repo is a **user/organization Pages** site (`username.github.io`), so the site publishes automatically from the `main` branch.

```powershell
git add .
git commit -m "update portfolio"
git push origin main
```

Live URL updates within a few minutes at [https://daud-shah.github.io](https://daud-shah.github.io).

---

## Content rules (public portfolio)

**Do not list** on the public site:
- RAG / local-PDF Ollama chatbot projects  
- Agentek AI projects  

---

## Stats shown on site

- **2+** years experience  
- **3** companies  
- **20+** projects built  
- **2** freelance platforms  

---

## Contact

- **Location:** Islamabad, Pakistan  
- **Email:** sdaud4214@gmail.com  
- **Heading:** Let's Connect  
- **Message:** Have a project in mind or want to collaborate on AI research? Let's connect and build something incredible.

---

## License & credits

- Portfolio content © Daud Shah  
- Site template based on [Colorlib](https://colorlib.com) (CC BY 3.0)  
- For a complete copy-paste reference to rebuild this portfolio elsewhere, see **[PORTFOLIO-MASTER.md](./PORTFOLIO-MASTER.md)**
