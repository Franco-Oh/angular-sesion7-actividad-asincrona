import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {
  numero:Number = 1;

  numRepetido:any;

  girarDado(){
    this.numRepetido = this.numero;
    this.numero = Math.round(Math.random() * 5 + 1);
    while (this.numero == this.numRepetido) {
      this.numero = Math.round(Math.random() * 5 + 1);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
