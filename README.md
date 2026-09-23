# Portfolio

A React portfolio site with optional ASP.NET Core support for contact submissions.

## Prerequisites

For the frontend, install:

- Node.js 18 or newer

The optional contact API also requires the .NET 8 SDK.

## Run locally

### Run the frontend

From the repository root, run:

```powershell
cd web
npm install
npm run dev
```

Open the local Vite URL shown in the terminal, usually `http://localhost:5173`.

The portfolio content is stored in `web/app/app.jsx`. The site does not need the API to display the portfolio.

### Optional: run the contact API

The API is only required if you want the contact form to submit messages.

Start the API from the repository root:

From the repository root, run:

```powershell
dotnet run --project api/portfolio.api.csproj --urls http://localhost:5000
```

Keep this terminal running. The API is available at `http://localhost:5000`.

It exposes `POST /api/contact`.

The frontend sends contact requests to `http://localhost:5000` by default. If the API uses another URL, set `VITE_API_URL` before starting Vite:

```powershell
$env:VITE_API_URL = "http://localhost:5001"
npm run dev
```
