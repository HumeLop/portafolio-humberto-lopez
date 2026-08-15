---
target: portfolio homepage
total_score: 26
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
timestamp: 2026-08-15T21-32-29Z
slug: src-pages-index-astro
---
# Critique — Portfolio Humberto López (single-page, ES/EN)

## Design Health Score: 26/32 (81%, Good) — 7 and 10 scored n/a

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Error/success states share button colors |
| 2 | Match System / Real World | 4 | Bilingual, natural copy |
| 3 | User Control and Freedom | 4 | Linear surface, mobile menu clears |
| 4 | Consistency and Standards | 3 | Locale fallback drift, no focus styles |
| 5 | Error Prevention | 3 | required attributes, no preview |
| 6 | Recognition Rather Than Recall | 4 | Nav echoes section heads |
| 7 | Flexibility & Efficiency | n/a | Portfolio = linear reading surface |
| 8 | Aesthetic & Minimalist Design | 3 | Dense: 16 trophies, 8-objective quest |
| 9 | Error Recovery | 2 | One-word ERROR, no guidance/aria-live |
| 10 | Help & Documentation | n/a | Self-evident single page |

## Design Specificity Verdict
- LLM: concept committed verbally (RPG/diegetic naming) but visually garnished; trophy axis untapped. Trophies section flat text list; swap title and nothing changes.
- Detector: 0 hard failures. 2 debatable warnings (layout-transition ~dormant; dark-glow = deliberate status dot), 1 advisory FP (em-dash overuse, mostly label separators).
- Visual overlays: none (no browser tool available).

## Overall Impression
Coherent, tactile retro terminal; the strongest part is the physical .panel/.btn kit and diegetic naming that stays instructive. Biggest opportunity: make section 06 (TROFEOS) actually deliver the trophy payoff the theme promises.

## What's Working
1. Physical interaction kit (.panel/.btn/.tag hard-shadow, striped stat bars).
2. Diegetic naming without breaking comprehension (double-decoded h2s).
3. Content earns the theme (real metrics: +580 tickets, solo Angular 18 migration).

## Priority Issues
- P1 — Trophies section breaks product promise (16 homogeneous text rows, no locked glyphs/tiers/progress).
- P1 — Stat system credibility collapse (WIS 3/10, CHA 1/10 vs 4-year full-stack claims).
- P1 — Experience is a wall-of-text valley (Stefanini quest, 8 objectives, lead ~50 words).
- P2 — Keyboard is second-class: no focus-visible, mobile toggle lacks aria-expanded/controls.
- P2 — Sub-pixel legibility: text-[7px]/[8px] Press Start 2P.
- P3 — Education before Projects buries proof.
- P2 — scroll-reveal starts opacity:0, JS-gated content.

## Persona Red Flags
- Alex (Power User): no keyboard shortcuts; focus management missing.
- Jordan (First-Timer): fine, section heads decode theme.
- Recruiter-45: 7px pixel labels tax reading; skills stats contradictory.
- Riley (Stress Tester): contact errors one-word, no remediation.

## Minor Observations
- Duplicate hover transform declarations (global.css:144-152 vs 330-336).
- Locale fallback drift `?? 'es'` vs `?? 'en'` (Projects.astro:7, Layout.astro:13).
- Dead code: EN CURSO branch (all jobs active:false).
- Error/success share primary button colors; bg-red token exists.
- Frontend Lv.8 vs Backend Lv.5 vs fullstack narrative.

## Provocative Questions
1. If section 06 became the point (trophy cabinet, locked rows, "% unlocked"), would theme survive full scroll?
2. Who is primary reader — engineer catching easter eggs, or recruiter skimming 30s?
3. What if one stat bar were a real verifiable metric (tickets, years in prod)?
