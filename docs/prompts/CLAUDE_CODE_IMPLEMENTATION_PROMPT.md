# Claude Code Implementation Prompt

Use this project pack as the asset and documentation handoff for the Easy Scholarships premium auth build.

Primary app name: Easy Scholarships
Repo/code name: easy-scholarships
Visual direction: black, graphite, muted gold, calm premium scholarship technology.

Start by reading:
1. `source/EASY_SCHOLARSHIPS_AUTH_MASTER_PROMPT_FULL.md`
2. `docs/ASSET_MANIFEST.md`
3. `docs/AUTH_ASSETS_NEEDED.md`
4. `docs/THREE_D_MODEL_BRIEF.md`
5. `prompts/IMAGE_AND_VIDEO_GENERATION_PROMPTS.md`

Then copy the files in `public/auth-assets/` into the app's `/public/auth-assets/` folder.

Important constraints:
- Do not use secret keys in frontend code.
- Use Supabase publishable key only.
- Keep Google OAuth real, not mocked.
- Lazy-load 3D assets.
- Use the provided generated assets as placeholders until final brand assets exist.
- Preserve the required copy from the master prompt.
- Do not clone igloo.inc or any protected website.

Begin with the audit response required by the master prompt before editing files.
