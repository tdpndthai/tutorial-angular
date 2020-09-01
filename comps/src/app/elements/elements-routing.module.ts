import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ElementsHomeComponent } from "./elements-home/elements-home.component";

const routes: Routes = [
  {
    path: "", //do đã định nghĩa đường dẫn trong file app-routing.module rồi nên nếu vẫn để thì nó thành elements/elements,
    //đặt là chuỗi rỗng thì nó sẽ thế này elements/ ''
    component: ElementsHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElementsRoutingModule {}
