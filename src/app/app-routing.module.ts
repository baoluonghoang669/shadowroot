import { PageAComponent } from './page-a/page-a.component';
import { PageCComponent } from './page-c/page-c.component';
import { PageBComponent } from './page-b/page-b.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/page-a', pathMatch: 'full'},
  {path: 'page-a', component: PageAComponent},
  {path: 'page-b', component: PageBComponent},
  {path: 'page-c', component: PageCComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
