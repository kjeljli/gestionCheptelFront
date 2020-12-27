import { AssocieComponent } from './views/associe/associe.component';
import { FournisseurComponent } from './views/fournisseur/fournisseur.component';
import { VentesComponent } from './views/ventes/ventes.component';
import { DepenseComponent } from './views/depense/depense.component';
import { CheptelComponent } from './views/cheptel/cheptel.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterventionComponent } from './views/intervention/intervention.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'g-cheptel', component: CheptelComponent },
  { path: 'g-depenes', component: DepenseComponent },
  { path: 'g-ventes', component: VentesComponent },
  { path: 'g-intervention', component: InterventionComponent },
  { path: 'g-fournisseur', component: FournisseurComponent },
  { path: 'g-associe', component: AssocieComponent },
  { path: '**', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
