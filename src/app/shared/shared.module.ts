import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
  exports: [CommonModule, RouterModule, ReactiveFormsModule]
})
export class SharedModule {}
