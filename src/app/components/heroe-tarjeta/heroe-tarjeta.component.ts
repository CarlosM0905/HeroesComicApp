import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  // Inputs
  @Input() heroe: Heroe;
  @Input() index: number;

  // Outputs
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(): void{
    // console.log(this.index);
    this.router.navigate(['/heroe', this.index])
    // this.heroeSeleccionado.emit(this.index);
  }

}
