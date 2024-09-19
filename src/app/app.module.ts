import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { NotificationComponent } from './notification/notification.component';
import { ServicesComponent } from './services/services.component';
import { PrixComponent } from './prix/prix.component';
import { RealisationComponent } from './realisation/realisation.component'; 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccueilComponent,
    ContactComponent,
    NotificationComponent,
    ServicesComponent,
    PrixComponent,
    RealisationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
