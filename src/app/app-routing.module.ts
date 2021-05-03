import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'account-settings',
    loadChildren: () => import('./pages/account-settings/account-settings.module').then( m => m.AccountSettingsPageModule)
  },
  {
    path: 'authorize',
    loadChildren: () => import('./pages/authorize/authorize.module').then( m => m.AuthorizePageModule)
  },
  {
    path: 'init-authorize',
    loadChildren: () => import('./pages/init-authorize/init-authorize.module').then( m => m.InitAuthorizePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'on-boarding',
    loadChildren: () => import('./pages/on-boarding/on-boarding.module').then( m => m.OnBoardingPageModule)
  },
  {
    path: 'passkey',
    loadChildren: () => import('./pages/passkey/passkey.module').then( m => m.PasskeyPageModule)
  },
  {
    path: 'pay',
    loadChildren: () => import('./pages/pay/pay.module').then( m => m.PayPageModule)
  },
  {
    path: 'pin',
    loadChildren: () => import('./pages/pin/pin.module').then( m => m.PinPageModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('./pages/privacy/privacy.module').then( m => m.PrivacyPageModule)
  },
  {
    path: 'reset-pass',
    loadChildren: () => import('./pages/reset-pass/reset-pass.module').then( m => m.ResetPassPageModule)
  },
  {
    path: 'reset-pin',
    loadChildren: () => import('./pages/reset-pin/reset-pin.module').then( m => m.ResetPinPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./pages/wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'init-landing',
    loadChildren: () => import('./pages/init-landing/init-landing.module').then( m => m.InitLandingPageModule)
  },
  {
    path: 'init-landing-phone',
    loadChildren: () => import('./pages/init-landing-phone/init-landing-phone.module').then( m => m.InitLandingPhonePageModule)
  },
  {
    path: 'init-landing-auth',
    loadChildren: () => import('./pages/init-landing-auth/init-landing-auth.module').then( m => m.InitLandingAuthPageModule)
  },
  {
    path: 'init-auth-code',
    loadChildren: () => import('./pages/init-auth-code/init-auth-code.module').then( m => m.InitAuthCodePageModule)
  },
  {
    path: 'init-auth-user-pass',
    loadChildren: () => import('./pages/init-auth-user-pass/init-auth-user-pass.module').then( m => m.InitAuthUserPassPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./pages/terms/terms.module').then( m => m.TermsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
