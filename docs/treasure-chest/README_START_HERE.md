# ToolBox

This ZIP is the developer handoff pack for continuing the Easy Scholarships interactive 3D project.

## Updated concept
The experience is now based around traveling toward and opening a **treasure chest**, not a vault.

The main 3D hero object should be a detailed treasure chest GLB. When it opens, the inside should feel rich, realistic, and exciting with:

- gold coins
- gems
- pearls or crystals
- scholarship cards / documents
- warm gold light
- dust and spark particles
- subtle fog or light rays
- valuable objects layered inside the chest

## Critical instruction for the developer
Proceed using the full workflow in this ZIP and complete the remaining work. Do not stop after installing dependencies. Do not only replace the model. Complete the whole treasure-chest experience, including the scroll animation, route transitions, auth-page world styling, GLB integration, performance pass, and QA.

## Start here
1. Read `prompts/00_MASTER_PROMPT_CLAUDE_CODE_TREASURE_CHEST.md`.
2. Read `docs/DEVELOPER_FULL_WORKFLOW.md`.
3. Inspect the uploaded model at `assets/models/treasure_chest_source.glb`.
4. Use `docs/GLB_INSPECTION_REPORT.json` to understand the model structure and animation names.
5. Copy the GLB into the app under `public/landing-assets/3d/treasure_chest_source.glb` or `public/chest-assets/3d/treasure_chest_source.glb`.
6. Replace the procedural vault concept with the treasure chest concept.
7. Add animated route transitions instead of hard page cuts.
8. Run build, lint, manual QA, and fix issues.

## What is included
- uploaded treasure chest GLB model
- model inspection report
- current project status notes
- previous visual/motion references
- extracted video frames
- master Claude Code prompt
- page transition prompt
- GLB integration prompt
- model-generation prompts
- Remotion prompt
- setup notes
- optimization commands
- performance checklist
- QA checklist

## Important note about legacy vault assets
Some included images and video references still show a vault. They are included only for timing, composition, and motion reference. The final concept must use a treasure chest, not a vault.
