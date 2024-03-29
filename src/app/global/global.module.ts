import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonToTopComponent } from './components/button-to-top/button-to-top.component';
import { SocialmediaComponent } from './components/socialmedia/socialmedia.component';
import { ButtoncvComponent } from './components/buttoncv/buttoncv.component';

// Material Angular
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    LogoComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    ButtonToTopComponent,
    SocialmediaComponent,
    ButtoncvComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  exports: [
    LogoComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    ButtonToTopComponent,
    SocialmediaComponent,
    ButtoncvComponent,
  ],
})
export class GlobalModule {}
