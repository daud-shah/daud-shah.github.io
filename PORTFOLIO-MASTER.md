# PORTFOLIO MASTER FILE — Daud Shah

> **Purpose:** Single source of truth for all portfolio content, design, and structure.  
> Use this file when building a **new portfolio** (React, Vite, Replit, another HTML site, etc.) so you do not have to re-gather information from scratch.  
> **Last updated:** June 2026  

---

## 1. Identity & links

```yaml
name: Daud Shah
title_tab: "Daud Shah | Portfolio"
location: Islamabad, Pakistan
email: sdaud4214@gmail.com
github: https://github.com/daud-shah
linkedin: https://www.linkedin.com/in/daud-shah40
live_site: https://daud-shah.github.io
github_repo: https://github.com/daud-shah/daud-shah.github.io
profile_image: images/profile.png
```

### CV file (Google Drive)

| Label | URL |
|-------|-----|
| Computer Vision Engineer CV | https://drive.google.com/file/d/1amt4bbnjmHXHvMw92g00R1QPQW0EblN8/view?usp=sharing |

---

## 2. Hero / About section

### Headline
```
Hi, I'm Daud Shah
```

### Typewriter phrases (rotate)
1. Computer Vision Engineer  
2. AI/ML Developer  
3. Research-oriented Developer  

### Bio (short)
```
Computer Vision & AI engineer building multimodal medical AI, object detection, object segmentation, object tracking, OCR's, VLMs, and research manuscripts ready for publication. Recent industry experience at CCRIPT Agency and Neuralogic(USA). Based in Islamabad.
```

### CTA buttons
- View Projects → `#projects`
- GitHub → https://github.com/daud-shah

### Floating badges around profile photo
| Position | Label | Color | Animation |
|----------|-------|-------|-----------|
| Top-left | CV / AI | orange | animate-float (6s) |
| Bottom-right | PyTorch | blue | animate-float-delayed (7s, 2s delay) |
| Top-right | YOLO | orange | animate-float-slow (8s, 1s delay) |
| Bottom-left | OpenCV | blue | animate-float-slower (9s, 3s delay) |

### Photo layers (around portrait)
1. Ping ring — scales outward, fades (`animate-ping-slow`, 2.5s)  
2. Glow layer  
3. Dashed orbit ring — rotates 30s  
4. Orange arc ring  

### Hero background
- Animated dot-grid (`driftGrid` 20s)

### Removed (do not add back unless requested)
- "Hire Me" navbar button  
- "Available for Remote Work" hero badge  
- Freelance info card (Fiverr/Upwork) in contact  
- Hiring-focused language site-wide  

---

## 3. Stats bar

| Stat | Value | Label |
|------|-------|-------|
| 1 | 2+ | Years experience |
| 2 | 3 | Companies |
| 3 | 20+ | Projects built |
| 4 | 2 | Freelance platforms |

Icons: clock, building, code, globe (SVG stroke paths in live site).

---

## 4. Experience & education

### Section title
**Experience & education**

### Section lead
```
Six months of computer vision engineering at CCRIPT Agency and Neuralogic (Jan–Jun 2026); research internship at NCAI (completed); degree work in parallel.
```

---

### Job 1: CCRIPT Agency

```yaml
role: Computer Vision Engineer
company: CCRIPT Agency
location: Islamabad, Pakistan
period: Jan 2026 – Jun 2026
duration_note: 6 months only; role ended Jun 2026
```

**Bullets:**
- End-to-end object detection and segmentation on client imagery using YOLO-family models — from dataset design through training, validation, and delivery-ready inference.
- Structured data annotation and QA workflows in CVAT and Roboflow, keeping labels consistent from raw images to model-ready datasets.
- Vision-language model (VLM) experiments for richer scene understanding and assisted review on complex visual domains.
- Streamlit web apps so clients and stakeholders can upload images, run models, and inspect outputs without engineering overhead.
- Computer vision on architectural drawings and floor plans — detecting layout elements, symbols, and regions for inspection and automation workflows.
- Collaborating with the team to turn prototypes into maintainable, client-facing deliverables.

---

### Job 2: Neuralogic

```yaml
role: Computer Vision Engineer
company: Neuralogic
location: Texas, USA (remote)
period: Jan 2026 – Jun 2026
duration_note: 6 months only; role ended Jun 2026
```

