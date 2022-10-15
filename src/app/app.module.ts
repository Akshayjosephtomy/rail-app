import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewalltrainsComponent } from './viewalltrains/viewalltrains.component';
import { BindingComponent } from './binding/binding.component';

const link:Routes=[
  {
    path:"",component:ViewalltrainsComponent
  },
  {
    path:"food",component:BindingComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ViewalltrainsComponent,
    BindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(link),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
