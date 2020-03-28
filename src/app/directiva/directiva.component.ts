import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {

titulo:string = 'Listado de Cursos';

listaCurso: string[] = ['TypeScript','JavaScript', 'Java SE', 'Python', 'Php'];

habilitar:boolean = true;

  constructor() { }


  setHabilitar(): void {
    this.habilitar = (this.habilitar ==true)? false:true;
  }


}
