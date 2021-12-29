import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { BookComponent } from './book/book.component';
import { FundComponent } from './fund/fund.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent },
  // {path:`book/:id`,component:BookComponent },
  {path:`fund/:id`,component:FundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
