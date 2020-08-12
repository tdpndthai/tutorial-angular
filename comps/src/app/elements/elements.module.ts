import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';


@NgModule({
  declarations: [ElementsHomeComponent],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ],
  //xuất components ra cho các module khác có thể gọi được
  exports:[ElementsHomeComponent]
})
export class ElementsModule { }
