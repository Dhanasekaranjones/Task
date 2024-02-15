import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { LoginComponent } from './login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { DetailviewComponent } from './detailview/detailview.component'


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    CartPageComponent,
    LoginComponent,
    DetailviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(), 
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
