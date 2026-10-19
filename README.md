# LibraPro — React + MongoDB

Full-stack library management system with React/Vite, Express, MongoDB, JWT authentication, Google Sign-In, password change, and forgot-password reset flow.

## Run

### Backend
```powershell
cd server
npm install
npm run seed
npm run dev
```

### Frontend
Open a second terminal in the project root:
```powershell
npm install
npm run dev
```

Open http://localhost:5173

## Environment

Root `.env`:
```env
VITE_API_URL=http://localhost:5000/api
VITE_GOOGLE_CLIENT_ID=your_google_web_client_id.apps.googleusercontent.com
```

`server/.env`:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/librapro
JWT_SECRET=change_this_to_a_long_random_secret
CLIENT_URL=http://localhost:5173
GOOGLE_CLIENT_ID=your_google_web_client_id.apps.googleusercontent.com

# Optional: configure SMTP to email forgot-password codes.
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email
SMTP_PASS=your_password_or_app_password
SMTP_FROM=LibraPro <your_email>
NODE_ENV=development
```

## Forgot Password

On the login page click **Forgot password?**. Enter the account email, then enter the 6-digit code and choose a new password.

- Reset codes expire after 10 minutes.
- Codes are stored as SHA-256 hashes in MongoDB.
- If SMTP is configured, the code is emailed to the user.
- If SMTP is not configured and `NODE_ENV=development`, the code is shown in the UI for local testing.
- The same flow works for Google-only accounts and lets them create an email/password login.

For production, configure a real SMTP provider and set `NODE_ENV=production` so reset codes are never returned in the API response.

## Google Sign-In troubleshooting
- The React app must be opened from an origin authorized in Google Cloud Console.
- For local development authorize both `http://localhost:5173` and `http://127.0.0.1:5173` under Google Auth Platform > Clients > your Web client > Authorized JavaScript origins.
- Use the exact Client ID copied from Google Cloud Console in both `.env` (`VITE_GOOGLE_CLIENT_ID`) and `server/.env` (`GOOGLE_CLIENT_ID`). Do not type or change its case.
- Restart Vite and the API after changing `.env` files.
- The Google Identity Services component initializes the Google client only once, preventing repeated `google.accounts.id.initialize()` warnings in React development/StrictMode.
