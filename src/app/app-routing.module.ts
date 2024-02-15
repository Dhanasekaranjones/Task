import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { LoginComponent } from './login/login.component';
import { DetailviewComponent } from './detailview/detailview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ParentComponent },
  { path: 'addEdit', component: ChildComponent },
  { path: 'addEdit/:id', component: ChildComponent },
  { path: 'cartPage', component: CartPageComponent },
  { path: 'details', component: DetailviewComponent },
  { path: 'details/:id', component: DetailviewComponent },
  { 
    path:'**',
    redirectTo:'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
