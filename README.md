# WhiskerWise — Evidence-Based Cat Care, Nutrition & Review Platform

An editorial publication, veterinary-reviewed knowledge base, and interactive tool suite inspired by the structure, user experience, and rigor of **Cats.com**.

---

## 🌟 Core Features & Experiences

### 1. Editorial Publication & Feline Science
- **Evidence-Based Articles**: Comprehensive investigations into Feline Chronic Kidney Disease (CKD), feline hydration biology (wet vs. dry food), feline behavioral communication (the slow blink trust study), Maine Coon genetic health screening (HCM), kitten decompression protocols, and Feline Idiopathic Cystitis (FIC).
- **Veterinary Review Board**: Articles feature medical review credits (e.g., Dr. Sarah Miller, DVM, ABVP) with clear verification statuses and educational medical disclaimers.
- **Rich Article Structure**: Interactive Table of Contents with smooth section jumping, key takeaway summary boxes, clinical callouts, guaranteed analysis data tables, and formal citations from peer-reviewed veterinary journals (e.g., *JFMS*, *JAVMA*, *IRIS*).

### 2. Categorized Knowledge Base
Data-driven category architecture covering 8 core domains:
- **Cat Health** (Preventive care, chronic conditions, urinary/digestive wellness, senior care)
- **Cat Nutrition** (Obligate carnivore physiology, moisture balance, specialty diets)
- **Cat Behavior** (Body language cues, multi-cat household harmony, litter aversion)
- **Cat Breeds** (Large breeds, hypoallergenic varieties, genetic predispositions)
- **Kitten Care** (Growth milestones, weaning, socialization protocols)
- **Grooming & Hygiene** (Triple-coat combing, safe claw trimming, dental care)
- **Product Reviews** (Lab tests, food safety recall audits, automated boxes)
- **Cat Stories** (Adoption memoirs, rescue journeys, foster spotlights)

### 3. Product Reviews & Buying Guides
- **The 5-Pillar Evaluation Standard**: Inspired by Cats.com’s objective criteria:
  1. *Species Appropriateness* (protein %, carbohydrate levels, moisture)
  2. *Ingredient Quality* (meat sourcing, named organs, absence of carrageenan)
  3. *Variety & Taste Appeal*
  4. *Price-to-Value Ratio*
  5. *Recall & Safety History* (FDA historic recall tracking)
- **Hands-On Breakdown**: Side-by-side Pros & Cons, guaranteed analysis specifications, "Best Suited For" vs. "Who Should Look Elsewhere" guidance, and competitor comparison matrices.
- **Affiliate Transparency**: Clear affiliate disclosures and simulated retailer availability windows.

### 4. Interactive Cat-Care Tools
- 🧮 **Cat Age Calculator**: Converts calendar years and months into accurate biological human age equivalents using the American Association of Feline Practitioners (AAFP) curve (1st year = ~15 human years; 2nd year = +9 years; subsequent years = +4 years), highlighting developmental milestones and life stages (Kitten, Junior, Prime, Mature, Senior, Geriatric).
- 🏷️ **Cat Name Finder**: Searchable database of 100+ curated feline names filterable by gender, aesthetic theme (Cute, Majestic, Culinary, Nature, Literary, Vintage), and coat color match. Includes one-click clipboard copying and local favorites bookmarking.
- ⚖️ **Daily Calorie & Portion Calculator**: Implements clinical veterinary Resting Energy Requirement ($RER = 70 \times \text{Weight}_{\text{kg}}^{0.75}$) and Maintenance Energy Requirement ($MER$) multipliers for neutered, intact, senior, or weight loss protocols. Calculates precise wet can and dry cup daily portions with a critical safety alert on preventing feline hepatic lipidosis.
- 🩺 **WSAVA 9-Point Body Condition Score (BCS) Guide**: Interactive tactile rib palpation, waist indentation, and abdominal tuck evaluation tool with tailored veterinary guidance.

### 5. Community & Reader Engagement
- **Downloadable Resource Packs**: Senior Cat Mobility Diary, Kitten Socialization Roadmap, and Household Toxic Botanical Safety Chart.
- **Reader Rescue Stories**: Community spotlight with an interactive story submission workflow.
- **Weekly Dispatch Newsletter**: Validated subscription form with topic preferences (Health Bulletins, Food Recalls) and instant confirmation feedback.

---

## 🎨 Visual Design System

- **Zero-Pill Discipline**: Metadata is presented as quiet, unboxed text separated by subtle typographic dots (`·`), keeping the editorial aesthetic clean and authoritative.
- **Color Palette**:
  - Main background: Warm off-white (`#FAF7F2`)
  - Typography: Dark charcoal (`#1E2321`) with muted slate secondary text (`#596560`)
  - Primary Accent: Restrained terracotta (`#C85A32`)
  - Veterinary/Health Accent: Muted forest sage (`#2D634C`)
- **Typography**: Editorial serif headings (`Lora`) paired with modern, highly legible sans-serif body text (`Plus Jakarta Sans`).

---

## 🚀 Running the Project Locally

### 1. Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### 2. Installation
```bash
npm install
```

### 3. Development Server
```bash
npm run dev
```
The application will launch on `http://localhost:3000`.

### 4. Type Checking & Production Build
```bash
# Run TypeScript compilation check
npm run lint

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🔒 Configuration & Environment Variables

Create a `.env` file based on `.env.example`:
```env
# Optional Gemini API key if implementing server-side extensions
GEMINI_API_KEY=""

# Application Host URL
APP_URL="http://localhost:3000"
```

All brand settings, editorial disclosures, and contact destinations are centrally configured in `src/data/` for easy customization.
