import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  nombre: string = "fake name";
  titulo: string = "fake phD";
  objetivo: string = "fake goal";
  foto: string = "fake photo";
  email: string = "fake email";
  celular: string = "fake cel";
  ubicacion: string = "fake city";
  redsocial: string = "fake social";
}
