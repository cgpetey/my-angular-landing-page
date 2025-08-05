# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `ng serve` or `npm start` (runs on http://localhost:4200)
- **Build**: `ng build` or `npm run build`
- **Watch build**: `ng build --watch --configuration development` or `npm run watch`
- **Run tests**: `ng test` or `npm test`
- **Lint**: `ng lint` or `npm run lint`
- **Serve SSR**: `npm run serve:ssr:my-angular-landing-page`

## Project Architecture

This is an Angular 18 landing page application that was converted from React, featuring standalone components and Angular Material integration.

### Key Architectural Patterns

- **Standalone Components**: All components use Angular 18's standalone pattern without NgModules
- **Angular Material Integration**: Uses Material Design components with azure-blue theme
- **Reactive Forms**: Form handling with Angular's reactive forms and validation
- **Component-as-a-Service**: UI components follow CVA (Control Value Accessor) patterns
- **Service-based Architecture**: Business logic separated into injectable services

### Technology Stack

- **Angular 18** with standalone components
- **Angular Material 18.2.14** for UI components
- **Tailwind CSS** for utility-first styling (integrated with Material)
- **TypeScript** for type safety
- **Angular SSR** with prerendering enabled
- **ESLint** for code linting

### Project Structure

```
src/app/
├── components/
│   ├── ui/                    # Reusable UI components with Material integration
│   │   ├── button/           # Material button wrapper with CVA variants
│   │   ├── input/            # Material form field wrapper
│   │   ├── checkbox/         # Material checkbox wrapper
│   │   └── card/             # Card component system (header, content, footer, etc.)
│   ├── main-header/          # Application header with logo
│   ├── login-form/           # Login and forgot password forms
│   ├── footer/               # Application footer
│   └── location-text/        # Golf course location display
├── services/
│   └── svg-paths.service.ts  # Centralized SVG path management
└── app.config.ts            # App configuration with Material providers
```

### UI Component Architecture

The project uses a hierarchical UI component system:

1. **Material-Enhanced Base Components**: Button, Input, Checkbox wrapped with Material Design
2. **Card System**: Modular card components (Card, CardHeader, CardTitle, CardContent, etc.)
3. **Business Components**: LoginForm, MainHeader, Footer using the base components

### Form Handling

- Uses Angular Reactive Forms with FormBuilder
- Material form fields with floating labels and validation
- Custom form validation with Material error styling
- Loading states integrated with Material buttons

### Styling System

- **Tailwind CSS** for utility classes with custom design tokens via CSS variables
- **Angular Material Theme** (azure-blue) for consistent Material Design
- **CSS Variables** for design system (colors, spacing, typography)
- **Glass Morphism** effects for modern UI appearance

### Key Services

- **SvgPathsService**: Manages SVG paths for logos and icons (contains actual MS logo data)

### Development Notes

- Components are built with accessibility in mind using Material's built-in features
- All forms use reactive patterns with proper validation
- The app supports both light themes via CSS variables
- Build configuration includes SSR and prerendering for performance
- Material animations are enabled for smooth UX transitions

### Testing

- Uses Jasmine and Karma for unit testing
- Test configuration includes Material theme imports
- Component testing should account for Material dependencies