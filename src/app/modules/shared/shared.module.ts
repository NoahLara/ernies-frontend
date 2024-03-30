import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LogoComponent } from './components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';



@NgModule({
  declarations: [
    SideNavComponent,
    LogoComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
