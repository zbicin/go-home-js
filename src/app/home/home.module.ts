import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { UiModule } from '../ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    UiModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
