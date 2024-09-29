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
monedas: string[] = ['USD', 'LIBRA', 'EURO'];

convertir() {
  console.log('metdodong')
  switch (this.tengo) {
    case 'USD':
      if(this.quiero === 'USD')(
        this.total = this.cantidad
      )
      if(this.quiero === 'LIBRA')(
        this.total = this.cantidad * 0.78
      ) 
      if(this.quiero === 'EURO')(
        this.total = this.cantidad * 0.93
      ) 
      break
      case 'LIBRA':
        if(this.quiero === 'LIBRA')(
          this.total = this.cantidad
        )
        if(this.quiero === 'USD')(
          this.total = this.cantidad * 1.27
        ) 
        if(this.quiero === 'EURO')(
          this.total = this.cantidad * 1.18
        ) 
      break
      case 'EURO':
        if(this.quiero === 'EURO')(
          this.total = this.cantidad
        )
        if(this.quiero === 'USD')(
          this.total = this.cantidad * 1.08
        ) 
        if(this.quiero === 'LIBRA')(
          this.total = this.cantidad * 0.85
        ) 
      break
  }
  
}
}

