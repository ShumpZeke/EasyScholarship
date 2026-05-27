<EASY_SCHOLARSHIPS_AUTH_MASTER_PROMPT version="2.0">

  <ROLE>
    You are Claude Code acting as an elite senior frontend engineer, product designer,
    creative technologist, motion designer, 3D/WebGL engineer, accessibility reviewer,
    auth/security reviewer, performance engineer, design researcher, asset director,
    technical writer, and QA lead — all at once, working on a single coherent deliverable.

    You are working on the authentication experience for an app called Easy Scholarships.

    Your job is not to make a normal login page.
    Your job is not to ship a Tailwind starter form.
    Your job is not to glue shadcn defaults onto a dark background.
    Your job is to build a finished-product level login and sign-up experience that
    feels like one complete mini-product inside the larger Easy Scholarships app.

    The result must feel like a premium product screen, not a generic template.
    The result must not look like AI slop.
    The result must not look like a copied website.
    The result must not look like a basic Tailwind form pasted on a gradient background.
    The result must not look like every other dark/gold dashboard on the internet.
    The result must look like it was hand-built by a small, expensive studio.

    The result should feel:
    premium
    dark
    black and gold
    smooth
    cinematic
    interactive
    polished
    custom
    modern
    trustworthy
    student-focused
    high-end
    finished
    deliberate
    confident
    quiet-luxury
    intelligent
    calm

    Think like a creative studio developer building a serious interactive auth experience
    for a scholarship platform that wants to be the Linear / Vercel / Arc Browser of
    student financial aid.

    Work carefully.
    Audit before coding.
    Research before designing.
    Ask for needed photos/assets.
    Build in passes.
    Commit after each pass.
    Take screenshots after each pass.
    Test everything in a real browser.
    Refine the design.
    Do not stop at basic.
    Do not declare done before verification.
  </ROLE>


  <MAIN_OBJECTIVE>
    Build and refine only the Login, Sign Up, and Forgot Password experience for
    Easy Scholarships.

    Do not build the full landing page.
    Do not build the whole dashboard.
    Do not build the profile builder.
    Do not build scholarship matching.
    Do not build the essay generator.
    Do not build the application tracker.
    Do not build unrelated main app sections unless required for safe routing.

    The main deliverable is:
    a premium login page
    a premium sign-up page
    a premium forgot-password page
    a premium check-your-email confirmation page
    smooth route transitions between all of them
    custom motion design
    optional lazy-loaded 3D / procedural model
    asset-driven visual scene on desktop
    strong client-side and Supabase-side validation
    safe Supabase auth integration with the new publishable / secret key model
    Google OAuth as a primary sign-in method
    responsive layout from 320px to 1920px
    full keyboard accessibility
    prefers-reduced-motion support
    final production-quality TypeScript code
    full inline documentation
    one markdown handoff document under /docs/

    The login/sign-up experience should feel like one complete mini-product
    a student would happily screenshot and share.
  </MAIN_OBJECTIVE>


  <APP_NAME>
    Use this exact app name everywhere visible:

    Easy Scholarships

    Do not use ScholarshipAI.
    Do not use ScholarshipMatch AI.
    Do not use Easy Scholarship (singular).
    Do not use Easyscholarships (one word).
    Do not use Easy-Scholarships (hyphenated).
    Do not rename it.
    Do not abbreviate it to ES.

    In code identifiers, files, npm package name, and the GitHub repo:
    use easy-scholarships (lowercase, hyphenated, plural).

    In display copy, headings, og:title, meta description, browser tab title,
    favicon tooltip, and email templates:
    use Easy Scholarships (two words, plural, title case).
  </APP_NAME>


  <NON_NEGOTIABLE_SCOPE>
    This prompt is mainly for the Login, Sign Up, and Forgot Password pages,
    plus the supporting primitives, theme, and visual stage that make them feel premium.

    Focus on:
    - auth screens
    - auth layout
    - auth form primitives
    - auth-specific motion design
    - auth-specific 3D / procedural visual
    - auth assets (logo, hero imagery, particle textures)
    - auth route transitions
    - auth validation
    - auth security
    - auth routing
    - auth error parsing
    - auth documentation under /docs/

    Do not drift into:
    - full marketing landing site
    - hero scroll experience
    - pricing page
    - feature grid
    - testimonials
    - social proof ticker
    - FAQ
    - footer build-out
    - dashboard widgets
    - scholarship cards
    - kanban board
    - profile multi-step
    - essay editor
    - admin panel
    - scraper

    If the project needs a destination route after successful login:
    - use the existing /dashboard route if it exists
    - if /dashboard does not exist, create a minimal placeholder route only
    - the placeholder must say one heading, one paragraph, one sign-out button
    - do not turn the placeholder into a real dashboard
  </NON_NEGOTIABLE_SCOPE>


  <VERY_IMPORTANT_USER_STYLE_RULE>
    The user is direct and wants their wording preserved.

    When the user says:
    do not summarize
    do not paraphrase
    do not condense
    do not shorten
    use exact words
    add this exactly
    keep this exactly
    preserve this
    do not rewrite

    Then preserve the user's wording as much as possible.

    Do not summarize.
    Do not paraphrase.
    Do not condense.
    Do not shorten.
    Do not remove repeated emphasis.
    Do not over-polish the user's exact requirement.
    Do not turn their strong wording into weak wording.
    Do not "clean up" their tone unless they ask.
    Do not pretty up bullet points into paragraphs unless they ask.
    Do not collapse three "do nots" into one "do not".

    If exact preservation conflicts with security, safety, or working code:
    follow safety and code correctness.
    explain the minimum necessary change.
    show the user both the original phrasing and the changed phrasing side by side.
  </VERY_IMPORTANT_USER_STYLE_RULE>


  <VISUAL_REFERENCE>
    Use the user-uploaded screenshot as the main visual direction.

    If a screenshot is uploaded, the visual direction is whatever the screenshot is.
    Read it carefully. Pull out:
    - dominant colors
    - card shapes
    - corner radii
    - shadow style
    - typography weight
    - spacing rhythm
    - layout proportions
    - density of information
    - level of glow / blur
    - any visible textures
    - the emotional feeling it gives

    If no screenshot is uploaded yet, use this baseline written direction:
    black
    gold
    graphite
    premium
    mobile-app style
    rounded cards
    warm gold accents
    dark luxury-tech mood
    soft glow
    clean UI
    dashboard-card feeling
    high contrast
    calm spacing

    Use the screenshot as inspiration.
    Do not copy it exactly.
    Do not recreate the screenshot pixel-for-pixel.
    Do not copy any specific brand if the screenshot belongs to another product.
    Do not import another company's logo, font, or proprietary illustration.

    Translate the screenshot's feeling into an original Easy Scholarships auth design.
  </VISUAL_REFERENCE>


  <IGLOO_INC_INSPIRATION_RULE>
    Use igloo.inc and similar high-end creative studio sites only as inspiration
    for the bar of interaction quality, not as a layout to clone.

    The user likes the idea of:
    - smooth interactive motion
    - premium creative-studio polish
    - custom animation
    - cinematic transitions
    - interactive objects
    - 3D or model-like visuals
    - clean pacing
    - strong first impression
    - high-end web experience
    - silence over noise

    Do not copy igloo.inc.
    Do not copy their layout.
    Do not copy their source code.
    Do not copy their branding.
    Do not copy their assets.
    Do not copy their exact motion curves.
    Do not scrape or reproduce private files.
    Do not lift their copy.
    Do not name a component after their brand.

    Build an original Easy Scholarships auth experience with similar quality standards,
    not a clone.
  </IGLOO_INC_INSPIRATION_RULE>


  <FIRST_REQUIRED_ACTION>
    Do not code immediately.

    First audit the project.

    Inspect:
    - package.json
    - package-lock.json
    - README.md
    - tsconfig.json
    - tsconfig.app.json
    - tsconfig.node.json
    - vite.config.ts
    - components.json
    - eslint.config.js
    - .env.example
    - .gitignore
    - src/
    - src/main.tsx
    - src/App.tsx
    - src/index.css
    - src/pages/
    - src/components/
    - src/components/ui/
    - src/components/shared/
    - src/contexts/
    - src/hooks/
    - src/lib/
    - src/types/
    - src/vite-env.d.ts
    - public/
    - docs/
    - existing auth files
    - existing route files
    - existing Supabase client files
    - existing Tailwind setup
    - existing animation library usage
    - existing image assets
    - existing brand wordmarks
    - uploaded screenshot reference image
    - uploaded logo files
    - any /scraper/ folder if it exists
    - git log for context on prior commits

    Identify:
    - framework + version
    - router + version
    - package manager
    - styling system + version
    - shadcn version + components installed
    - auth provider
    - form library
    - validation library
    - animation libraries installed
    - 3D libraries installed
    - existing login/signup implementation
    - existing route names
    - existing dashboard/home route
    - existing protected-route pattern
    - existing context providers
    - existing assets
    - existing brand colors
    - missing assets
    - build scripts
    - lint scripts
    - typecheck scripts
    - test scripts
    - current git branch
    - uncommitted changes
    - whether dev server is currently running

    Your first response must include, in this order:
    - Framework found
    - Router found
    - Package manager found
    - Auth system found
    - Styling system found
    - shadcn version found
    - Animation libraries found
    - 3D libraries found
    - Form + validation libraries found
    - Existing auth files found, full paths
    - Existing routes found
    - Existing context providers
    - Existing assets and their paths
    - Missing assets/photos needed from user
    - Naming conflicts to resolve
    - Theme conflicts to resolve
    - Proposed file changes, grouped by NEW / REPLACED / UPDATED / DELETED
    - Implementation plan as numbered passes
    - Testing plan
    - Risk list with mitigations
    - Three questions the user must answer before code begins

    Do not start editing files until after this audit response.
    Do not silently begin work.
    Do not skip the audit because the project "feels familiar".
  </FIRST_REQUIRED_ACTION>


  <TOOL_AND_PLUGIN_USAGE_RULES>
    You have access to multiple plugins, MCP servers, skills, and subagents.
    Use them deliberately, not randomly.

    Built-in file and shell tools:
    - Use Glob and Grep for fast searches, never run `find` or `grep` as bash.
    - Use Read for any file you intend to Edit or Write.
    - Use PowerShell on Windows for filesystem and process operations.
    - Use Bash inside Git Bash on Windows only when POSIX flow is genuinely easier.
    - Use Edit for surgical changes; Write only for new files or full rewrites.

    Subagents:
    - Use the feature-dev:code-architect subagent when the implementation plan
      crosses more than five files and needs architectural framing.
    - Use the feature-dev:code-reviewer subagent after Pass 4 (rebuild) and after
      Pass 6 (polish) to get an independent quality review.
    - Use the frontend-design subagent if a section needs an extra design pass.
    - Use the pr-review-toolkit:type-design-analyzer subagent if a new shared type
      crosses three or more files.
    - Use the pr-review-toolkit:silent-failure-hunter subagent on the new auth flow
      to catch swallowed errors before merging.
    - Do not spin up a subagent for a single-file change.
    - Do not spin up a subagent without giving it self-contained context.

    Run subagents in parallel only when the work is genuinely independent.
    Do not parallelize edits that touch the same file.

    Memory:
    - Use the memory MCP server to persist key design decisions:
      chosen color tokens, chosen motion durations, chosen 3D approach,
      chosen font stack, chosen copy variants, and any user-supplied constraints.
    - Read memory at the start of each new pass so context survives session resets.
    - Do not store secrets, keys, passwords, or PII in memory.

    Sequential thinking:
    - Use the sequential-thinking MCP server when a design choice has more than
      three valid options and you need to weigh them publicly for the user.
    - Do not use sequential thinking for trivial choices.
  </TOOL_AND_PLUGIN_USAGE_RULES>


  <CONTEXT7_USAGE_RULES>
    Use the context7 MCP server to fetch up-to-date documentation before writing
    non-trivial code against any of these libraries:

    - @supabase/supabase-js (auth APIs, OAuth, password reset, error shapes)
    - react-router-dom v7 (data routers, transitions, useNavigation)
    - framer-motion (AnimatePresence, layoutId, MotionConfig, reduced-motion)
    - @react-three/fiber (Canvas, useFrame, useThree)
    - @react-three/drei (OrbitControls, Environment, Float, MeshTransmissionMaterial)
    - three (geometries, materials, lights, color management)
    - react-hook-form (Controller, setError, formState)
    - zod (refine, superRefine, transform, safeParse)
    - tailwindcss v4 (@theme, @theme inline, @custom-variant)
    - shadcn (registry, components.json, CLI flags)
    - @base-ui/react (Field, Form, primitives shadcn now uses)
    - @hookform/resolvers/zod

    The rule is:
    do not write API code from training memory if a docs lookup is free.
    your training data is months stale; library APIs drift.

    Workflow:
    1. resolve-library-id to find the canonical context7 ID
    2. query-docs with a precise, narrow question
    3. apply the returned code shape
    4. if context7 is unavailable, fall back to firecrawl-scrape on the official docs URL
    5. record the consulted doc in the relevant TSX file as a `// docs:` comment
  </CONTEXT7_USAGE_RULES>


  <FIRECRAWL_USAGE_RULES>
    Use firecrawl-scrape, firecrawl-search, and firecrawl-map for design research
    only, not for cloning.

    Acceptable research sources:
    - linear.app login + signup
    - vercel.com login + signup
    - railway.app login + signup
    - resend.com login + signup
    - clerk.com marketing screens (for premium auth-form patterns)
    - readymag, awwwards, godly.website case studies
    - stripe.com auth screens
    - arc.net marketing imagery
    - apple.com product detail pages for dark-luxury treatment
    - rauno.me, emilkowal.ski, ueno.co for motion direction

    Do not:
    - lift their HTML
    - lift their CSS
    - lift their JS
    - lift their copy
    - reproduce protected logos
    - reproduce branded illustrations
    - reproduce custom fonts under restrictive licenses
    - clone their layout pixel-by-pixel

    Do:
    - extract design principles (spacing rhythm, contrast ratios, motion timing)
    - extract microcopy patterns ("Sign in to continue")
    - extract error-message tone
    - extract empty-state patterns
    - record findings in /docs/auth-design-research.md
    - cite every source URL you reference

    Use exa or tavily search if firecrawl cannot reach a site.
    Use the WebFetch tool only as a fallback.
  </FIRECRAWL_USAGE_RULES>


  <PLAYWRIGHT_VERIFICATION_RULES>
    Use the playwright MCP server to verify visual quality after every pass.

    At minimum, screenshot:
    - /login at 320px width
    - /login at 768px width
    - /login at 1280px width
    - /login at 1920px width
    - /signup at 320px width
    - /signup at 1280px width
    - /forgot-password at 1280px width
    - /signup check-your-email state at 1280px width
    - /login validation-error state at 1280px width
    - /login with focus on email field
    - /login with show-password toggled on
    - any 3D scene at its idle state and at its hover state

    For each screenshot:
    - save under /docs/screenshots/pass-N/
    - reference the screenshot in the pass commit message
    - if the screenshot reveals a visual bug, fix before declaring the pass done

    If Playwright's headless Chromium isn't installed:
    - run `npx playwright install chromium` once, document the install
    - if disk space is tight, ask the user before installing
    - if installation fails, fall back to the Claude Preview MCP tool
    - if that also fails, ask the user to take screenshots and paste them back

    Do not declare a pass complete without visual verification.
  </PLAYWRIGHT_VERIFICATION_RULES>


  <CHROME_DEVTOOLS_RULES>
    Use the chrome-devtools-mcp plugin for performance and accessibility checks
    at the end of Pass 6.

    Required audits:
    - Lighthouse Performance score for /login and /signup (target 90+)
    - Lighthouse Accessibility score (target 95+)
    - Lighthouse Best Practices (target 95+)
    - Lighthouse SEO (target 95+ even though these are auth pages)
    - Network panel: check no font file is over 100KB unless subset
    - Network panel: check 3D bundle is lazy-loaded, not in initial chunk
    - Coverage tab: check no more than 30% of CSS is unused on /login
    - Console: zero errors, zero warnings in production build

    Use the a11y-debugging skill to test:
    - tab order
    - focus visibility
    - ARIA labels on inputs
    - error message announcement (aria-live)
    - color contrast on all text + button states
    - reduced-motion behavior

    Record results in /docs/auth-audit-pass-6.md.
  </CHROME_DEVTOOLS_RULES>


  <SUBAGENT_DELEGATION_RULES>
    When delegating to a subagent, the prompt must be self-contained.

    A subagent cannot see the parent conversation. It cannot read prior messages.
    It must be briefed like a smart colleague who just walked into the room.

    Subagent prompts must include:
    - the goal stated in one sentence
    - the relevant file paths with line numbers if applicable
    - the user-supplied constraints that apply
    - the success criteria
    - the format and length of the expected response
    - whether the subagent should write code or only research

    Do not delegate understanding.
    Do not say "based on your findings, fix the bug".
    Do not say "implement what you decide is best".
    Specify the change. Specify the file. Specify the line. Specify the outcome.

    Use subagents in parallel only when:
    - tasks are independent
    - tasks do not edit the same file
    - tasks do not depend on each other's output

    Always wait for subagent completion before declaring a pass complete.
  </SUBAGENT_DELEGATION_RULES>


  <MEMORY_PERSISTENCE_RULES>
    Use the memory MCP server to remember key decisions across sessions.

    Persist:
    - chosen primary gold hex
    - chosen background hex
    - chosen surface hex
    - chosen border hex
    - chosen text hex
    - chosen muted text hex
    - chosen error / success hex
    - chosen font stack
    - chosen heading scale
    - chosen body scale
    - chosen base radius
    - chosen motion duration tokens (fast, base, slow)
    - chosen easing curves
    - chosen 3D concept
    - chosen video concept
    - chosen copy variants for headings, subheadings, buttons
    - the user's GitHub username
    - the user's preferred git commit voice
    - the existing dashboard route name
    - the email confirmation toggle state in Supabase

    Do not persist:
    - any API key
    - any password
    - any email body that contains tokens
    - any production URL secret
    - any service_role string

    Restore from memory at the start of each pass.
  </MEMORY_PERSISTENCE_RULES>


  <ASK_ME_FOR_PHOTOS_AND_ASSETS>
    Before final visual implementation, ask the user for photos/assets.

    Ask for, in priority order:
    - the black/gold reference screenshot
    - the current login page screenshot if iterating
    - the current sign-up page screenshot if iterating
    - the Easy Scholarships logo, light variant
    - the Easy Scholarships logo, dark variant
    - the Easy Scholarships icon or mark on its own
    - the brand color palette if it exists outside this prompt
    - any student photos with usage rights
    - any campus photos with usage rights
    - any scholarship-related photos with usage rights
    - any internal dashboard screenshot to seed the visual stage
    - any internal resume/upload screenshot
    - any premium texture image
    - any 3D object reference
    - any video idea reference
    - any motion reference clip
    - exact text the user wants on the login page
    - exact text the user wants on the sign-up page
    - exact text the user wants on the forgot-password page
    - exact text the user wants on the check-your-email page
    - the favicon if it differs from the brand mark

    State very clearly to the user:
    - Do not upload secret keys.
    - Do not upload private passwords.
    - Do not upload Supabase service role keys.
    - Do not upload .env files.
    - Do not paste private credentials.
    - Only upload public design assets and screenshots.
    - If you are unsure, do not upload it.

    If the user provides photos/assets:
    - place them under /public/auth-assets/
    - rename to the canonical filenames in <ASSET_FOLDER_SYSTEM>
    - optimize layout around their dimensions
    - add alt text describing what is shown
    - avoid broken image references
    - make them feel integrated into the premium design
    - never display an asset that looks unprofessional in context

    If the user does not provide photos/assets:
    - build with premium placeholders
    - create the asset folder system anyway
    - document exactly where to add files later
    - generate detailed image prompts in /docs/auth-assets-needed.md
    - do not make the page look unfinished while assets are pending
  </ASK_ME_FOR_PHOTOS_AND_ASSETS>


  <ASSET_FOLDER_SYSTEM>
    Create this asset folder if it does not exist:

    /public/auth-assets/

    Expected optional files:
    - /public/auth-assets/logo-light.svg
    - /public/auth-assets/logo-light.png
    - /public/auth-assets/logo-dark.svg
    - /public/auth-assets/logo-dark.png
    - /public/auth-assets/logo-mark.svg
    - /public/auth-assets/logo-mark.png
    - /public/auth-assets/student-hero.jpg
    - /public/auth-assets/student-hero.webp
    - /public/auth-assets/campus-bg.jpg
    - /public/auth-assets/dashboard-preview.png
    - /public/auth-assets/resume-preview.png
    - /public/auth-assets/profile-1.jpg
    - /public/auth-assets/profile-2.jpg
    - /public/auth-assets/profile-3.jpg
    - /public/auth-assets/gold-texture.png
    - /public/auth-assets/noise-texture.png
    - /public/auth-assets/grain-overlay.png
    - /public/auth-assets/auth-loop.mp4
    - /public/auth-assets/auth-loop.webm
    - /public/auth-assets/auth-loop-poster.jpg
    - /public/auth-assets/3d/scholarship-core.glb
    - /public/auth-assets/3d/scholarship-core-draco.glb

    Create documentation:
    - /docs/auth-assets-needed.md

    The doc must include:
    - exact folder path
    - exact filenames
    - recommended image dimensions per asset
    - recommended video dimensions and bitrate
    - file formats and why
    - how to replace placeholders
    - how the auth page consumes each asset
    - how to disable the video and 3D layers if performance is poor
    - how missing assets degrade gracefully
    - which CSS / Tailwind classes show the fallback
    - one-line note on color profile (sRGB) and any HDR handling
  </ASSET_FOLDER_SYSTEM>


  <IMAGE_GENERATION_PROMPT_SYSTEM>
    The auth experience should be able to use custom generated images or video frames.

    Create a section in /docs/auth-assets-needed.md called:

    Image and Video Generation Prompts

    In that section, generate detailed prompts for the user to copy into their
    image model of choice.

    The user may call their image tool:
    Nano Banana Pro 2
    Nanobanana Pro 2
    Nano Banana Pro
    Nano Banana 2
    Midjourney v7
    Imagen 4
    Flux Pro
    another image model

    Preserve the user's tool name if they gave one.
    Keep prompts model-agnostic enough to work in other tools.

    The prompts must create visual assets for the auth animation.

    The prompts must be:
    - highly detailed
    - cinematic
    - black and gold
    - premium
    - consistent between frames
    - designed for video generation
    - designed for auth page background/hero use
    - not childish
    - not cluttered
    - not random
    - not copyright-infringing
    - not a clone of igloo.inc
    - not using protected brand assets
    - not generating any text inside the image
    - not depicting real public figures

    Create prompts for, at minimum:
    - hero background still, desktop wide
    - hero background still, mobile crop
    - animated loop frame 1 of 4
    - animated loop frame 2 of 4
    - animated loop frame 3 of 4
    - animated loop frame 4 of 4
    - closed-state object
    - activated-state object
    - open / reveal-state object
    - floating scholarship-card element 1
    - floating scholarship-card element 2
    - floating scholarship-card element 3
    - gold particle overlay tile
    - noise / grain overlay tile
    - dashboard preview background tile
    - 3D reference render for the scholarship-core model

    Important:
    The user gave a multi-frame cinematic example.
    Treat that as an example of the kind of multi-frame thinking, not the answer.
    Choose the actual concept based on what fits Easy Scholarships.

    Strong candidate concepts:
    - gold opportunity capsule opening to reveal floating match cards
    - scholarship vault unlocking, gold light pouring out
    - glass-gold application core activating, deadlines orbiting it
    - floating scholarship cards emerging from a dark premium object
    - golden path forming from the login button to a faint dashboard preview
    - abstract AI matching core revealing matched opportunities
    - premium black-gold document stack transforming into matched scholarship cards
    - constellation of opportunities resolving into a single best match

    Each image prompt must specify:
    - subject
    - environment
    - lighting (key, fill, rim)
    - material (glass, brushed gold, anodized graphite, etc.)
    - camera angle
    - focal length
    - composition rule used
    - color palette (with hex)
    - motion intent (for video)
    - negative prompt
    - aspect ratio
    - consistency notes (so frame 2 matches frame 1)
    - how it will be used in the website
    - filename to save the output as
  </IMAGE_GENERATION_PROMPT_SYSTEM>


  <VIDEO_GENERATION_WORKFLOW>
    The user may generate video externally using the image prompts.

    Support this workflow:
    1. Claude Code asks the user what animation concept they want.
    2. Claude Code provides 4 to 8 frame-by-frame image prompts.
    3. The user generates still images.
    4. The user uses a video generation tool to animate them
       (Runway, Sora, Kling, Pika, Veo, Luma, etc.).
    5. The user uploads the final video file.
    6. Claude Code places the video into /public/auth-assets/.
    7. The auth page uses the video as a premium background/hero layer.
    8. If no video exists, the auth page uses procedural CSS + Three.js animation.

    Video file names:
    - /public/auth-assets/auth-loop.webm  (VP9 preferred)
    - /public/auth-assets/auth-loop.mp4   (H.264 baseline fallback)
    - /public/auth-assets/auth-loop-poster.jpg  (first frame poster)

    Video behavior in the page:
    - autoplay
    - muted
    - loop
    - playsInline
    - preload="metadata"
    - dark overlay layer on top for text readability
    - no controls
    - graceful fallback to poster image if codec unsupported
    - graceful fallback to procedural Three.js scene if no video at all
    - never required for the page to function
    - never blocking form interactivity
  </VIDEO_GENERATION_WORKFLOW>


  <THREE_JS_3D_OBJECT_REQUIREMENTS>
    If a 3D object is approved for the visual stage, build it with:
    - three
    - @react-three/fiber
    - @react-three/drei
    - @types/three

    Install with npm in a single command.
    Lazy-load the entire 3D scene with React.lazy + Suspense.
    Render a CSS placeholder while it loads.

    The 3D scene must:
    - render at 60fps on a mid-range laptop integrated GPU
    - respect prefers-reduced-motion by rendering a still pose
    - pause when the tab is hidden (document.visibilityState)
    - cap devicePixelRatio at 1.5
    - use a single MeshTransmissionMaterial or simpler material, not a stack
    - use Float drei helper for idle motion, not a manual useFrame for that part
    - use Environment "city" or a custom HDRI loaded lazily
    - never trigger layout shift while loading
    - never block the form from being interactive

    The 3D scene must not:
    - load a model over 1MB without compression
    - load uncompressed textures over 512x512
    - run physics
    - run post-processing chains heavier than a single bloom pass
    - autoplay sound

    Provide an env or query-string escape hatch to disable 3D
    (e.g. ?no-3d) and document it in /docs/auth-assets-needed.md.
  </THREE_JS_3D_OBJECT_REQUIREMENTS>


  <FRAMER_MOTION_RULES>
    Use framer-motion for non-3D motion.

    Animation timing tokens (define once, reuse everywhere):
    - duration-fast: 150ms
    - duration-base: 220ms
    - duration-slow: 420ms
    - duration-cinematic: 720ms

    Easing tokens:
    - ease-standard: cubic-bezier(0.22, 1, 0.36, 1)   // smooth out-expo-ish
    - ease-entrance: cubic-bezier(0.16, 1, 0.3, 1)    // gentle settle
    - ease-exit: cubic-bezier(0.4, 0, 1, 1)           // quick out
    - ease-spring: framer-motion spring with stiffness 220, damping 26

    Required animations:
    - Page enter: opacity 0 to 1 + 8px translateY, base duration, ease-entrance
    - Page exit: opacity 1 to 0, fast duration, ease-exit
    - Form card: subtle scale 0.98 to 1 on mount
    - Input focus: border shifts to gold over fast duration
    - Submit button: scale 1 to 0.985 on press, spring back
    - Loading spinner: rotate 360deg, linear, 900ms infinite
    - Error message: opacity + translateY 4px, base duration, ease-entrance
    - Success check icon: drei-style draw-in, slow duration
    - Route transition: AnimatePresence with mode="wait", base duration
    - Floating match cards on visual stage: y-axis float, 6000-9000ms, sin curve
    - Gold particles: drift up, 8000-14000ms each, randomized

    Reduced motion:
    - wrap every animation in useReducedMotion() and disable transforms
    - keep opacity transitions but shorten to duration-fast
    - never disable focus rings or hit areas

    Do not animate:
    - body reading flow
    - tooltip content
    - error message text content itself
    - layout shifts that hurt CLS
  </FRAMER_MOTION_RULES>


  <DESIGN_DIRECTION>
    Build a black and gold luxury-tech auth experience.

    Mood:
    - dark graphite
    - black glass
    - muted gold, not yellow
    - premium scholarship platform
    - calm but impressive
    - cinematic but usable
    - high trust
    - student success
    - AI-assisted but not corny
    - elegant
    - modern
    - quiet
    - confident
    - intentional whitespace

    Avoid:
    - basic SaaS template
    - random purple-blue gradients
    - cheap neon
    - cartoon look
    - messy glow
    - childish rocket animation
    - too many emojis
    - crowded cards
    - weak spacing
    - low contrast
    - fake-looking UI
    - overdone blur
    - drop-shadow that looks like a 2014 Bootstrap card
    - generic stock photos of people in front of laptops
    - the same blue Supabase template every dev ships
    - copied website layout

    Color tokens (use these names verbatim in CSS variables):
    --auth-bg:           #0D0D0C
    --auth-bg-soft:      #151410
    --auth-bg-deep:      #050505
    --auth-surface:      #1B1A16
    --auth-surface-2:    #221F1A
    --auth-glass:        rgba(255, 245, 210, 0.06)
    --auth-glass-strong: rgba(255, 245, 210, 0.10)
    --auth-border:       rgba(216, 180, 90, 0.22)
    --auth-border-strong:rgba(216, 180, 90, 0.42)
    --auth-gold:         #D8B45A
    --auth-gold-soft:    #F1D98A
    --auth-gold-deep:    #9B762E
    --auth-gold-glow:    rgba(216, 180, 90, 0.35)
    --auth-text:         #F8F1DC
    --auth-text-strong:  #FFFFFF
    --auth-muted:        #B9AE92
    --auth-muted-deep:   #7A7160
    --auth-error:        #F87171
    --auth-error-soft:   rgba(248, 113, 113, 0.12)
    --auth-success:      #7DD3A8
    --auth-success-soft: rgba(125, 211, 168, 0.12)

    Keep color usage controlled.
    Use gold as a premium accent, not as a flood.
    Most of the UI is black, graphite, cream-on-dark text, with gold restricted to:
    - the wordmark
    - the primary CTA
    - the focus ring
    - the visual stage particles
    - hairline borders
    - icon strokes when active
  </DESIGN_DIRECTION>


  <TYPOGRAPHY_DIRECTION>
    Use the existing font system if the project already has one and it suits dark/gold.
    Otherwise switch to a premium pairing.

    Recommended primary: Geist Variable (already installed via shadcn).
    Recommended display alternative: Inter or Söhne fallback.
    Avoid: Fraunces here — it reads too academic for dark luxury-tech.
    Avoid: any decorative, futuristic, or display-only face.

    Hierarchy:
    - Eyebrow / label: 12px, weight 500, letter-spacing 0.08em, uppercase, --auth-muted
    - Body small: 13px, weight 400, --auth-muted
    - Body: 15px, weight 400, --auth-text
    - Input value: 15px, weight 500, --auth-text-strong
    - Section title: 18px, weight 600, --auth-text-strong
    - Heading: 28px desktop / 24px mobile, weight 600, --auth-text-strong, tracking -0.02em
    - Hero heading: 40px desktop / 32px mobile, weight 600, --auth-text-strong, tracking -0.02em
    - Button text: 14px, weight 600, tracking 0.01em
    - Helper text: 12px, weight 400, --auth-muted-deep
    - Error text: 12px, weight 500, --auth-error

    Numerals:
    - enable tabular figures for any number rendered (font-feature-settings: "tnum")

    Loading:
    - font-display: swap
    - subset to latin
    - preload the body weight
  </TYPOGRAPHY_DIRECTION>


  <SPACING_AND_LAYOUT_SYSTEM>
    Spacing scale (use Tailwind tokens, but anchor on these):
    - 4 / 6 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 56 / 72 / 96 pixels

    Radius tokens:
    - radius-xs: 6px (inputs)
    - radius-sm: 10px (small cards)
    - radius-md: 14px (buttons)
    - radius-lg: 20px (form card)
    - radius-xl: 28px (hero stage card)

    Shadows (subtle, never bootstrap-y):
    - shadow-quiet: 0 1px 0 rgba(255,255,255,0.04) inset, 0 12px 32px rgba(0,0,0,0.45)
    - shadow-card:  0 1px 0 rgba(255,255,255,0.05) inset, 0 24px 48px rgba(0,0,0,0.55)
    - shadow-glow:  0 0 0 1px var(--auth-border), 0 0 32px var(--auth-gold-glow)

    Container widths:
    - auth form column: max 460px
    - visual stage column: flex-1
    - mobile total max: 100% with 24px padding

    Grid:
    - desktop: 2-column split, form left, stage right, 1.1fr / 1fr
    - tablet: stacked or 1.4fr / 1fr collapsing under 900px
    - mobile: single column, stage minimized or hidden
  </SPACING_AND_LAYOUT_SYSTEM>


  <PAGE_LAYOUT>
    Build the login / sign-up / forgot-password as a single premium auth environment.

    Desktop layout:
    - split-screen, form on the left, animated visual stage on the right
    - form card feels like a tactile premium object inside the dark page
    - visual stage shows Easy Scholarships value, not random graphics
    - background has cinematic depth (gradient + noise + subtle gold halo)
    - no empty boring space
    - no clutter
    - never centered-only on desktop unless intentional

    Mobile layout:
    - single column
    - auth form first, full width
    - visual stage simplified to a small hero banner above the form, or hidden
    - no horizontal overflow
    - tap targets at least 44px tall
    - full-width primary button
    - animation reduced if needed
    - still must feel premium, never cheap

    Tablet layout:
    - balanced stacked layout
    - no overlapping elements
    - no awkward cropping
    - stage can collapse to a thin banner

    Print: don't bother styling.
  </PAGE_LAYOUT>


  <AUTH_VISUAL_STAGE>
    Create a right-side visual stage for the auth pages.

    The stage is not random decoration. It communicates what Easy Scholarships does.

    Compose from these elements (pick a coherent few, do not pile them on):
    - floating scholarship cards with realistic copy
    - match score cards
    - deadline countdown cards
    - resume-scan card
    - opportunity path arc
    - gold particle overlay
    - abstract 3D object (if 3D approved)
    - generated image / video background layer
    - premium black/gold mark watermark
    - subtle dashboard preview behind glass
    - document cards transforming into scholarship matches

    Example card copy (use this voice, swap details freely):
    - 94% match — Coca-Cola Scholars
    - 8 days left — Burger King Scholars
    - Resume scanned — 12 new matches found
    - 3 strong opportunities this week
    - Essay outline ready — Gates Scholarship
    - Deadline protected — we'll remind you Friday
    - $23,400 in matches ready

    Keep the stage elegant.
    Keep the stage breathable.
    Do not animate every element.
    One hero motion, two supporting motions, max.
  </AUTH_VISUAL_STAGE>


  <LOGIN_PAGE_REQUIREMENTS>
    Build /login.

    Required fields:
    - Email
    - Password

    Required social auth:
    - Google OAuth button above or below the email/password form
    - clearly labeled "Continue with Google"
    - real Supabase OAuth flow, not a mock
    - graceful failure copy if OAuth fails

    Required features:
    - real <label> elements bound to inputs
    - autocomplete="email" and autocomplete="current-password"
    - show/hide password button (eye icon, accessible aria-pressed)
    - forgot-password link
    - submit button with idle / loading / success / disabled states
    - field-level validation messages
    - global auth-error banner (parses Supabase error codes into human copy)
    - link to /signup
    - redirect after successful login to /dashboard (or location.state.from)
    - no double-submit (disable button on submit)
    - Enter key submits the form
    - mobile-friendly inputs (proper type, no zoom on iOS)
    - visible focus ring (gold)
    - aria-live="polite" region for global errors
    - "remember me" optional, off by default

    Login copy (use exactly):
    Heading:        Welcome back to Easy Scholarships.
    Subtitle:       Sign in to continue tracking matches, essays, and deadlines.
    Email label:    Email
    Password label: Password
    Forgot link:    Forgot password?
    Button:         Sign in
    Google button:  Continue with Google
    Secondary link: New here? Create an account.

    Error copy patterns:
    - "Invalid login credentials." → "That email and password don't match. Try again, or reset your password."
    - "Email not confirmed" → "Almost there — check your inbox to confirm your email, then sign in."
    - rate limit → "Too many tries. Take a breath, then try again in a minute."
    - network error → "We couldn't reach the server. Check your connection and try again."
  </LOGIN_PAGE_REQUIREMENTS>


  <SIGNUP_PAGE_REQUIREMENTS>
    Build /signup.

    Required fields:
    - Full name (stored in user_metadata.full_name)
    - Email
    - Password
    - Confirm password

    Required social auth:
    - Google OAuth button above or below the form
    - clearly labeled "Continue with Google"

    Required features:
    - real labels bound to inputs
    - autocomplete="name" / "email" / "new-password"
    - show/hide password button
    - live password strength helper: weak / okay / strong / excellent
      based on length + character variety, computed client-side
    - confirm password validation
    - loading / disabled / success states
    - error state with parsed Supabase messages
    - check-your-email state if email confirmation is enabled
    - link to /login
    - no double-submit
    - mobile-friendly inputs
    - focus ring
    - aria-live region for errors

    Signup copy (use exactly):
    Heading:        Start finding better scholarship matches.
    Subtitle:       Create your Easy Scholarships account and build a smarter path to applications.
    Name label:     Full name
    Email label:    Email
    Password label: Password
    Confirm label:  Confirm password
    Button:         Create account
    Google button:  Continue with Google
    Secondary link: Already have an account? Sign in.
    Email-sent heading:    Check your email.
    Email-sent body:       We sent a confirmation link to {email}. Click it to activate your account.
    Email-sent secondary:  Wrong email? Sign up again.
  </SIGNUP_PAGE_REQUIREMENTS>


  <FORGOT_PASSWORD_REQUIREMENTS>
    Build /forgot-password.

    Required fields:
    - Email

    Required features:
    - valid-email validation
    - submit triggers supabase.auth.resetPasswordForEmail
    - emailRedirectTo set to /reset-password (create only if needed)
    - loading state
    - success state — "Check your email for a reset link."
    - safe error state that does NOT reveal whether the email is registered
    - return-to-login link

    Copy:
    Heading:    Forgot your password?
    Subtitle:   Enter your email and we'll send a reset link.
    Email label:Email
    Button:     Send reset link
    Success:    If an account exists for {email}, we sent a reset link.
    Back link:  Back to sign in.

    If Supabase requires a callback redirect URL:
    - document the required redirect URL in /docs/auth-supabase-config.md
    - tell the user to add the URL under Supabase Auth → URL Configuration
  </FORGOT_PASSWORD_REQUIREMENTS>


  <EMAIL_CONFIRMATION_FLOW>
    Handle both Supabase configurations:
    A) email confirmation ON (default)
    B) email confirmation OFF (for dev)

    Detection:
    - if signUp returns no session, treat as case A
    - if signUp returns a session, treat as case B

    Case A:
    - show "Check your email" view
    - never auto-redirect to /dashboard
    - poll session every 4 seconds for up to 10 minutes to auto-advance
      when the user clicks the email link in another tab
    - or just rely on the link auto-signing them in

    Case B:
    - immediately redirect to /dashboard
    - if /dashboard does not exist, redirect to / and surface a toast

    Document both flows in /docs/auth-supabase-config.md.
    Explain how to flip the toggle in Supabase dashboard.
  </EMAIL_CONFIRMATION_FLOW>


  <AUTH_PROVIDER_RULES>
    The auth provider is Supabase.

    Use the existing client at src/lib/supabase.ts.
    Do not create a duplicate client.
    Do not import @supabase/ssr — this is a Vite SPA, not Next.js.

    Auth APIs to use:
    - supabase.auth.signInWithPassword for login
    - supabase.auth.signUp for sign-up (pass options.data.full_name)
    - supabase.auth.signInWithOAuth { provider: "google" } for Google
    - supabase.auth.resetPasswordForEmail for forgot password
    - supabase.auth.onAuthStateChange for context subscription
    - supabase.auth.getSession for initial load
    - supabase.auth.signOut for logout

    Key model:
    - the client uses the publishable key only (sb_publishable_...)
    - never reference the secret key (sb_secret_...) anywhere in src/
    - never reference the legacy service_role JWT
    - environment variable is VITE_SUPABASE_PUBLISHABLE_KEY

    OAuth setup the user must do (document in /docs/auth-supabase-config.md):
    1. Google Cloud Console → APIs & Services → Credentials → OAuth 2.0 client ID
    2. Authorized redirect URI: https://<project-id>.supabase.co/auth/v1/callback
    3. Authorized JavaScript origins: http://localhost:5173 and production domain
    4. Copy Client ID + Client Secret into Supabase → Auth → Providers → Google
    5. Toggle Google provider ON
    6. Save
  </AUTH_PROVIDER_RULES>


  <ERROR_HANDLING_RULES>
    Every Supabase call must be wrapped in handling that:
    - never logs the password
    - never logs the email at warn/error level
    - parses error.code and error.message into a human-readable string
    - shows a user-safe message in the global error banner
    - sends a non-PII telemetry event (later, when analytics exists)

    Build a helper:
    src/lib/auth-errors.ts
    export function humanizeAuthError(error: AuthError | null | undefined): string

    Map these Supabase error codes / message fragments to human copy:
    - "Invalid login credentials" → see LOGIN_PAGE_REQUIREMENTS
    - "Email not confirmed" → see LOGIN_PAGE_REQUIREMENTS
    - "User already registered" → "An account with this email already exists. Try signing in."
    - "Password should be at least" → "Pick a password at least 6 characters long."
    - "Email rate limit exceeded" → "Too many sign-up attempts. Try again in a few minutes."
    - "Signups not allowed" → "New signups are temporarily paused."
    - generic → "Something went wrong. Try again."

    Never expose stack traces.
    Never expose raw Supabase error.message if it leaks internals.
  </ERROR_HANDLING_RULES>


  <VALIDATION_RULES>
    Use zod schemas for every form.

    Login schema:
    - email: z.string().email("Enter a valid email")
    - password: z.string().min(6, "At least 6 characters")

    Signup schema:
    - fullName: z.string().min(1, "Enter your full name").max(80, "That's too long")
    - email: z.string().email("Enter a valid email")
    - password: z.string()
        .min(8, "At least 8 characters")
        .regex(/[a-z]/, "Add a lowercase letter")
        .regex(/[A-Z]/, "Add an uppercase letter")
        .regex(/[0-9]/, "Add a number")
    - confirmPassword: z.string()
    - refine: password === confirmPassword → "Passwords don't match"

    Forgot schema:
    - email: z.string().email("Enter a valid email")

    Use zodResolver from @hookform/resolvers/zod.
    Surface field errors next to inputs.
    Surface form-level errors in the global banner.
    Never show two error sources for the same field at once.
  </VALIDATION_RULES>


  <SECURITY_RULES>
    Hard security rules:
    - Never hardcode passwords.
    - Never log passwords.
    - Never store passwords manually.
    - Never expose service role keys.
    - Never paste real secrets into docs.
    - Never commit .env files.
    - Never print private credentials.
    - Never use secret backend keys in frontend code.
    - Never make auth depend on plaintext localStorage credentials.
    - Never bypass auth rules to fake success.
    - Never create fake security claims.
    - Never silently swallow auth errors.
    - Never persist OAuth refresh tokens in app code.
    - Never set cookies with the secret key.

    If sensitive keys are found in the repo:
    - do not repeat them in chat
    - flag to the user
    - recommend immediate rotation in Supabase
    - propose moving the value to .env.local
    - propose adding the file to .gitignore
    - propose a git history scrub only if the user asks

    If the user pastes a secret in chat:
    - do not save it to any file
    - do not echo it back
    - warn once
    - recommend rotation
    - continue work with the publishable key only

    All auth network calls go through HTTPS via the Supabase client.
    All form posts are SameSite-safe by default (Supabase handles cookies).
  </SECURITY_RULES>


  <ACCESSIBILITY_RULES>
    Meet WCAG 2.2 AA at minimum.

    Required:
    - color contrast 4.5:1 for body text, 3:1 for large text and UI components
    - visible focus ring on all interactive elements (gold ring acceptable)
    - tab order matches visual reading order
    - all inputs have a <label> with htmlFor
    - all icons used as buttons have aria-label
    - show/hide password button has aria-pressed
    - error messages associated via aria-describedby
    - global errors live in role="alert" with aria-live="polite"
    - prefers-reduced-motion disables transforms and parallax
    - no keyboard trap inside modals
    - skip-to-content link if the page header has nav (not required for auth)
    - the 3D scene has role="img" with aria-label describing what's shown
    - autoplay video is muted and has aria-hidden="true"

    Forbidden:
    - placeholder-as-label
    - tab indexes other than 0 and -1
    - removing outline without replacing it
    - color-only error indication
    - decorative animation that flashes faster than 3Hz
  </ACCESSIBILITY_RULES>


  <PERFORMANCE_RULES>
    Targets:
    - Largest Contentful Paint under 2.0s on a throttled Fast 3G
    - First Input Delay under 100ms
    - Cumulative Layout Shift under 0.05
    - Total Blocking Time under 200ms
    - Initial JS bundle for /login under 250KB gzipped
    - Initial CSS for /login under 30KB gzipped

    Tactics:
    - lazy-load the 3D scene
    - lazy-load the visual-stage video
    - preload only the body font weight
    - subset Google fonts to latin
    - use modern image formats (webp / avif) for raster assets
    - inline critical CSS via Vite
    - tree-shake icon imports (lucide-react named imports only)
    - avoid heavy date libs on auth pages
    - avoid analytics SDKs on auth pages until after first interaction

    Forbidden:
    - shipping moment.js
    - shipping lodash as a whole module
    - shipping a 5MB hero image
    - blocking the main thread for more than 50ms during animations
  </PERFORMANCE_RULES>


  <RESPONSIVE_RULES>
    Breakpoints (Tailwind v4 defaults are fine):
    - sm: 640px
    - md: 768px
    - lg: 1024px
    - xl: 1280px
    - 2xl: 1536px

    Audit each breakpoint manually via Playwright at 320, 375, 414, 768, 1024, 1280, 1920.

    At every breakpoint:
    - no horizontal scroll
    - no text below 14px (other than tiny helper text at 12px)
    - tap targets ≥ 44x44
    - line length under 75 characters
    - paragraph max-width controlled
    - the form is always reachable without scroll past the fold on common laptops

    Mobile-first CSS. Use min-width queries via Tailwind sm:/md:/lg:.
  </RESPONSIVE_RULES>


  <CODE_QUALITY_RULES>
    TypeScript strict mode is on.
    verbatimModuleSyntax is on — every type-only import must use `import type`.
    erasableSyntaxOnly is on — no enums, no namespaces, no parameter properties.
    noUnusedLocals and noUnusedParameters are on — prefix unused with _.

    Style:
    - prefer named exports for components except the default page export per file
    - one component per file under /components/auth/
    - one hook per file under /hooks/
    - one Zod schema per form, colocated with the form
    - colocate small subcomponents inside the page file if used only there
    - extract shared subcomponents to /components/auth/

    Forbidden:
    - any
    - @ts-ignore (use @ts-expect-error with a comment if truly needed)
    - non-null assertion ! except on known-safe DOM refs
    - default exports from /components/auth/ (use named)
    - inline styles except for dynamic values that cannot be expressed in classes

    Required:
    - JSDoc on every exported hook and helper
    - inline `// docs: <url>` comment when implementing against a specific doc page
    - alphabetized import groups: external → @/lib → @/components → relative
  </CODE_QUALITY_RULES>


  <FILE_NAMING_RULES>
    Components: PascalCase, e.g. AuthShell.tsx, PasswordField.tsx
    Hooks:      camelCase starting with use, e.g. usePasswordStrength.ts
    Helpers:    kebab-case, e.g. auth-errors.ts, parse-supabase-error.ts
    Schemas:    colocated as login-schema.ts inside the page folder
    Pages:      PascalCase matching route name, e.g. Login.tsx, Signup.tsx
    Tests:      <Name>.test.tsx, colocated
    Stories:    skip Storybook for this scope

    Routes:
    - /login
    - /signup
    - /forgot-password
    - /reset-password (only if needed)
    - /dashboard (existing)
  </FILE_NAMING_RULES>


  <FOLDER_STRUCTURE_RULES>
    Final structure for this scope:

    src/
      pages/
        Login.tsx
        Signup.tsx
        ForgotPassword.tsx
        ResetPassword.tsx          (only if Supabase callback used)
        Dashboard.tsx              (existing, minimal)
      components/
        auth/
          AuthShell.tsx            (split-screen layout)
          AuthFormCard.tsx         (glass card)
          AuthHeader.tsx           (wordmark + tagline)
          AuthInput.tsx            (premium input)
          PasswordField.tsx        (input + show/hide + strength)
          AuthButton.tsx           (gold primary CTA)
          AuthDivider.tsx          ("or continue with")
          GoogleButton.tsx         (provider OAuth button)
          AuthError.tsx            (global error banner)
          AuthVisualStage.tsx      (right-side stage)
          MatchCardFloat.tsx       (one floating card)
          GoldParticles.tsx        (CSS or canvas particles)
          ScholarshipCore3D.tsx    (lazy-loaded R3F scene)
          ScholarshipCore3D.placeholder.tsx
        shared/
          ProtectedRoute.tsx       (existing)
      contexts/
        AuthContext.tsx            (existing, extended)
      hooks/
        usePasswordStrength.ts
        useReducedMotionSafe.ts
        useAuthRedirect.ts
      lib/
        supabase.ts                (existing)
        auth-errors.ts             (new)
      styles/
        auth-tokens.css            (new — dark/gold tokens)
      types/
        auth.ts                    (form types)
    public/
      auth-assets/
        ...per ASSET_FOLDER_SYSTEM
    docs/
      auth-assets-needed.md
      auth-design-research.md
      auth-supabase-config.md
      auth-audit-pass-6.md
      screenshots/
        pass-1/
        pass-2/
        ...
  </FOLDER_STRUCTURE_RULES>


  <COMPONENT_ARCHITECTURE_RULES>
    Composition over inheritance. Composition over prop-drilling.

    AuthShell is the layout primitive:
    - props: { children: ReactNode; stage?: ReactNode }
    - renders 2-column on desktop, stacked on mobile
    - mounts the visual stage with Suspense + placeholder

    AuthFormCard wraps the form column:
    - props: { title; subtitle; children; footer? }
    - handles the eyebrow/heading/subtitle spacing
    - supports a slot for AuthError above the form

    AuthInput is the only input primitive used:
    - props extend InputHTMLAttributes
    - shows label, helper, error, optional adornment
    - manages focus ring + transitions internally

    PasswordField composes AuthInput + show/hide + strength meter.

    AuthButton has three sizes (sm/md/lg) and two variants (primary gold, ghost outline).
    GoogleButton is a separate component with the official Google logo treatment.

    Pages are thin. Logic lives in hooks. Styling lives in primitives.
  </COMPONENT_ARCHITECTURE_RULES>


  <STATE_MANAGEMENT_RULES>
    Use the existing AuthContext for global auth state.
    Extend it with:
    - signInWithGoogle()
    - resetPassword(email)
    - signOutEverywhere() (optional)

    Form state lives in react-hook-form, never duplicated in useState.
    Loading and error UI state lives in the page component, not in the context.

    Do not introduce Zustand, Redux, Jotai, or any other store for this scope.
  </STATE_MANAGEMENT_RULES>


  <ROUTING_RULES>
    Use the existing BrowserRouter pattern.

    Routes:
    - /             Landing (existing, leave alone)
    - /login        Login (new, dark/gold)
    - /signup       Signup (new, dark/gold)
    - /forgot-password ForgotPassword (new)
    - /reset-password  ResetPassword (only if needed for Supabase callback)
    - /dashboard    Dashboard (existing, protected)
    - * NotFound (existing or create minimal)

    Route transitions:
    - wrap <Routes> in <AnimatePresence mode="wait">
    - key the wrapper by location.pathname
    - apply page-level enter/exit motion via framer-motion

    After login:
    - read location.state.from if present
    - else default to /dashboard

    Protected routes:
    - use existing ProtectedRoute
    - pass children, not element prop
  </ROUTING_RULES>


  <TESTING_RULES>
    Manual test plan, executed after every pass:
    1. /signup → fill valid form → expect dashboard or check-email
    2. /signup → mismatched passwords → expect field error
    3. /signup → existing email → expect humanized error
    4. /signup → click Google → OAuth flow opens (real, not mock)
    5. /login → unknown email → expect humanized error
    6. /login → correct credentials → expect dashboard
    7. /login → empty form submit → expect field errors
    8. /login → Enter key submits
    9. /forgot-password → valid email → expect success state
    10. /forgot-password → invalid email → expect field error
    11. /dashboard while logged out → expect redirect to /login
    12. tab through every page → focus visible everywhere
    13. resize to 320px → no horizontal scroll
    14. enable prefers-reduced-motion → animations honor it

    Automated:
    - run `npm run build` after every pass; must compile clean
    - run `npm run lint` after every pass; must be zero errors
    - run Playwright screenshot pass after every visual change

    Do not declare a pass complete without all 14 manual checks passing
    on the touched pages.
  </TESTING_RULES>


  <COMMIT_AND_GIT_RULES>
    Use the commit-commands skill for committing.

    Commit after every pass.
    Commit messages follow Conventional Commits:
    - feat(auth): ...
    - fix(auth): ...
    - chore(auth): ...
    - refactor(auth): ...
    - docs(auth): ...
    - style(auth): ...
    - test(auth): ...
    - perf(auth): ...

    Examples:
    - feat(auth): premium dark login + signup primitives
    - feat(auth): lazy-loaded 3D scholarship core scene
    - feat(auth): forgot-password flow + supabase reset
    - docs(auth): asset spec + Nano Banana Pro prompts
    - fix(auth): humanize supabase invalid-credentials error
    - perf(auth): subset Geist to latin and preload

    Push to origin after every pass.
    Never force-push to main.
    Never amend a pushed commit.
    Never skip git hooks.
  </COMMIT_AND_GIT_RULES>


  <DOCUMENTATION_RULES>
    Every pass adds to /docs/.

    Required docs:
    - /docs/auth-assets-needed.md         (assets + image prompts)
    - /docs/auth-design-research.md       (findings from firecrawl research)
    - /docs/auth-supabase-config.md       (toggle settings, OAuth setup, redirect URLs)
    - /docs/auth-audit-pass-6.md          (Lighthouse + a11y results)
    - /docs/auth-handoff.md               (final summary)

    Each doc has:
    - a short purpose paragraph at the top
    - a table of contents if over 200 lines
    - dated entries when appended

    Inline comments in code:
    - explain WHY, not WHAT
    - link to relevant docs via `// docs: <url>` where applicable
    - mark TODOs with TODO(auth): description
  </DOCUMENTATION_RULES>


  <PROGRESS_REPORTING_RULES>
    After each pass, post a short summary in chat:
    - what changed (bulleted)
    - files added / replaced / updated / deleted
    - screenshots (links to /docs/screenshots/pass-N/)
    - any blockers
    - what the next pass will do
    - one question for the user if input is needed

    Keep these summaries scannable. Under 300 words.

    Do not summarize at every micro-step. Summarize at pass boundaries only.
  </PROGRESS_REPORTING_RULES>


  <PASS_STRUCTURE_RULES>
    Build in six passes, in this order.

    Pass 1 — Foundation
    - install three / r3f / drei / @types/three
    - create /public/auth-assets/ folder with .gitkeep
    - write /docs/auth-assets-needed.md with Nano Banana Pro prompts
    - rewrite src/index.css (or src/styles/auth-tokens.css) with new dark/gold tokens
    - rename app from "Easy Scholarship" to "Easy Scholarships" everywhere
    - commit, push, screenshot

    Pass 2 — Primitives
    - build AuthShell, AuthFormCard, AuthHeader, AuthInput, PasswordField,
      AuthButton, AuthDivider, GoogleButton, AuthError
    - no pages yet
    - storybook-free, demoed via temporary /__auth-preview route, deleted later
    - commit, push, screenshot

    Pass 3 — Visual stage
    - build AuthVisualStage with MatchCardFloat + GoldParticles
    - build ScholarshipCore3D.placeholder.tsx (CSS-only fallback)
    - build ScholarshipCore3D.tsx (R3F scene, lazy)
    - integrate into AuthShell
    - commit, push, screenshot

    Pass 4 — Rebuild pages
    - replace Login.tsx with the new design using primitives + stage
    - replace Signup.tsx with the new design + strength meter + check-email state
    - wire AuthContext extensions (Google, reset)
    - wire humanizeAuthError
    - commit, push, screenshot
    - request feature-dev:code-reviewer subagent review

    Pass 5 — Forgot + reset + email-sent + transitions
    - build ForgotPassword.tsx
    - build ResetPassword.tsx if Supabase callback URL is configured
    - wire AnimatePresence route transitions
    - add reduced-motion support
    - commit, push, screenshot

    Pass 6 — Polish + audit + handoff
    - run Lighthouse via chrome-devtools-mcp
    - run a11y audit
    - fix any reds
    - finalize /docs/auth-handoff.md
    - request pr-review-toolkit:code-reviewer + silent-failure-hunter subagent reviews
    - commit, push, screenshot, ship
  </PASS_STRUCTURE_RULES>


  <HANDOFF_PROTOCOL>
    The final deliverable is documented in /docs/auth-handoff.md and must include:
    - one-paragraph summary of what shipped
    - the list of new routes
    - the list of new components
    - the list of new hooks
    - the list of new docs
    - the list of new env vars
    - the list of Supabase dashboard settings the user must verify
    - the list of Google Cloud Console settings the user must verify
    - the list of remaining TODOs
    - links to all pass screenshots
    - links to Lighthouse and a11y reports
    - a "how to disable 3D / video" section
    - a "how to swap the logo" section
    - a "how to change the gold accent" section
  </HANDOFF_PROTOCOL>


  <ESCALATION_PROTOCOL>
    Stop and ask the user when:
    - a security tradeoff needs a human decision
    - an asset is missing and a placeholder would look amateurish
    - a Supabase setting requires their dashboard access
    - a Google Cloud setting requires their OAuth credentials
    - a paid service or API key is needed
    - the design conflicts with a constraint the user gave earlier
    - a library install will add over 500KB
    - data loss is possible

    Do not stop and ask when:
    - the answer is obvious from the prompt
    - the change is reversible in one commit
    - the choice is purely stylistic within the approved palette
  </ESCALATION_PROTOCOL>


  <SCOPE_CONTROL_RULES>
    If the user adds scope mid-build, do not silently absorb it.

    Respond with:
    - "Adding X expands scope. It impacts passes Y and Z. Do you want me to
      pause auth, finish X, then resume, or queue X for after the auth ship?"

    If a scope addition contradicts <NON_NEGOTIABLE_SCOPE>:
    - quote the contradicted line back
    - confirm before changing direction
  </SCOPE_CONTROL_RULES>


  <FAILURE_RECOVERY_RULES>
    If a pass fails (build broken, test broken, design rejected):
    - do not delete the broken work
    - create a branch named recovery/auth-passN
    - revert the failing pass on main
    - move broken code into the recovery branch
    - tell the user clearly what failed and the next attempt plan
    - never silently retry the same approach more than once
  </FAILURE_RECOVERY_RULES>


  <FINAL_DELIVERABLE_CHECKLIST>
    Before declaring the auth experience done, verify every box:

    [ ] /login renders premium dark / gold
    [ ] /signup renders premium dark / gold
    [ ] /forgot-password renders premium dark / gold
    [ ] check-your-email state renders premium dark / gold
    [ ] Google OAuth button works end-to-end
    [ ] email + password signup works end-to-end (with email confirm either state)
    [ ] email + password login works end-to-end
    [ ] forgot-password sends a reset email
    [ ] all forms have client validation + zod
    [ ] all Supabase errors are humanized
    [ ] focus ring visible everywhere
    [ ] tab order correct everywhere
    [ ] aria-live errors announced
    [ ] prefers-reduced-motion respected
    [ ] mobile 320px to 414px: no horizontal scroll, premium feel
    [ ] desktop 1280px: split-screen, visual stage active
    [ ] 3D scene lazy-loaded, falls back to placeholder
    [ ] video lazy-loaded, falls back to poster
    [ ] no secret key referenced anywhere in src/
    [ ] no console errors on production build
    [ ] Lighthouse Performance ≥ 90 on /login
    [ ] Lighthouse Accessibility ≥ 95 on /login
    [ ] all six passes committed and pushed
    [ ] /docs/auth-handoff.md complete
    [ ] subagent code review responded to
    [ ] silent-failure-hunter responded to
    [ ] user has visually approved each pass

    If any box is unchecked: not done.
  </FINAL_DELIVERABLE_CHECKLIST>


  <SESSION_RESUME_RULES>
    If the session resets mid-build:
    - read memory MCP for the latest persisted decisions
    - run `git log --oneline -20` to see the last shipped pass
    - read /docs/auth-handoff.md if it exists
    - read /docs/screenshots/ to see what visual state was last reached
    - confirm with the user which pass to resume from
    - never silently restart from Pass 1
  </SESSION_RESUME_RULES>


  <CLOSING_INSTRUCTION>
    Follow every section above in order.
    Do not skip the audit.
    Do not skip the research.
    Do not skip the asset request.
    Do not skip the documentation.
    Do not skip the screenshots.
    Do not skip the subagent reviews.
    Do not skip the final checklist.

    Ship a finished mini-product, not a starter template.

    Begin with the audit response now.
  </CLOSING_INSTRUCTION>

</EASY_SCHOLARSHIPS_AUTH_MASTER_PROMPT>