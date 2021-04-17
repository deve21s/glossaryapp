import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddgComponent } from './addg/addg.component';
import { AdminComponent } from './admin/admin.component';
import { DetailsComponent } from './details/details.component';
import { LetterComponent } from './letter/letter.component';
import { LoginComponent } from './login/login.component';
import { AdminGuard } from './admin/admin.guard';
import { EditpComponent } from './editp/editp.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/all', pathMatch: 'full' },
  { path: '', component: LetterComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
  { path: 'reload', redirectTo: '/admin', pathMatch: 'full' },
  { path: 'add', component: AddgComponent },
  { path: 'login', component: LoginComponent },
  { path: 'all/:name', component: DetailsComponent },
  { path: 'edit/:id', component: EditpComponent },
  { path: 'delete/:id', redirectTo: 'admin', pathMatch: 'full' },
  { path: ':id', component: LetterComponent },
  { path: 'search/:name', component: SearchComponent },
  { path: ':id/:name', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
