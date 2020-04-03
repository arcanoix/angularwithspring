import { Component, OnInit } from '@angular/core';
import {Cliente} from './cliente';
import {ClienteService} from './cliente.service';
import swal from 'sweetalert2'
import  {tap} from 'rxjs/operators';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().pipe(
      tap(clientes => {
        console.log('ClienteService: tap3')
        clientes.forEach( cliente=> {
          console.log(cliente.nombre);
        })
      })
    )
    .subscribe(
        clientes => this.clientes = clientes
    );
  }

  delete(cliente: Cliente): void {
    swal({
      title: 'Esta seguro?',
      text: `¿Seguro que desea eliminar al cliente ${cliente.nombre} ${cliente.apellido}`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!'
    }).then((result) => {
      if (result.value) {
        this.clienteService.delete(cliente.id).subscribe(
          response => {
            this.clientes = this.clientes.filter(cli => cli !== cliente)
            swal(
              'Eliminado!',
              'El cliente a sido eliminado.',
              'success'
            )
          }
        )
        
      }
    })
  }

}
