import { Component, OnInit, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {
  numero:Number = 1;
  numRepetido:any;
  temblar = false;

  numAzar(){
    this.numero = Math.round(Math.random() * 5 + 1);
    while (this.numero == this.numRepetido) {
      this.numero = Math.round(Math.random() * 5 + 1);
    }
  }

  girarDado(){
    this.temblar = !this.temblar;
    this.numRepetido = this.numero;
    setTimeout(() => {
      this.numAzar();
    }, 50);
    setTimeout(() => {
      this.numAzar();
    }, 100);
    setTimeout(() => {
      this.numAzar();
    }, 150);
    setTimeout(() => {
      this.numAzar();
    }, 200);
    setTimeout(() => {
      this.numAzar();
    }, 250);
    setTimeout(() => {
      this.numAzar();
    }, 300);
    setTimeout(() => {     
      this.numAzar();
      this.temblar = !this.temblar;
    }, 400);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
