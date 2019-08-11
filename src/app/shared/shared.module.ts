import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedComponentsModule } from "./components/shared-components.module";

@NgModule({
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedComponentsModule
  ]
})
export class SharedModule {}
