# TacoWebsite

A responsive and modern web application for showcasing the Kris Tacos food truck menu and event schedule.

## Features

- React frontend powered by Vite
- Live calendar of scheduled food truck events (Google Calendar API)
- Fully responsive layout for mobile and desktop
- Clean and accessible design
- Custom branding with TacoGuy favicon and visual identity

## Project Structure

```
TacoWebsite/
├── frontend/
│   ├── public/
│   │   ├── images/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── README.md
```

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/NikLopezGoes/TacoWebsite.git
   cd TacoWebsite/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Build for Production

```bash
npm run build
```

The static files will be output to the `dist/` directory.

## Deployment

This app is deployed using AWS Amplify. On every commit to the `main` branch, Amplify automatically runs the build process and deploys the latest version.

## Customization

- **Favicon**: Located in `public/images/TacoGuy.png`. You can replace this with your own icon.
- **Google Calendar Integration**: The API key is managed securely through Amplify environment variables. Be sure to set `VITE_GOOGLE_API_KEY` in your Amplify app settings.

## License

This project is private or covered under the license of the owner. For questions or requests, contact the repository maintainer.
