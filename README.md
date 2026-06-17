# VBM Transfer

Monorepo com:
- `frontend`: React + TypeScript + Vite + Tailwind + shadcn/ui + Wouter
- `backend`: Node.js + Express + TypeScript + Drizzle + PostgreSQL
- `shared`: contratos e schemas compartilhados (Zod)

## Setup Inicial
1. `npm run setup`
2. Copie `.env.example` para `.env`
3. Ajuste variáveis (principalmente `DATABASE_URL` e `VITE_WHATSAPP_NUMBER`)

## Rodar Local
- Full stack: `npm run dev`
- Apenas backend: `npm run dev:backend`
- Apenas frontend: `npm run dev:frontend`

## Scripts
- `npm run check`: type-check frontend + backend
- `npm run build`: build shared + backend + frontend
- `npm run dev -w backend`: API em `http://localhost:3333`
- `npm run dev -w frontend`: app em `http://localhost:5173`
