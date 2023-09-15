import { Component,OnInit } from '@angular/core';
import {HeaderService} from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService : HeaderService){

  }

  nombre: string = "fake name";
  titulo: string = "fake phD";
  objetivo: string = "fake goal";
  foto: string = "https://....";
  email: string = "fake email";
  celular: string = "fake cel";
  ubicacion: string = "fake city";
  redsocial: string = "fake social";

  ngOnInit(): void {
    this.headerService.getHeader()
    .subscribe( (data: any) => {
      console.log(data);
      alert(data);
      this.nombre = data.name;
      this.titulo = data.titulo;
      this.objetivo = data.objetivo;
      this.foto = data.foto;
      this.email = data.email;
      this.celular = data.cel;
      this.ubicacion = data.ubicacion;
      this.redsocial = data.social.face;
    })
    
  }
}
