import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/services/heroes.service';
import { HeroesService } from './../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService
    ) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this._heroesService.getHeroe(params.id);
    });
   }

  ngOnInit(): void {
  }

}
