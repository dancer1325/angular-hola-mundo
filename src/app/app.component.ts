import { Component } from "@angular/core";

@Component({
  selector: "app-root", // Name of the component to be injected in the html
  templateUrl: "./app.component.html", // Path to find the template
})
export class AppComponent {
  nombre: string = "Fernando";
  apellido: string = "Herrera";
}
