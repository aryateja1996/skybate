import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ServiceComponent } from './pages/servicees/service.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { SecurityComponent } from './pages/security/security.component';
import { PricingRefundPolicyComponent } from './pages/pricing-refund-policy/pricing-refund-policy.component';
import { SucessPageComponent } from './pages/payment/sucess-page/sucess-page.component';
import { FailPageComponent } from './pages/payment/fail-page/fail-page.component';
import { ApplyWebinarComponent } from './pages/external/apply-webinar/apply-webinar.component';
import { SkyhackComponent } from './pages/external/skyhack/skyhack.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: "full" },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactusComponent },
    { path: 'about-us', component: AboutusComponent },
    { path: "our-services", component: ServiceComponent },
    { path: "privacy-policy", component: PrivacyPolicyComponent },
    { path: "terms-conditions", component: TermsAndConditionsComponent },
    {path: "security-policy", component: SecurityComponent},
    {path:'pricing-refund-policy',component:PricingRefundPolicyComponent},
    {path:'sucess-payment',component:SucessPageComponent},
    {path:'fail-payment',component:FailPageComponent},
    {path:'apply-webinar',component:ApplyWebinarComponent},
    {path:'skyhack',component:SkyhackComponent}
];
