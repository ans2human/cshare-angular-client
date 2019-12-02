import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"demo",
    component:DemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
