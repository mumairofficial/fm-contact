import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./core/components";
import { ContactsHomeComponent } from "./pages/contacts-home/contacts-home.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      // eager load contact home component while application loading
      {
        path: "",
        component: ContactsHomeComponent
      },

      // lazy route to load chunk on demand rather including in main app chunk
      {
        path: "favorites",
        loadChildren: () =>
          import("./pages/favorite-contacts/favorite-contacts.module").then(m => m.FavoriteContactsModule)
      }
    ]
  },

  // check if path does not match with any of above the redirect to hom
  { path: "**", redirectTo: "/" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
