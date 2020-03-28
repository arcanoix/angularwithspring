import { Component, OnInit } from '@angular/core';
import {Cliente} from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [
    {id: 1, nombre: 'gustavo', apellido:'herrera', email:'gus@gmail.com', createAt:'2017-11-20'},
    {id: 1, nombre: 'dairy', apellido:'sanabria', email:'day@gmail.com', createAt:'2017-11-20'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
