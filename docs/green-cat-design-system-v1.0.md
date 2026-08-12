# Green Cat Design System v1.0

Status: active foundation  
Scope: the bilingual Green Cat studio website  
Visual direction: experimental minimalism, strong typography, controlled motion, and visible frontend craftsmanship

This document is the source of truth for every section added after v1.0. It defines the available visual decisions and the shared component API. New sections must compose these tokens and primitives before introducing local styles. A new token or variant is added here only when an existing system choice cannot express a real product need.

## 1. Brand tokens

Green Cat is an independent Design & Development Studio founded by Dmitry and evolving into a creative team. The system expresses the connection between UX/UI design and frontend execution.

The brand is built from four persistent signals:

- Paper: a warm, editorial base instead of sterile white.
- Ink: near-black typography and structural contrast.
- Signal green: a precise accent for action, state, and connection.
- Mono metadata: technical labels that reveal the development layer.

The wordmark stays typographic. Its weight, tracking, and signal-dot size are defined by `--brand-wordmark-*` and `--brand-signal-size`. Signal green is intentionally scarce: use it for the primary action, active state, or one meaningful visual connection—not as general decoration.

Source: `src/styles/tokens.css`.

## 2. Color system

### Primitive palette

| Token | Value | Role |
| --- | --- | --- |
| `--color-paper` | `#f2f0e8` | Warm canvas |
| `--color-ink` | `#101310` | Primary text and inverse surface |
| `--color-signal` | `#a7ff3f` | Primary accent |
| `--color-deep-green` | `#176b3a` | Focus, action support, success |
| `--color-ink-soft` | `#282d27` | Dark media placeholder |
| `--color-muted` | `#737970` | Secondary text |
| `--color-border` | `#cdd1c7` | Dividers and quiet outlines |
| `--color-error` | `#b42318` | Error feedback only |

Components consume semantic aliases such as `--color-background`, `--color-text`, `--color-accent`, and `--color-divider`. Primitive values must not be copied into section CSS.

Rules:

- Default canvas is paper with ink text.
- Inverse compositions use ink with paper text.
- Signal green must retain ink foreground for readable contrast.
- Deep green is the standard focus outline.
- Meaning must never rely on color alone.

## 3. Typography scale

Onest Variable carries display, heading, and body typography. IBM Plex Mono is reserved for metadata, navigation cues, tags, indices, and technical annotations.

| Utility | Token | Intended use |
| --- | --- | --- |
| `.type-display` | `--text-display` | One dominant editorial statement |
| `.type-h1` | `--text-h1` | Page title |
| `.type-h2` | `--text-h2` | Major section title |
| `.type-h3` | `--text-h3` | Card or subsection title |
| `.type-lead` | `--text-lead` | Introductory argument |
| `.type-body` | `--text-body` | Standard reading text |
| `.type-small` | `--text-small` | Supporting copy |
| `.type-meta` | `--text-meta` | Labels and metadata |

Display and heading sizes are fluid through `clamp()`. Display type uses tight leading and tracking; body type uses a readable `1.55` line height and a `44rem` maximum measure. Do not simulate hierarchy with arbitrary font sizes or all caps. Uppercase is reserved for mono metadata.

## 4. Spacing system

Spacing uses a four-pixel base and the tokens `--space-0`, `--space-1`, `--space-2`, `--space-3`, `--space-4`, `--space-6`, `--space-8`, `--space-12`, `--space-16`, `--space-20`, `--space-24`, `--space-32`, `--space-40`, and `--space-48`.

Use the scale by relationship:

- `1–3`: inline detail, icon separation, tag interiors.
- `4–8`: component padding and related content.
- `12–20`: distinct groups inside a section.
- `24–48`: section rhythm and major editorial separation.
- `--section-space`: responsive vertical section spacing.

Avoid one-off pixel spacing. A local exception requires a clear optical reason and a comment in the section stylesheet.

Shared rhythm utilities:

- `.spacing-inline-page`: the standard responsive page gutter.
- `.spacing-section`: equal section padding at the block start and end.
- `.spacing-section-heading`: the standard gap after a section introduction.
- `.spacing-section-item`: the standard trailing rhythm for editorial items.

Header, Hero, and Selected Work use these shared rules. Hero may define a token-based top offset because it must clear the absolute Header; its internal mobile gaps still resolve to the spacing scale.

## 5. Grid system

`Container` and `Grid` are the default layout primitives.

- Content maximum: `100rem`.
- Reading maximum: `44rem`.
- Narrow composition maximum: `64rem`.
- Page gutter: fluid from `1.25rem` to `6rem`.
- Grid gap: fluid from `1rem` to `1.5rem`.
- Mobile: 4 columns below `48rem`.
- Tablet: 8 columns from `48rem` to below `64rem`.
- Desktop: 12 columns from `64rem`.

The grid creates alignment, not uniformity. Editorial asymmetry is encouraged by varied spans and offsets, while all edges must resolve to the shared columns or container gutter.

## 6. Button components

Use `Button` for actions and `ButtonLink` for navigation. Both expose:

