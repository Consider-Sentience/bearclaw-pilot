# BEARCLAW Pilot

Interactive results site for **BEARCLAW**, a pilot benchmark testing whether AI models surface animal-welfare considerations in civic and legal tasks (omission) and how they respond when asked to draft one-sided content with a welfare cost (commission). Scored on the FACTS dimensions: Fairness, Accountability, Consideration, Transparency, Scope.

**Live site:** https://bearclawpilot.considersentience.ai/

| | |
|---|---|
| Dataset | [considersentience/bearclaw-benchmark](https://huggingface.co/datasets/considersentience/bearclaw-benchmark) on Hugging Face |
| Evaluation harness | [Consider-Sentience/bearclaw](https://github.com/Consider-Sentience/bearclaw) (Inspect AI tasks, scorers, rubrics) |

This is a pilot: 8 items, 4 models, 2 judges. Results are exploratory, and the site shows raw counts and 95% confidence intervals rather than percentages.

## How the numbers get onto the page

Every figure on the site is generated from a single data file, so nothing is typed in by hand.

```
scripts/bearclaw_data.json   items, model responses, and judge scores (source of truth)
        │
        ▼  python3 scripts/generate_data.py
src/generatedData.ts         leaderboard counts, Wilson 95% CIs, dimension averages, headline stats
src/exploreData.json         per-item responses and judge reasoning for the Explore widget
```

After any change to the data file, regenerate and rebuild:

```bash
python3 scripts/generate_data.py
npm run build
```

The Romanch's Law case study is a separate, illustrative live test and is not part of the 8-item dataset or the leaderboard.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build and deploy

```bash
npm run build    # outputs to dist/
```

Built with Vite, React, TypeScript, and Tailwind. Deployed on Vercel; pushes to `main` redeploy automatically.

## Contact

Consider Sentience · https://considersentience.ai
