import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeenjsonformatterComponent } from './teenjsonformatter/teenjsonformatter.component';
import { SubNavbarComponent } from './sub-navbar/sub-navbar.component';
import { MainNavarComponent } from './main-navar/main-navar.component';


const routes: Routes = [
  { path: 'home', component: MainNavarComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  //{ path: 'Home/:name', component: MainNavarComponent },
  // { path: 'Exits', component: SubNavbarComponent },
  // { path: 'Attention', component: SubNavbarComponent },
  // { path: 'Background', component: SubNavbarComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