**Bullets:**
- Object detection and model benchmarking (YOLO family, PyTorch) on US-facing computer vision initiatives in a remote, distributed team.
- Dataset curation and annotation standards across CVAT and Roboflow — quality checks that keep training data reliable at scale.
- Exploring VLMs for technical and document-like imagery where classical detectors benefit from semantic context.
- Interactive Streamlit demos for rapid proof-of-concept, model comparison, and stakeholder feedback before full integration.
- CV pipelines for architectural and technical drawings — layout parsing, element detection, and structured outputs for downstream use.
- Reproducible train/eval workflows, clear documentation, and async coordination across time zones.

---

### Job 3: NCAI Lab (completed)

```yaml
role: AI & Computer Vision Engineer — Intern
company: NCAI Lab, UET Peshawar
location: Peshawar, Pakistan
period: Nov 2024 – Jan 2026
```

**Bullets:**
- Traffic and safety CV: ambulances, rickshaws, license plates (YOLOv8 / v11).
- End-to-end annotation → training → evaluation; Roboflow experiment flows.
- Video understanding (MMAction2) and OCR (PaddleOCR) with the research group.

---

### Education 1

```yaml
degree: Bachelor of Computer Science
institution: University of Agriculture, Peshawar
location: Peshawar, Pakistan
period: Nov 2022 – Nov 2026 (expected)
details: Final year · CGPA 3.57 — coursework and projects aligned with AI/Computer Vision/NLP Computer Science, statistics, and data-driven systems.
note: Degree title on site is "BS Computer Science" (no "Data Science" bracket)
```

---

### Education 2

```yaml
degree: FSc Pre-Engineering
institution: Quaid-e-Azam Group of Schools & Colleges
location: Pakistan
period: 2020 – 2022
details: Grade B — foundation for engineering and CS track.
```

---

## 5. Research & publications

### Section title
**Research & publications**

### Section lead
```
Manuscripts and systems ready for journal submission — multimodal medical AI, efficient video recognition, and clinical imaging. Lab work at NCAI complemented this with traffic CV and deployable pipelines.
```

---

### Paper 1: Multi-Modal Chest X-Ray Classification

```yaml
status: IEEE JBHI · In preparation
type: Final Year Project
institution: University of Agriculture, Peshawar
year: 2025
```

**Full description (for new portfolio):**
Built a multi-modal deep learning system combining Vision Transformer and Bio-ClinicalBERT through a four-layer bidirectional cross-attention module for automated chest X-ray classification. Trained on 172,202 image-report pairs from two hospitals. Achieved 98.52% macro-averaged AUC across 15 pathology labels with a cross-hospital gap of only 1.30%, validated with Grad-CAM interpretability analysis. Paper in preparation for IEEE JBHI.

**Short (card):**
ViT + Bio-ClinicalBERT with four-layer bidirectional cross-attention on 172,202 image–report pairs from two hospitals. 98.52% macro-AUC across 15 pathology labels; cross-hospital gap 1.30%; Grad-CAM interpretability.

---

### Paper 2: DAUD-NET v2

```yaml
status: IEEE Access · Manuscript prepared
subtitle: Efficient Video Action Recognition
dataset: UCF-101
```

**Full description:**
Designed a dual-attention transformer with sparse local-global temporal attention and adaptive temporal pooling, achieving 97.62% accuracy on UCF-101 at 71 GFLOPs (44% fewer attention computations than full attention). Manuscript prepared for IEEE Access.

**Short (card):**
Sparse local–global temporal attention with adaptive temporal pooling. 97.62% accuracy on UCF-101 at 71 GFLOPs — 44% fewer attention computations than full attention.

---

### Paper 3: Multimodal Medical AI for Chest Disease Classification

```yaml
status: Ready for publication
architecture: ResNet-50 + BioClinicalBERT
dataset: IU Chest X-Ray
github: https://github.com/daud-shah/Explainable-Multimodal-Medical-Diagnosis-using-IU-X-Ray-
```

**Full description:**
Designed and implemented an end-to-end deep learning system combining ResNet-50 and BioClinicalBERT for automated chest disease classification across 16 pathology categories using the IU Chest X-Ray dataset. Achieved 95.20% test accuracy and 0.9921 weighted AUC-ROC. System includes Grad-CAM explainability, severity prediction, and cross-dataset validation on NIH ChestX-ray14.

**Short (card):**
End-to-end system across 16 pathology categories: 95.20% test accuracy, 0.9921 weighted AUC-ROC. Grad-CAM explainability, severity prediction, and NIH ChestX-ray14 cross-validation.

