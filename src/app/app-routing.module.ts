import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./core/components";
import { ContactsHomeComponent } from "./pages/contacts-home/contacts-home.component";

const routes: Routes = [
  { path: "**", redirectTo: "home" },
  {
    path: "",
    component: LayoutComponent,
    children: [
      // eager load contact home component while application loading
      {
        path: "home",
        component: ContactsHomeComponent
      },

      // lazy route to load chunk on demand rather including in main app chunk
      {
        path: "favorites",
        loadChildren: () =>
          import("./pages/favorite-contacts/favorite-contacts.module").then(m => m.FavoriteContactsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
