import { Component} from '@angular/core';
//indicar de donde va a leer los datos de productos
import {proyecto} from '../proyecto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent {
 proyecto = proyecto;

 nombre = "Erika Nohemi Jimenez Vidal";
 
 share(){
   window.alert('Se ha registrado correctamente');
 }
  
 onNotify(){
   window.alert('Sera notificado cuando el producto esta a la venta');
 }

}