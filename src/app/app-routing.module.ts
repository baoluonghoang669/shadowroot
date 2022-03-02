import { PageFullComponent } from './page-full/page-full.component';
import { PageAComponent } from './page-a/page-a.component';
import { PageCComponent } from './page-c/page-c.component';
import { PageBComponent } from './page-b/page-b.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePaginateComponent } from './page-paginate/page-paginate.component';
import { NextpageComponent } from './nextpage/nextpage.component';
import { PageScrollComponent } from './page-scroll/page-scroll.component';
import { PageLoadmoreComponent } from './page-loadmore/page-loadmore.component';

const routes: Routes = [
  {path: '', redirectTo: '/page-a', pathMatch: 'full'},
  {path: 'page-a', component: PageAComponent},
  {path: 'page-b', component: PageBComponent},
  {path: 'page-c', component: PageCComponent},
  {path: 'page-full', component: PageFullComponent},
  {path: 'page-loadmore', component: PageLoadmoreComponent},
  {path: 'page-scroll', component: PageScrollComponent},
  {path: 'nextpage', component: NextpageComponent},
  {path: 'page-paginate', component: PagePaginateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
