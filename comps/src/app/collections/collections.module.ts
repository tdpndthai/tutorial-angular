import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';


@NgModule({
  declarations: [CollectionsHomeComponent],
  imports: [
    CommonModule,
    CollectionsRoutingModule
  ],
  //xuất ra để cho các module khác có thể gọi được
  //exports:[CollectionsHomeComponent]
})
export class CollectionsModule { }
