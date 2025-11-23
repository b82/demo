# Contesto Base della Dashboard

## Panoramica

Questa dashboard è un'applicazione web moderna per la gestione e visualizzazione di dati di vendita e analisi. Il progetto è stato sviluppato come dimostrazione di un'interfaccia utente completa e funzionale per un sistema di gestione vendite.

## Scopo del Progetto

La dashboard **SalesFlow** è progettata per:

- **Visualizzazione Dati**: Mostrare metriche chiave, grafici e statistiche in tempo reale
- **Gestione Operativa**: Permettere la gestione di ordini, prodotti, clienti e report
- **Analisi**: Fornire strumenti per analizzare le performance aziendali
- **User Experience**: Offrire un'interfaccia moderna, responsive e accessibile

## Funzionalità Principali

### 1. Dashboard Principale
- Visualizzazione di metriche chiave (KPI)
- Grafici interattivi per analisi delle vendite
- Statistiche in tempo reale
- Overview delle performance aziendali

### 2. Gestione Ordini
- Visualizzazione lista ordini
- Filtri e ricerca avanzata
- Dettagli ordini
- Gestione stato ordini

### 3. Gestione Prodotti
- Catalogo prodotti
- Informazioni dettagliate
- Gestione inventario
- Categorie e classificazioni

### 4. Gestione Clienti
- Database clienti
- Informazioni di contatto
- Storico acquisti
- Segmentazione clienti

### 5. Report e Analisi
- Report personalizzati
- Esportazione dati
- Analisi comparative
- Trend e previsioni

### 6. Impostazioni
- Configurazione account
- Preferenze utente
- Gestione team
- Integrazioni

### 7. Design System
- Componenti UI riutilizzabili
- Guida stile
- Pattern di design
- Documentazione componenti

## Caratteristiche Tecniche

### Architettura
- **Pattern**: Single Page Application (SPA)
- **State Management**: Redux Toolkit con RTK Query
- **Routing**: Navigazione client-side basata su stato Redux
- **Styling**: Tailwind CSS con variabili CSS per theming

### Temi e Personalizzazione
- **Dark Mode**: Supporto completo per tema scuro
- **Light Mode**: Tema chiaro predefinito
- **CSS Variables**: Sistema di variabili CSS per theming dinamico
- **Responsive Design**: Layout adattivo per mobile, tablet e desktop

### Performance
- **Code Splitting**: Caricamento lazy dei componenti
- **Memoization**: Ottimizzazione re-render con React.memo, useMemo, useCallback
- **CSS Transitions**: Animazioni hardware-accelerate
- **Caching**: RTK Query per caching automatico delle chiamate API

### Accessibilità
- **Radix UI**: Componenti accessibili out-of-the-box
- **ARIA Labels**: Supporto completo per screen reader
- **Keyboard Navigation**: Navigazione completa da tastiera
- **Focus Management**: Gestione corretta del focus

## Flusso di Navigazione

1. **Avvio Applicazione**: L'applicazione si carica e mostra la dashboard principale
2. **Navigazione Sidebar**: L'utente può navigare tra le diverse sezioni usando la sidebar
3. **Visualizzazione Contenuto**: Il contenuto della pagina selezionata viene renderizzato dinamicamente
4. **Interazioni**: L'utente può interagire con i componenti, filtrare dati, e modificare visualizzazioni
5. **Tema**: L'utente può cambiare tema (light/dark) in qualsiasi momento

## Stato dell'Applicazione

### UI State (Redux)
- **currentPage**: Pagina corrente attiva
- **sidebarCollapsed**: Stato di collasso della sidebar
- **isDarkMode**: Modalità tema (dark/light)
- **mobileMenuOpen**: Stato del menu mobile

### API State (RTK Query)
- **Dashboard Data**: Dati della dashboard principale
- **Orders**: Lista e dettagli ordini
- **Products**: Catalogo prodotti
- **Clients**: Database clienti
- **Reports**: Dati per report

## Configurazione Base

### Variabili d'Ambiente
```env
VITE_API_URL=http://localhost:3001/api
```

### Dipendenze Principali
- React 18.3+
- TypeScript
- Redux Toolkit
- Vite
- Tailwind CSS
- Radix UI
- Recharts

## Utilizzo Base

### Sviluppo
```bash
npm install    # Installa dipendenze
npm run dev    # Avvia server di sviluppo
```

### Produzione
```bash
npm run build  # Crea build di produzione
npm run deploy # Deploy su GitHub Pages
```

## Convenzioni di Codice

- **TypeScript**: Tipizzazione forte per sicurezza del codice
- **Componenti Funzionali**: Uso di React Hooks
- **Memoization**: Ottimizzazione performance dove necessario
- **CSS Variables**: Uso di variabili CSS per theming
- **JSDoc**: Documentazione inline per funzioni e componenti

## Prossimi Sviluppi

- [ ] Autenticazione utente
- [ ] Autorizzazioni e ruoli
- [ ] Notifiche in tempo reale
- [ ] Esportazione dati (CSV, PDF)
- [ ] Integrazione con API esterne
- [ ] Test automatizzati
- [ ] Service Worker per offline support

