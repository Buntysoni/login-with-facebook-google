# Facebook & Google Login Demo

This project demonstrates how to implement Facebook and Google authentication in a full-stack application using Next.js for the frontend and Express.js for the backend.

## Project Structure

```
backend/
  server.js
  package.json
frontend/
  pages/
    login.js
  package.json
google-login/
  pages/
    index.js
    dashboard.js
    api/
      auth/[...nextauth].js
  .env.local
  package.json
```

## Features

- Facebook login using Passport.js in the backend ([backend/server.js](backend/server.js))
- Google login using NextAuth.js in the frontend ([google-login/pages/api/auth/[...nextauth].js](google-login/pages/api/auth/[...nextauth].js))
- Styled login page ([frontend/pages/login.js](frontend/pages/login.js))

## Setup Instructions

### 1. Clone the repository

```sh
git clone <your-repo-url>
cd facebook-login-demo
```

### 2. Install dependencies

Install backend dependencies:

```sh
cd backend
npm install
```

Install frontend dependencies:

```sh
cd ../frontend
npm install
```

Install google-login dependencies:

```sh
cd ../google-login
npm install
```

### 3. Configure Facebook and Google Keys

#### Facebook Keys

Update the following values in [`backend/server.js`](backend/server.js):

```js
clientID: "YOUR_FACEBOOK_APP_ID",
clientSecret: "YOUR_FACEBOOK_APP_SECRET",
```

Replace `"YOUR_FACEBOOK_APP_ID"` and `"YOUR_FACEBOOK_APP_SECRET"` with your Facebook app credentials.

#### Google Keys

Update the following values in [`google-login/.env.local`](google-login/.env.local):

```
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_URL=http://localhost:3000
```

Replace `your-google-client-id` and `your-google-client-secret` with your Google OAuth credentials.

### 4. Run the Applications

Start the backend server:

```sh
cd backend
npm start
```

Start the frontend server:

```sh
cd ../frontend
npm run dev
```

Start the google-login app:

```sh
cd ../google-login
npm run dev
```

## Tutorial Video

Watch the step-by-step tutorial here:

[![YouTube Tutorial](https://img.youtube.com/vi/gIGhHoIn8TE/0.jpg)](https://youtu.be/gIGhHoIn8TE)

[https://youtu.be/gIGhHoIn8TE](https://youtu.be/gIGhHoIn8TE)

## Additional Notes

- Make sure your Facebook and Google OAuth apps are configured to allow `http://localhost:3000` and `http://localhost:4400` as valid redirect URIs.
- For production, use secure secrets and environment variables.

## License

MIT