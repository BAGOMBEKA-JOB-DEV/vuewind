# Vuewind redesign decisions

Research reviewed on October 19, 2026. The outcome is a development foundation, not a claim of feature parity or accessibility certification.

| Reference                                                                          | Observation                                                                        | Vuewind decision                                                                                     |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [shadcn-vue introduction](https://www.shadcn-vue.com/docs/introduction)            | Predictable composition and readable source help teams adapt components.           | Use small Vue SFCs, standard slots, named exports, and copyable runnable examples.                   |
| [Nuxt UI introduction](https://ui.nuxt.com/docs/getting-started/)                  | Documentation connects component discovery, customization, and practical examples. | Create a searchable catalog with category filters, API tables, live previews, and onboarding guides. |
| [PrimeVue styled mode](https://primevue.dev/theming/styled/)                       | Semantic tokens separate visual intent from primitive colors.                      | Share surface, text, accent, border, and focus decisions through CSS custom properties.              |
| [Reka UI accessibility](https://reka-ui.com/docs/overview/accessibility)           | Focus and keyboard behavior belong in the component contract.                      | Prefer native controls and document interactions and limits.                                         |
| [WAI modal dialog pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) | Modals require labeling, contained focus, an exit, and focus restoration.          | Use showModal, visible close buttons, native Escape handling, and focus tests.                       |

## Visual direction

Warm neutral surfaces, a restrained emerald accent, local Satoshi typography, a persistent documentation sidebar, and a quiet page outline. Component previews demonstrate real interactions. Desktop, compact, and mobile layouts share the same content hierarchy.

## Scope

- 60 new source components with separate examples and API records.
- Separate documentation and library builds.
- Existing dashboard files retained but excluded from the library entry.
- No fabricated npm installation, user statistics, authentication, or certification.
- Focused commits for implementations, examples, documentation, infrastructure, and verified fixes.

## Competitive follow-up

The foundation still needs wider assistive-technology testing, formal versioned package releases, richer type declarations, RTL verification, localization, and maintenance across Vue versions before it should be represented as a mature replacement for established libraries.
