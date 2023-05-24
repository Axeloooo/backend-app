import passport from "passport";

import { Router } from "express";

import * as sessionController from "../../controllers/api/session.controller.js";

import { rol } from "../../middlewares/rol.middleware.js";

export const sessionsApiRouter = Router();

sessionsApiRouter.post(
  "/register",
  rol,
  passport.authenticate("register"),
  sessionController.postRegister
);

sessionsApiRouter.post(
  "/login",
  passport.authenticate("login"),
  sessionController.postLogin
);

sessionsApiRouter.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] }),
  (req, res) => {}
);

sessionsApiRouter.get(
  "/githubcallback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  sessionController.postGitHubLogin
);

sessionsApiRouter.get("/logout", sessionController.postLogout);