- `variant`: `primary`, `secondary`, or `text`.
- `size`: `sm`, `md`, or `lg`.
- `arrow`: controlled northeast directional cue.
- `fullWidth`: full width at every breakpoint.
- `mobileFullWidth`: full width below `48rem`.

Primary is reserved for the main conversion: Start a project. Secondary supports lower-priority actions. Text is for quiet navigation. Buttons retain visible keyboard focus, semantic disabled state, and a minimum usable control height.

Example:

```tsx
<ButtonLink arrow mobileFullWidth href="#contact">
  Start a project
</ButtonLink>
```

## 7. Tag components

`Tag` labels categories, disciplines, and states. Variants are `neutral`, `accent`, and `inverse`.

- Neutral is the default for case-study disciplines.
- Accent highlights one current or featured state.
- Inverse is used only on an ink surface.
- Tags are descriptive, not interactive. Use a button or link if the element filters or navigates.
- Keep labels short and do not add decorative icons by default.

## 8. Card components

`Card` is an editorial grouping primitive with `article` semantics by default. Set `as="div"` only when the content is not independently meaningful.

Variants:

- `editorial`: a top rule and transparent surface; default for projects and lists.
- `surface`: outlined paper surface.
- `inverse`: outlined ink surface with paper text.

Padding options are `none`, `sm`, `md`, and `lg`. Cards must not become a generic rounded-container pattern. Prefer typography, rules, whitespace, and alignment over shadows or ornamental surfaces.

## 9. Media components

`Media` provides a semantic `figure`, controlled crop, and optional caption. Ratios are:

- `landscape`: `16 / 10` for website and interface views.
- `editorial`: `4 / 5` for vertical compositions.
- `square`: `1 / 1` for compact studies or system details.

Images and video use `object-fit: cover` by default. Product-interface imagery may override this to `contain` when cropping would remove meaningful UI. Always provide useful alternative text for informative images; use an empty alt only for genuinely decorative imagery. Video requires a poster, controls where needed, muted playback for ambient loops, and no essential information available only through motion.

`.project-preview-frame` is the shared portfolio-preview container. It fixes the landscape ratio, tokenized padding, background, overflow, and border treatment for every desktop project visual. Single images and 2×2 galleries must compose inside this frame with `object-fit: contain`. On mobile, galleries may release the fixed ratio to form a vertical stack while retaining the same padding, border, and background treatment.

## 10. Motion rules

Motion communicates relationship, hierarchy, and state. It does not decorate empty space.

Timing tokens:

- `--duration-micro` (`180ms`): hover, focus, and compact state change.
- `--duration-ui` (`360ms`): menus and component transitions.
- `--duration-reveal` (`650ms`): one controlled editorial reveal.
- `--ease-standard`: interaction easing.
- `--ease-enter`: entrance easing.

Rules:

- Prefer opacity and transform; avoid layout-thrashing animation.
- One dominant motion idea per section.
- Do not delay access to content for animation.
- Hover-only behavior must not carry essential meaning.
- Under `prefers-reduced-motion: reduce`, transitions and animation resolve almost instantly and directional transforms are removed.

## 11. Responsive rules

Responsive design is content-led, with system breakpoints at `48rem` and `64rem`.

- Mobile is a dedicated composition, not a scaled desktop layout.
- Mobile begins with a 4-column grid, full-width primary CTA where appropriate, deliberate headline line breaks, and compact vertical rhythm.
- Tablet uses 8 columns and may preserve editorial offsets when content remains readable.
- Desktop uses 12 columns and can introduce stronger negative space and asymmetry.
- Touch targets should be at least `44px` high or have an equivalent hit area.
- Components must work from `320px` without horizontal overflow.
- Primary mobile review widths are `375px`, `390px`, and `430px`.
- Type must stay fluid; use a breakpoint only when composition changes, not to micromanage font sizes.

## Component API and file map

| Responsibility | Source |
| --- | --- |
| Primitive and semantic tokens | `src/styles/tokens.css` |
| Shared utility and component styles | `src/styles/design-system.css` |
| Button and ButtonLink | `src/components/ui/button.tsx` |
| Tag | `src/components/ui/tag.tsx` |
| Card | `src/components/ui/card.tsx` |
| Media | `src/components/ui/media.tsx` |
| Container and Grid | `src/components/ui/layout.tsx` |
| Public exports | `src/components/ui/index.ts` |

## Adoption and governance

For every future section:

1. Start with `Container` and `Grid` for macro layout.
2. Use the documented typography classes and token scale.
3. Use `ButtonLink`, `Button`, `Tag`, `Card`, and `Media` instead of recreating equivalents.
4. Keep section CSS responsible only for section-specific composition and art direction.
5. Add a system token or variant only after confirming no existing choice expresses the requirement.
6. Verify keyboard access, focus visibility, reduced motion, and responsive behavior at the three mobile review widths.

Versioning follows semantic intent: patch for documentation or nonvisual fixes, minor for backward-compatible tokens and variants, major for visual language or component API changes.
