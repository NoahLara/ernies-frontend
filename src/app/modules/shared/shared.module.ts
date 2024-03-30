import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LogoComponent } from './components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RouterModule } from '@angular/router';

const components = [
  SideNavComponent,
  LogoComponent,
  MenuComponent,
  FooterComponent,
  HeaderComponent,
  ProfileComponent,
];

@NgModule({
  declarations: [components],
  imports: [CommonModule, RouterModule, MatIconModule, MatListModule],
  exports: [components],
})
export class SharedModule {}
