import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public cliente: Cliente = new Cliente();

  public titulo:string = "Registrar Cliente"

  constructor(private clienteService: ClienteService, private router:Router) { }

  ngOnInit(): void {
  }

  public create(): void {
    console.log("click");
    console.log(this.cliente);
    this.clienteService.createCliente(this.cliente).subscribe(
      response => this.router.navigate(['/clientes'])
    );
  }

}
