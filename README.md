# CafeBot – AI Ordering System (Stage 1: Chat UI)

Flow: Customer → Web Chat UI → Backend API → AI Model API
Order flow: System Prompt + Menu → Order State → Customer Confirmation → orders.json → Staff Dashboard

## Structure
- `prompts/` – AI system prompt
- `data/` – `menu.json` (source of truth for products) and `orders.json` (saved orders)
- `frontend/` – HTML, CSS, JavaScript chat UI (mock replies)
- `backend/` – reserved for the future API server
- `config/` – `.env.example` for future settings
- `CLAUDE.md` – permanent rules for Claude Code

## Run locally
Open `frontend/index.html` in a browser, or run `python3 -m http.server 8000` in `frontend/` and visit http://localhost:8000.

## Status
Done: structure, menu data, chat UI with mock replies.
Next: backend API, AI connection, order state and confirmation, staff dashboard.
