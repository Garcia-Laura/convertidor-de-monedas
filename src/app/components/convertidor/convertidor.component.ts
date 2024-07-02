import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrl: './convertidor.component.css'
})
export class ConvertidorComponent {
cantidad = 0;
tengo = 'USD';
quiero = 'Euro'
total= 0;
monedas: string[] = ['USD', 'LIBRA', 'EURO']
}
