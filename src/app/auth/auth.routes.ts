import { Routes } from "@angular/router";
import { AuthLayout } from "@auth/layout/auth-layout/auth-layout";
import { LoginPageComponent } from "@auth/pages/login-page/login-page";
import { RegisterComponent } from "./pages/register/register";

export const authRoutes:Routes = [
    {
        path: "",
        component: AuthLayout,
        children: [
            {
                path: "login",
                component: LoginPageComponent,
            },
            {
                path: "register",
                component: RegisterComponent
            },
            {
                path: "**",
                redirectTo: "login",
            }
        ]
    }
];

export default authRoutes;