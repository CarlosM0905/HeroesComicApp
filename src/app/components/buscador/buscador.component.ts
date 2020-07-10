import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from 'src/app/services/heroes.service';
import { HeroesService } from './../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes: Heroe[];
  termino: string;
  visible = false;

  constructor(private _activatedRoute: ActivatedRoute,
              private router: Router,
              private heroesService: HeroesService) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.termino = params.termino;
      this.heroes = this.heroesService.buscarHeroes(params.termino);
    });
  }

  verHeroe(id: number): void{
    this.router.navigate(['/heroe', id]);
  }



  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
