import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public cliente: Cliente = new Cliente();

  public titulo:string = "Registrar Cliente";

  public errores: string[];

  constructor(private clienteService: ClienteService,
     private router:Router,
     private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarCliente()
  }

  cargarCliente(): void {
      this.activatedRoute.params.subscribe(params => {
        let id = params['id']
        if(id){
          this.clienteService.getCliente(id).subscribe(
            (cliente) => this.cliente = cliente
          )
        }
      })
  }

  public create(): void {
    console.log("click");
    console.log(this.cliente);
    this.clienteService.createCliente(this.cliente)
    .subscribe(
      cliente => {
        this.router.navigate(['/clientes'])
        swal('Nuevo Cliente',`Cliente ${cliente.nombre} creado con exito`, 'success')
      },
      err => {
        this.errores = err.error.errors as string[];

      }
    );
  }

  update():void {
    this.clienteService.update(this.cliente)
      .subscribe(
        (cliente) => {
            this.router.navigate(['/clientes'])
            swal('Cliente Actualizado', `Cliente ${cliente.nombre} actualizado con exito `, 'success')
        },
        err => {
          this.errores = err.error.errors as string[];
          
        }
      )
  }

}
