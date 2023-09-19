import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { mainRoute } from './main-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoute)
  ]
})
export class MainModule { }
