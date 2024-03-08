import AdminJS from "adminjs";
import AdminJsExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import { sequelize } from "../database";
import { adminJsResources } from "./resources";
import { locale } from "./locale";
import { dashboardOptions } from "./dashboard";
import { brandingOptions } from "./branding";
import { authenticationOptions } from "./authenticate";


AdminJS.registerAdapter(AdminJSSequelize)
export const adminJs = new AdminJS({
  databases: [sequelize],
  rootPath: '/admin',
  dashboard: dashboardOptions,
  resources: adminJsResources,
  branding: brandingOptions,
  locale: locale,
})


export const adminJsRouter = AdminJsExpress.buildAuthenticatedRouter(
  adminJs,
  authenticationOptions,
  null,
  {
    resave: false,
    saveUninitialized: false
  }
)