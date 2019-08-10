import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { TopbarComponent } from "./topbar/topbar.component";
import { LayoutComponent } from "./layout/layout.component";
import { LeftNavigationComponent } from "./left-navigation/left-navigation.component";

@NgModule({
  declarations: [TopbarComponent, LeftNavigationComponent, LayoutComponent],
  imports: [RouterModule, CommonModule],
  exports: [LayoutComponent]
})
export class ComponentsModule {}
