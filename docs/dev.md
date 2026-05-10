# Desenvolvimento local

Este documento cobre setup e operações do dia a dia de desenvolvimento do `caramello-app`.

## Pré-requisitos

- **Node.js** via **nvm** (recomendado):
  ```bash
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
  # feche e abra o terminal, depois:
  nvm install --lts
  ```

## 1. Instalação

```bash
npm install
```

## 2. Configuração

```bash
cp .env.example .env
```

Edite `.env` conforme necessário. Para desenvolvimento local padrão, `VITE_API_BASE_URL=http://localhost:8000` já é suficiente.

## 3. Rodar no navegador

```bash
npm run dev
```

O app estará acessível em `http://localhost:5173`.

## 4. Rodar no Android (emulador ou dispositivo)

```bash
npm run build
npm run cap:sync
npm run cap:run:android
```

> **Nota:** ao rodar no emulador Android, use `http://10.0.2.2:8000` para acessar o backend local em vez de `localhost`.
