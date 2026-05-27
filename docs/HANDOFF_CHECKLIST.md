# Handoff Checklist

Use this before giving the pack to a developer.

## Included
- Generated black/gold auth reference images
- Login, signup, and forgot-password UI mockups
- Logo placeholders
- Texture overlays
- 3D GLB placeholders
- OBJ fallback models
- Image/video generation prompts
- Claude Code implementation prompt
- Full uploaded Easy Scholarships master prompt

## Developer steps
1. Unzip this pack.
2. Copy `public/auth-assets/` into the app root.
3. Give `prompts/CLAUDE_CODE_IMPLEMENTATION_PROMPT.md` to Claude Code.
4. Tell Claude Code to read `source/EASY_SCHOLARSHIPS_AUTH_MASTER_PROMPT_FULL.md` before coding.
5. Replace placeholder assets later with final brand assets if needed.

## Do not upload or commit
- Supabase secret key
- Supabase service role key
- Passwords
- `.env.local`
- Private credentials

## Safe to upload
- Screenshots
- Public logo files
- Public design assets
- Generated images
- Generated videos
- Non-sensitive brand references