---

### Paper 4: CoNKAN — Kidney Stone Detection

```yaml
status: Journal · Under review
type: Co-authored research paper
architecture: ConvNeXt-Small + KAN channel attention
```

**Full description:**
Developed CoNKAN, a deep learning framework for automated kidney stone detection in CT scans, published as a co-authored research paper currently under journal review. ConvNeXt-Small backbone with Kolmogorov-Arnold Network (KAN) based channel attention. 99.13% accuracy with zero false positives on 346 test images. Outperforms ResNet-50, DenseNet-121, VGG-16, and EfficientNet-B2. Training: two-stage discriminative fine-tuning, MixUp, class-weight balancing, mixed precision (Kaggle GPU). Full code, ablation study, and baselines on GitHub.

**Tech stack:** Python, PyTorch, FastAI, TIMM, ConvNeXt, KAN Attention, Grad-CAM, scikit-learn

**Short (card):**
ConvNeXt backbone with KAN channel attention for CT stone detection. 99.13% accuracy, zero false positives on 346 test images; outperforms ResNet-50, DenseNet-121, VGG-16, and EfficientNet-B2.

---

### Broader research focus (3 bullets)

1. **Multimodal & explainable medical AI** — vision + clinical text with Grad-CAM-style interpretability for assistive diagnosis.
2. **Efficient video & detection at scale** — transformers and YOLO families with reproducible training and validation.
3. **Operational CV** — traffic analytics, OCR, and annotation-to-deployment pipelines from NCAI lab work.

**Closing line:**
More experiments and notebooks on GitHub. Preparing MS-oriented applications and open to academic collaborations in computer vision and trustworthy AI.

---

## 6. Technical skills

### Card 1: Computer vision & deep learning
YOLOv5 / v8 / v11 · OpenCV · PyTorch · TensorFlow · MediaPipe · MMAction2 · VLMs

### Card 2: Data & deployment
Roboflow · CVAT · Jupyter · Kaggle · RunPod · Streamlit · Architectural CV

### Card 3: Languages
Python · C++ · JavaScript · HTML / CSS

### Card 4: Medical & OCR
Segmentation · Multimodal (ViT / BERT) · PaddleOCR · Ultrasound / MRI-style CV

### Card 5: Tracking & analytics
Object tracking · Motion analysis · Traffic analytics

### Card 6: Other
Git / GitHub · Urdu · Pashto · English

---

## 7. Client & deliverable projects

### Client project 1: Flood Hazard & Urban Sprawl Prediction

```yaml
tag: Client · Remote sensing & GIS
location: Islamabad Capital Territory, Pakistan
stack: Machine Learning | Remote Sensing | GIS | Python
horizon: 2030–2050
```

**Full description:**
Developed an end-to-end ML pipeline to predict future urbanization patterns and flood hazard conditions for Islamabad Capital Territory (2030–2050). Trained and compared 6 regression models (Linear, Polynomial, Ridge, SVR, Random Forest) per land cover category using Leave-One-Out Cross-Validation on LULC satellite data. For flood prediction, applied vectorized polynomial regression across 35 million pixels of HEC-RAS hydraulic simulation rasters (GeoTIFF, EPSG:32643), generating 15 predicted spatial maps for Depth, Velocity, and Water Surface Elevation. Demonstrated near-perfect correlation (r = 0.99) between urbanization growth and worsening flood parameters. Delivered Jupyter notebooks, technical documentation, predicted GeoTIFF outputs, and professional overlay maps using real geographic coordinates extracted from ArcGIS MXD files.

**Short (card):**
End-to-end ML pipeline predicting urbanization and flood hazard from LULC satellite data. Six regression models per land-cover class (LOOCV); vectorized polynomial regression across 35M HEC-RAS pixels. r = 0.99 between sprawl and flood risk. Delivered GeoTIFF maps, ArcGIS overlays, notebooks, and documentation.

---

### Client project 2: Speech Emotion Recognition

```yaml
tag: University of Stirling, UK · MSc AI / Big Data
institution: University of Stirling, UK
degree: MSc Artificial Intelligence / Big Data
stack: Python, PyTorch, librosa, scikit-learn, Kaggle GPU, NumPy, pandas, matplotlib
```

