import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './views/users/users.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FournisseurComponent } from './views/fournisseur/fournisseur.component'
import { FournisseurService } from './sres/fournisseur.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';
import {MatButtonModule } from  '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { CheptelComponent } from './views/cheptel/cheptel.component';
import { TypeDepensesComponent } from './views/type-depenses/type-depenses.component';
import { TypeAnimalComponent } from './views/type-animal/type-animal.component';
import { HomeComponent } from './views/home/home.component';
import { DepenseComponent } from './views/depense/depense.component';
import { VentesComponent } from './views/ventes/ventes.component';
import { InterventionComponent } from './views/intervention/intervention.component';
import { AssocieComponent } from './views/associe/associe.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    FournisseurComponent,
    CheptelComponent,
    TypeDepensesComponent,
    TypeAnimalComponent,
    HomeComponent,
    DepenseComponent,
    VentesComponent,
    InterventionComponent,
    AssocieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MenubarModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule, 
    HttpClientModule,
    ReactiveFormsModule,  
    BrowserAnimationsModule
  ],
  providers: [FournisseurService],
  bootstrap: [AppComponent]
})
export class AppModule { }
