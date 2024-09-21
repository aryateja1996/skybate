import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ServiceComponent } from './pages/servicees/service.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { SecurityComponent } from './pages/security/security.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: "full" },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactusComponent },
    { path: 'about-us', component: AboutusComponent },
    { path: "our-services", component: ServiceComponent },
    { path: "privacy-policy", component: PrivacyPolicyComponent },
    { path: "terms-conditions", component: TermsAndConditionsComponent },
    {path: "security-policy", component: SecurityComponent}
];