**Full description:**
Built an end-to-end Speech Emotion Recognition system detecting emotions from voice recordings. Audio preprocessing, data augmentation, MFCC and Mel-spectrogram features, progressive models from classical ML to deep learning. Combined RAVDESS, CREMA-D, TESS, SAVEE (62,000+ samples). Extracted 234 acoustic features per sample (MFCC, Chroma, Spectral Contrast, Tonnetz). Compared SVM, 1D-CNN, CNN-LSTM, CNN-LSTM with Attention. Proposed CNN-LSTM with Channel and Spatial Attention as main novel contribution. Target accuracy 93–97% across eight emotion categories.

**Short (card):**
Merged 62,000+ samples from four datasets, 234 acoustic features per clip. Compared SVM through CNN-LSTM with channel + spatial attention — targeting 93–97% across eight emotions.

---

## 8. Featured open-source projects (with thumbnails)

| # | Title | GitHub | Thumbnail | One-liner |
|---|-------|--------|-----------|-----------|
| 01 | AI Traffic Control System | https://github.com/daud-shah/ai-trafficsystem | images/proj_1.jpg | Real-time vehicle detection with signal timing from lane density using YOLOv11. |
| 02 | Pakistani License Plate Detection | https://github.com/daud-shah/pakistani-license-plate-detection | images/proj_2.png | YOLOv8 plus PaddleOCR for plate text and CSV export. |
| 03 | Brain Tumor Segmentation | https://github.com/daud-shah/Detecet-tumor-and-deadcell | images/proj_3.jpg | YOLOv11 on MRI-style scans for tumor and dead-cell regions. |
| 04 | Appliance Status Detection | https://github.com/daud-shah/appliance-status-detection | images/proj_4.png | Classify whether appliances are on or off from camera frames with YOLO. |
| 05 | Ambulance & Rickshaw Detection | https://github.com/daud-shah/ambulance_ricksha_delection | images/proj_5.png | Multi-class YOLOv11 detectors for emergency and rickshaw traffic. |

---

## 9. More repositories (text list)

