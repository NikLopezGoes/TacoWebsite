🌮 Kris' Tacos
Welcome to Kris' Tacos, a sleek and modern website for our traveling taco truck! Built with React, this site lets customers check where we’ll be next, view our delicious menu, and get in touch—all in one place.

🚀 Features
📍 Live Calendar – See where the taco truck will be next, updated weekly via Google Sheets.

🍴 Menu Showcase – View our signature tacos and seasonal specials.

📱 Responsive Design – Optimized for mobile and desktop devices.

🧭 Navigation – Clean routing across pages like /home, /calendar, and /contact.

⚙️ Easy Admin Updates – Admins can update the calendar via a linked Google Sheet.

🛠️ Built With
React

React Router

Google Sheets API

Vite for fast builds and dev environment

CSS for styling (custom + responsive)

📸 Preview

“The best tacos always come from a truck.”

📂 Project Structure
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── NavBar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Calendar.jsx
│   │   └── Contact.jsx
│   ├── css/
│   │   └── styles.css
│   ├── App.jsx
│   └── main.jsx
├── .env
├── package.json
└── README.md

🧪 Local Development
bash
Copy
Edit
# Install dependencies
npm install

# Start the development server
npm run dev
Make sure you’ve added your Google Sheets API key and Sheet ID in a .env file for calendar integration.

🔐 Environment Variables Example
ini
Copy
Edit
VITE_GOOGLE_SHEET_ID=your_sheet_id_here
VITE_GOOGLE_API_KEY=your_api_key_here
📬 Contact
Have a question or want to book the truck? Reach out at kris@tacos.com!

Let me know if you want a deployment guide, contribution section, or GitHub Actions setup added too.








