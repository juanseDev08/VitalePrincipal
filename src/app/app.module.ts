import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToastModule } from 'primeng/toast';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';

import { DropdownModule } from 'primeng/dropdown';
import { LOCALE_ID } from '@angular/core';
import '@angular/common/locales/global/es-CO';
import { ComponentesModule } from './componentes/componentes.module';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { SpeedDialModule } from 'primeng/speeddial';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ToastModule,
    RouterOutlet,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    DialogModule,
    PanelMenuModule,
    SidebarModule,
    MenuModule,
    TieredMenuModule,
    PasswordModule,
    InputTextModule,
    InputSwitchModule,
    FormsModule,
    DropdownModule,
    ComponentesModule,
    SpeedDialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