| Repo | Summary |
|------|---------|
| [Explainable Multimodal Medical Diagnosis (IU X-Ray)](https://github.com/daud-shah/Explainable-Multimodal-Medical-Diagnosis-using-IU-X-Ray-) | ViT + clinical BERT + explainability for chest X-ray workflows. |
| [Breast Ultrasound Tumor Segmentation](https://github.com/daud-shah/Breast_Ultrasound_Tumor_Segmentation_yolov8-model-full-project) | Full YOLOv8 pipeline on ultrasound data. |
| [Breast Lesion Segmentation](https://github.com/daud-shah/Breast_Lesion_Segmentation_using_YOLO) | Lesion-focused YOLO segmentation experiments. |
| [Medical Things Detection](https://github.com/daud-shah/medical-things-detection) | General medical-object detection with YOLO. |
| [Construction Safety Monitoring](https://github.com/daud-shah/construction-safety-monitoring-using-yolov8) | YOLOv8 for site safety and PPE-style monitoring. |
| [Face Mask Detection System](https://github.com/daud-shah/Face-Mask-Detection-System) | Binary mask detection for public-health scenarios. |
| [Fire & Smoke Detection](https://github.com/daud-shah/fire-smoke-detection) | Vision models for early fire/smoke cues. |
| [Traffic Safety / Helmet Detection](https://github.com/daud-shah/traffic_safety_-helmat_detection-) | Road-safety oriented detection. |
| [Aircraft Detection & Tracking](https://github.com/daud-shah/Aircraft-detection-and-tracking) | Detection with tracking-style experimentation. |
| [Padel Match: Detection, Tracking & Motion](https://github.com/daud-shah/Padel-Match-Player-Detection-Tracking-Motion-Analysis) | Sports analytics with YOLO and motion cues. |
| [Advanced Traffic Sign Recognition](https://github.com/daud-shah/Advanced-Traffic-Sign-Recognition-System) | Sign classification / recognition stack. |
| [Humanizer Pro](https://github.com/daud-shah/humanizer-pro) | NLP utility project for text humanization. |
| [Fake News Detection](https://github.com/daud-shah/Fake-News-Detection-using-MachineLearning) | Classical ML + NLP for misinformation experiments. |
| [British Airways Review Analysis](https://github.com/daud-shah/british-airways_project) | Data-science case study in Jupyter. |
| [Cognifyz Internship Tasks](https://github.com/daud-shah/Cognifyz_internship) | Structured internship deliverables. |
| [Machine Learning collection](https://github.com/daud-shah/Machine-Learning) | Curated ML exercises and mini-projects. |
| [NCAI Lab Task](https://github.com/daud-shah/NCAI_LAB_TASK) | Lab assignments and experiments from NCAI. |

**All repos:** https://github.com/daud-shah?tab=repositories

---

## 10. Contact section

```yaml
heading: Let's Connect
description: Have a project in mind or want to collaborate on AI research? Let's connect and build something incredible.
cards:
  - type: Location
    value: Islamabad, Pakistan
  - type: Email
    value: sdaud4214@gmail.com
cta_button: Send message
cta_link: mailto:sdaud4214@gmail.com
```

**Removed contact cards:** Phone, Resume download card, Freelance (Fiverr/Upwork)

---

## 11. Navigation

```
About → #about
Experience → #experience
Research → #research
Skills → #skills
Projects → #projects
Contact → #contact
```

No "Hire Me" link.

---

## 12. Design system (current HTML/CSS site)

### Colors
```css
--spec-bg: #0a0a0f;
--spec-card: #12121a;
--spec-primary: #f97316;    /* orange */
--spec-secondary: #3b82f6;  /* blue */
--spec-fg: #f8fafc;
--spec-muted: #94a3b8;
```

### Font
Inter (primary), Poppins (legacy template)

### Key animations
- `driftGrid` — hero dot grid (20s)
- `float` / delayed / slow / slower — profile badges
- `ping-slow` — ring around photo (2.5s)
- `animate-spin-slow` — dashed orbit (30s)
- `sweepLine` — contact section lines (18s, 24s, 30s)
- Scroll-to-top button visible after 400px scroll
- Section dividers — glowing diamond (orange / blue alternating)
- Project card watermarks 01–05
- IO fade on scroll (Intersection Observer)
- Stat counters animate on view
- Nav: glass effect after 40px, hide on scroll down after 120px

### CSS files (load order)
1. `css/style.css` (Colorlib base)
2. `css/theme-overrides.css`
3. `css/portfolio-spec.css` (load last)

### JS files
- `js/main.js` — smooth scroll offset 85px, owl carousel guard
- `js/portfolio-spec.js` — nav, typewriter, counters, active nav, scroll-top

---

## 13. Public portfolio exclusions

**Never add to public portfolio:**
- RAG / local-PDF Ollama chatbot (`local-PDF-chatbot-using-Ollama-RAG` repo exists but excluded from site)
- Agentek AI projects

---

## 14. GitHub Pages deployment

```yaml
repo_name: daud-shah.github.io
branch: main
url: https://daud-shah.github.io
type: user_pages  # root deploy, not /portfolio subpath
```

### Push commands (Windows PowerShell)
```powershell
cd "D:\MY WORK\Project\daud-shah.github.io"
git add README.md PORTFOLIO-MASTER.md index.html css/ js/
git commit -m "docs: add README and portfolio master reference"
git push origin main
```

### If Git shows "dubious ownership"
```powershell
git config --global --add safe.directory "D:/MY WORK/Project/daud-shah.github.io"
```

---

## 15. Rebuild checklist (new portfolio)

When creating a **new** portfolio from this file:

- [ ] Copy identity, links, CV URLs (Section 1)  
- [ ] Hero + typewriter + badges (Section 2)  
- [ ] Stats bar (Section 3)  
- [ ] Experience timeline — 6-month CCRIPT/Neuralogic dates (Section 4)  
- [ ] Research papers with status badges (Section 5)  
- [ ] Skills grid (Section 6)  
- [ ] Client projects block (Section 7)  
- [ ] Featured 5 projects + more repos (Sections 8–9)  
- [ ] Contact — Let's Connect, 2 cards only (Section 10)  
- [ ] Apply design tokens or adapt to new framework (Section 12)  
- [ ] Respect exclusions (Section 13)  
- [ ] Point CV button to Computer Vision Engineer Drive link  

---

## 16. Changelog (summary)

| Date | Change |
|------|--------|
| 2026 | Dark premium redesign (orange/blue palette, animations) |
| 2026 | Tab title → "Daud Shah \| Portfolio" |
| 2026 | Removed hiring language; contact → "Let's Connect" |
| 2026 | Added CCRIPT + Neuralogic experience (6 months each) |
| 2026 | Added 4 research papers + 2 client projects |
| 2026 | Single CV download — Computer Vision Engineer (Google Drive) |
| 2026 | Created README.md + PORTFOLIO-MASTER.md |

---

*End of master file. Keep this updated whenever you change the live portfolio.*
