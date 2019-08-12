import { Component } from "@angular/core";

interface INavItem {
  label: string;
  icon: string;
  path: string;
}

@Component({
  selector: "left-navigation",
  templateUrl: "left-navigation.component.html"
})
export class LeftNavigationComponent {
  navItems: Array<INavItem> = [
    {
      label: "Contacts",
      icon: "home",
      path: "/"
    },
    {
      label: "Favorites",
      icon: "favorite",
      path: "/favorites"
    }
  ];
}
