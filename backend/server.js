const express = require("express");
const session = require("express-session");
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const cors = require("cors");

const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(
  session({ secret: "your_secret", resave: false, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

passport.use(
  new FacebookStrategy(
    {
      clientID: "Facebook_App_ID",
      clientSecret: "Facebook_App_Secret",
      callbackURL: "http://localhost:4400/auth/facebook/callback",
      profileFields: ["id", "displayName", "emails", "picture.type(large)"],
    },
    (accessToken, refreshToken, profile, done) => done(null, profile)
  )
);

app.get(
  "/auth/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);

app.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    failureRedirect: "http://localhost:3000/login",
  }),
  (req, res) => {
    res.redirect(
      `http://localhost:3000/dashboard?user=${encodeURIComponent(
        JSON.stringify(req.user)
      )}`
    );
  }
);

app.listen(4400, () => console.log("Backend running on http://localhost:4400"));
