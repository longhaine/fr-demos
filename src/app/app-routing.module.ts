import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
  {path:'',redirectTo:'/fr-carousel',pathMatch:'full'},
  {path:'fr-carousel',component:CarouselComponent},
  {path: '**', redirectTo: '/fr-carousel'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
