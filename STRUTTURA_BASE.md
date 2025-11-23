# Struttura Base del Progetto

## Organizzazione delle Directory

```
dashboard_demo/
├── src/                          # Codice sorgente principale
│   ├── App.tsx                   # Componente root dell'applicazione
│   ├── main.tsx                  # Entry point dell'applicazione
│   ├── index.css                 # Stili globali e configurazione Tailwind
│   │
│   ├── components/               # Componenti React
│   │   ├── Layout.tsx            # Layout principale con sidebar e header
│   │   │
│   │   ├── pages/                # Componenti delle pagine
│   │   │   ├── Dashboard.tsx     # Pagina dashboard principale
│   │   │   ├── Orders.tsx        # Pagina gestione ordini
│   │   │   ├── Products.tsx      # Pagina gestione prodotti
│   │   │   ├── Clients.tsx       # Pagina gestione clienti
│   │   │   ├── Reports.tsx       # Pagina report e analisi
│   │   │   ├── Settings.tsx      # Pagina impostazioni
│   │   │   └── DesignSystem.tsx  # Pagina design system
│   │   │
│   │   ├── ui/                   # Componenti UI riutilizzabili
│   │   │   ├── button.tsx        # Componente Button
│   │   │   ├── card.tsx          # Componente Card
│   │   │   ├── input.tsx         # Componente Input
│   │   │   ├── table.tsx         # Componente Table
│   │   │   ├── chart.tsx         # Componente Chart
│   │   │   └── ...               # Altri componenti UI
│   │   │
│   │   └── figma/                # Componenti specifici Figma
│   │       └── ImageWithFallback.tsx
│   │
│   ├── store/                    # Redux store e state management
│   │   ├── index.ts              # Configurazione store Redux
│   │   ├── hooks.ts              # Redux hooks tipizzati
│   │   │
│   │   ├── slices/               # Redux slices
│   │   │   └── uiSlice.ts        # Slice per stato UI
│   │   │
│   │   └── api/                  # RTK Query APIs
│   │       └── dashboardApi.ts   # API per dati dashboard
│   │
│   ├── styles/                   # File di stile
│   │   ├── globals.css           # Stili globali
│   │   └── utilities.css         # Classi utility CSS
│   │
│   ├── lib/                      # Librerie e utilities
│   │   └── theme-utils.ts        # Utility per gestione temi
│   │
│   └── guidelines/               # Documentazione e linee guida
│       └── Guidelines.md
│
├── build/                        # Build di produzione (generato)
│   └── assets/                   # Asset compilati
│
├── node_modules/                 # Dipendenze npm
│
├── package.json                  # Configurazione progetto e dipendenze
├── package-lock.json             # Lock file dipendenze
├── vite.config.ts                # Configurazione Vite
│
├── ARCHITECTURE.md               # Documentazione architettura
├── CONTESTO_BASE.md              # Contesto base della dashboard
├── STRUTTURA_BASE.md             # Questo file
├── README.md                     # Documentazione principale
└── CHANGELOG.md                  # Log delle modifiche
```

## Struttura Dettagliata dei Componenti

### 1. Entry Point (`main.tsx`)
- Inizializza React
- Configura Redux Provider
- Renderizza componente App
- Importa stili globali

### 2. App Component (`App.tsx`)
- **Responsabilità**: Gestione routing e navigazione
- **State Management**: Usa Redux per gestire pagina corrente
- **Pattern**: Container component che gestisce logica di navigazione
- **Props**: Nessuna (usa Redux hooks)
- **Output**: Layout con contenuto dinamico basato su pagina corrente

### 3. Layout Component (`Layout.tsx`)
- **Responsabilità**: Struttura layout principale
- **Componenti**: Sidebar, Header, Main Content Area
- **Features**:
  - Sidebar collassabile (desktop)
  - Menu mobile (mobile)
  - Header con ricerca, notifiche, profilo
  - Gestione tema (dark/light)
  - Navigazione tra pagine

### 4. Page Components (`pages/`)
Ogni pagina è un componente standalone che:
- Riceve dati da Redux store (se necessario)
- Renderizza contenuto specifico della pagina
- Gestisce interazioni utente locali
- Usa componenti UI riutilizzabili

#### Dashboard.tsx
- Visualizza metriche principali
- Grafici e visualizzazioni dati
- KPI cards
- Statistiche in tempo reale

#### Orders.tsx
- Lista ordini
- Filtri e ricerca
- Dettagli ordini
- Gestione stato

#### Products.tsx
- Catalogo prodotti
- Grid/list view
- Filtri per categoria
- Dettagli prodotto

#### Clients.tsx
- Lista clienti
- Informazioni contatto
- Storico acquisti
- Segmentazione

#### Reports.tsx
- Report configurabili
- Grafici analitici
- Esportazione dati
- Filtri temporali

#### Settings.tsx
- Configurazione account
- Preferenze utente
- Gestione team
- Integrazioni

#### DesignSystem.tsx
- Showcase componenti UI
- Documentazione pattern
- Esempi d'uso
- Guida stile

### 5. UI Components (`components/ui/`)
Componenti riutilizzabili basati su Radix UI:
- **Accessibilità**: Componenti accessibili out-of-the-box
- **Styling**: Tailwind CSS con variabili CSS
- **Composizione**: Pattern compound components dove necessario
- **TypeScript**: Tipizzazione completa

