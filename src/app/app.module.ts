import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { InicioComponent } from './vistas/inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzTypographyModule,
    NzLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzAvatarModule,
    NzInputNumberModule,
    NzCheckboxModule,
    AppRoutingModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
