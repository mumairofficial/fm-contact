import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core";

import { ContactsHomeModule } from "./pages/contacts-home/contacts-home.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, ContactsHomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