Componenti principali:
- `button.tsx` - Bottoni con varianti
- `card.tsx` - Card container
- `input.tsx` - Input fields
- `table.tsx` - Tabelle dati
- `chart.tsx` - Wrapper per Recharts
- `dialog.tsx` - Modali
- `dropdown-menu.tsx` - Menu dropdown
- `tabs.tsx` - Tab navigation
- E molti altri...

## Struttura Redux Store

### Store Configuration (`store/index.ts`)
```typescript
{
  ui: uiSlice.reducer,              // Stato UI
  [dashboardApi.reducerPath]: ...   // RTK Query API
}
```

### UI Slice (`store/slices/uiSlice.ts`)
Gestisce:
- `currentPage`: Pagina corrente
- `sidebarCollapsed`: Stato sidebar
- `isDarkMode`: Tema dark/light
- `mobileMenuOpen`: Menu mobile

### Dashboard API (`store/api/dashboardApi.ts`)
RTK Query endpoints per:
- Fetch dati dashboard
- Fetch ordini
- Fetch prodotti
- Fetch clienti
- Fetch report

## Struttura Stili

### `index.css`
- Configurazione Tailwind CSS
- CSS variables per theming
- Reset e base styles
- Dark mode configuration

### `styles/globals.css`
- Stili globali applicazione
- Utility classes custom
- Animazioni e transitions

### `styles/utilities.css`
- Classi utility personalizzate
- Helper classes
- Layout utilities

## Pattern di Organizzazione

### 1. Feature-Based Structure
I componenti sono organizzati per feature/funzionalità:
- `pages/` - Pagine principali
- `ui/` - Componenti UI riutilizzabili
- `figma/` - Componenti specifici design

### 2. Separation of Concerns
- **Components**: Solo presentazione UI
- **Store**: Logica di stato e data fetching
- **Styles**: Separazione stili per tipo

### 3. Type Safety
- TypeScript per tutto il codice
- Tipi Redux generati automaticamente
- Interface per props componenti

### 4. Code Splitting
- Vite gestisce automaticamente code splitting
- Lazy loading per route (se implementato)
- Vendor chunks separati

## Convenzioni di Naming

### File e Directory
- **Componenti**: PascalCase (`Dashboard.tsx`)
- **Utilities**: camelCase (`theme-utils.ts`)
- **Styles**: kebab-case (`globals.css`)
- **Store**: camelCase (`uiSlice.ts`)

### Componenti React
- **Componenti**: PascalCase (`const Dashboard = () => {}`)
- **Props**: camelCase (`currentPage`, `onPageChange`)
- **Hooks**: camelCase con prefisso `use` (`useAppSelector`)

### Redux
- **Slices**: camelCase (`uiSlice`)
- **Actions**: camelCase (`setCurrentPage`, `toggleSidebar`)
- **Selectors**: camelCase (`selectCurrentPage`)

## Flusso dei Dati

```
API/Backend
    ↓
RTK Query (dashboardApi)
    ↓
Redux Store
    ↓
React Components (via hooks)
    ↓
UI Rendering
```

## Import Paths

### Absolute Imports
I path sono relativi a `src/`:
```typescript
import { Layout } from "./components/Layout";
import { useAppSelector } from "./store/hooks";
```

### Component Imports
```typescript
// Da components/ui
import { Button } from "./ui/button";
import { Card } from "./ui/card";

// Da store
import { useAppSelector } from "../store/hooks";
import { setCurrentPage } from "../store/slices/uiSlice";
```

## Build e Output

### Development
- **Entry**: `src/main.tsx`
- **Output**: Server di sviluppo Vite
- **Hot Reload**: Abilitato

### Production
- **Entry**: `src/main.tsx`
- **Output**: `build/` directory
- **Chunks**:
  - `index-*.js` - Codice applicazione
  - `react-vendor-*.js` - React e dipendenze
  - `redux-vendor-*.js` - Redux e dipendenze
  - `ui-vendor-*.js` - UI libraries
  - `index-*.css` - Stili compilati

## Estendere la Struttura

### Aggiungere una Nuova Pagina
1. Creare componente in `src/components/pages/NewPage.tsx`
2. Aggiungere tipo in `App.tsx` (`PageType`)
3. Aggiungere mapping in `PAGE_COMPONENTS`
4. Aggiungere voce navigazione in `Layout.tsx`

### Aggiungere un Nuovo Componente UI
1. Creare file in `src/components/ui/new-component.tsx`
2. Seguire pattern Radix UI esistente
3. Usare Tailwind CSS per styling
4. Esportare componenti principali

### Aggiungere Nuovo State Redux
1. Creare slice in `src/store/slices/newSlice.ts`
2. Aggiungere reducer a `store/index.ts`
3. Creare actions e selectors
4. Usare hooks in componenti

### Aggiungere Nuova API Endpoint
1. Aggiungere endpoint in `src/store/api/dashboardApi.ts`
2. Usare hook generato in componenti
3. Gestire loading/error states

## Best Practices

1. **Componenti Piccoli**: Mantenere componenti focalizzati e riutilizzabili
2. **Type Safety**: Usare TypeScript sempre
3. **Performance**: Usare memoization dove necessario
4. **Accessibilità**: Seguire WCAG guidelines
5. **Documentazione**: JSDoc per funzioni complesse
6. **Testing**: Preparare struttura per test futuri

