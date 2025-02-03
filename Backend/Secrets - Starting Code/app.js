//jshint esversion:6
import 'dotenv/config';
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import session from "express-session";
import passport from 'passport';
import passportLocalMongoose from "passport-local-mongoose";
import { Strategy as GoogleStrategy} from "passport-google-oauth20";
import findOrCreate from "mongoose-findorcreate";
// import {Strategy as FacebookStrategy} from "passport-facebook";
import { Strategy as InstagramStrategy } from 'passport-instagram';

const app = express();
const port = 3000;


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true}));

app.use(session({
  secret: "Our little secret.",
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.URI);

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  googleId: String,
  secret: String
});

userSchema.plugin(passportLocalMongoose); 
userSchema.plugin(findOrCreate);

const User = new mongoose.model( "User", userSchema)

passport.use(User.createStrategy());

// passport.use(new InstagramStrategy({
//   clientID: INSTAGRAM_CLIENT_ID,
//   clientSecret: INSTAGRAM_CLIENT_SECRET,
//   callbackURL: "http://127.0.0.1:3000/auth/instagram/callback"
// },
// function(accessToken, refreshToken, profile, done) {
//   User.findOrCreate({ instagramId: profile.id }, function (err, user) {
//     return done(err, user);
//   });
// }
// ));
passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, {
      id: user.id,
      username: user.username,
      picture: user.picture
    });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/secrets",
  userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
},
(accessToken, refreshToken, profile, cb) => {
  console.log(profile);
  User.findOrCreate({ googleId: profile.id },  (err, user) => {
    return cb(err, user);
  });
}
));
app.get("/" , (req , res) => {
  res.render("home.ejs");
})

app.get("/auth/google",
  passport.authenticate('google', { scope: ["profile"] })
);

app.get("/auth/google/secrets", 
  passport.authenticate('google', { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/secrets");
  });

app.get("/login" , (req , res) => {
  res.render("login.ejs");
})

app.get("/register" , (req , res) => {
  res.render("register.ejs");
})

app.get("/secrets" ,async (req, res) => {
  try {
    const foundUsers = await User.find({"secret": {$ne: null}})
    res.render("secrets.ejs", { usersWithSecrets: foundUsers})
  }catch(err){
    console.log(err);
  }
})

app.get("/submit" , (req, res) => {
  if(req.isAuthenticated()){
    res.render("submit.ejs");
  }else {
    res.redirect("/login");
  }
})

app.post("/submit",async (req,res) => {
  const submittedSecret = req.body.secret

  try {
    const foundUser = await User.findById(req.user.id);
    foundUser.secret = submittedSecret;
    try {
      await foundUser.save();
      res.redirect("/secrets")
    }catch(err){
      console.log(err);
    }
  }catch (err){
    console.log(err)
  }
})
app.get("/logout", (req, res, next) => {
  req.logout(err=> {
    if(err) return next(err);
    res.redirect("/");
  });
})
app.post("/register", (req, res) => {
  User.register({username: req.body.username}, req.body.password, (err , user) => {
    if(err){
      console.log(err);
      res.redirect("/register");
    }else {
      passport.authenticate("local")(req, res, () => {
        res.redirect("/secrets");
      })
    }
  })
})

app.post("/login" , async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password
  })
  req.login(user , (err) => {
    if(err){
      console.log(err)
    }else {
      passport.authenticate("local")(req , res , () => {
        res.redirect("/secrets");
      })
    }
  })
})
app.listen(port , () => {
  console.log(`The server is running on port ${port}!`);
})
// ""