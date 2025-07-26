# Digital Advisory Board Chat App

Build custom advisory panels by selecting from detailed persona archetypes and get diverse perspectives on business challenges.

**Experience Qualities**: 
1. **Professional** - Interface should feel like a high-end consulting platform with credible expertise
2. **Interactive** - Engaging persona selection and dynamic chat debates feel alive and responsive  
3. **Insightful** - Each advisor provides genuinely valuable, archetype-specific perspectives

**Complexity Level**: Complex Application (advanced functionality, accounts)
- Multi-layered persona system with 60+ detailed archetypes requiring sophisticated prompt engineering and state management across conversation threads

## Essential Features

**Persona Library Browser**
- Functionality: Browse, search, and filter 60+ detailed persona archetypes across categories
- Purpose: Help users discover the right mix of advisors for their specific challenge
- Trigger: User visits main page or clicks "Build Advisory Board"
- Progression: Browse categories → Filter by role/expertise → Preview persona details → Add to board
- Success criteria: Users can quickly find and understand relevant personas for their needs

**Advisory Board Builder**
- Functionality: Drag-and-drop interface to select up to 12 personas with visual board preview
- Purpose: Create custom advisory panels tailored to specific business challenges
- Trigger: User drags persona from library to advisory board section
- Progression: Select personas → Preview board composition → Save configuration → Start chat
- Success criteria: Intuitive board building with clear visual feedback and persona management

**Multi-Persona Chat Interface**
- Functionality: Submit questions to advisory board and receive unique responses from each selected persona
- Purpose: Get diverse, archetype-specific perspectives on business decisions
- Trigger: User submits question to assembled advisory board
- Progression: Type question → Submit to board → Individual responses → Debate/follow-up → Export insights
- Success criteria: Each persona maintains consistent voice and provides valuable, distinct perspectives

**Conversation Threading & Debates**
- Functionality: Personas respond to user questions and can debate each other's perspectives
- Purpose: Surface conflicts and consensus between different advisory viewpoints
- Trigger: After initial responses, system prompts inter-persona discussion
- Progression: Initial responses → Identify disagreements → Facilitate debate → Show consensus/conflicts
- Success criteria: Natural conversation flow with realistic persona interactions and valuable insights

**Advisory Board Templates**
- Functionality: Pre-configured advisory boards for common scenarios (startup, enterprise, product launch)
- Purpose: Provide quick-start options for users who want expert-curated advisory combinations
- Trigger: User selects "Quick Templates" or specific scenario
- Progression: Browse templates → Preview advisory composition → Customize if needed → Start chat
- Success criteria: Templates provide immediately useful advisory combinations for common business situations

## Edge Case Handling

- **Empty Advisory Board**: Guide users to select at least 3 personas before starting chat
- **API Failures**: Graceful degradation with retry options and offline persona browsing
- **Inconsistent Persona Responses**: Validation prompts to ensure responses match archetype characteristics
- **Long Conversation Threads**: Pagination and conversation summarization for complex debates
- **Unsupported Business Contexts**: Graceful handling when personas lack relevant expertise

## Design Direction

The design should feel like a premium consulting platform - professional, trustworthy, and sophisticated. Modern glass-morphism aesthetic with subtle depth and premium typography conveys expertise and credibility while remaining approachable.

## Color Selection

Complementary (opposite colors) - Deep professional blue paired with warm gold accents to create trustworthy authority with approachable warmth.

- **Primary Color**: Deep Professional Blue (oklch(0.25 0.15 250)) - Conveys trust, expertise, and corporate professionalism
- **Secondary Colors**: Slate grays (oklch(0.65 0.02 250)) for supporting UI elements and neutral backgrounds
- **Accent Color**: Warm Gold (oklch(0.75 0.15 65)) - Premium highlighting for selected personas and key actions
- **Foreground/Background Pairings**: 
  - Background (Pure White oklch(1 0 0)): Deep Blue text (oklch(0.25 0.15 250)) - Ratio 8.2:1 ✓
  - Primary (Deep Blue oklch(0.25 0.15 250)): White text (oklch(1 0 0)) - Ratio 8.2:1 ✓
  - Accent (Warm Gold oklch(0.75 0.15 65)): Deep Blue text (oklch(0.25 0.15 250)) - Ratio 4.8:1 ✓
  - Card (Light Gray oklch(0.98 0.01 250)): Deep Blue text (oklch(0.25 0.15 250)) - Ratio 7.9:1 ✓

## Font Selection

Typography should convey professional expertise and credibility while remaining highly readable for extensive conversation content.

- **Typographic Hierarchy**: 
  - H1 (App Title): Inter Bold/32px/tight letter spacing - Authoritative brand presence
  - H2 (Section Headers): Inter SemiBold/24px/normal spacing - Clear section organization  
  - H3 (Persona Names): Inter Medium/18px/wide spacing - Professional persona identification
  - Body (Chat Content): Inter Regular/16px/relaxed line height - Comfortable reading for long conversations
  - Caption (Metadata): Inter Regular/14px/normal spacing - Subtle supporting information

## Animations

Subtle professional animations that enhance credibility without distraction, emphasizing smooth transitions and responsive feedback that feels premium.

- **Purposeful Meaning**: Smooth transitions convey platform reliability and polish, while subtle hover effects provide professional responsiveness
- **Hierarchy of Movement**: Persona selection and chat responses deserve gentle attention-drawing animations, while navigation remains minimal

## Component Selection

- **Components**: Dialog for persona details, Card for persona previews, Tabs for category navigation, Badge for role indicators, Avatar for persona photos, Button variants for different action priorities, Textarea for question input, ScrollArea for chat history
- **Customizations**: Custom persona card layout with photo, background, and expertise areas; Advisory board drop zone with visual feedback; Chat message bubbles with persona branding
- **States**: Hover effects on persona cards, loading states for API responses, selected states for advisory board members, typing indicators during response generation
- **Icon Selection**: Users for personas, MessageSquare for chat, Sparkles for AI responses, ArrowRight for progression, Plus for adding personas
- **Spacing**: Consistent 4/6/8/12/16px spacing scale with generous padding on cards (p-6) and tight gaps in advisory board (gap-4)
- **Mobile**: Responsive grid layout that collapses to single column, bottom sheet for persona details, stacked advisory board view with horizontal scroll