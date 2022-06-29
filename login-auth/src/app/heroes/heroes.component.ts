import { Component, OnInit,Input } from '@angular/core';
import { HeroService } from '../../app/service/hero.service';
import { MessageService } from '../service/message.service';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:Hero[]=[];
  selectedHero?:Hero;
  @Input() name?:string;
  
  constructor(private heroService: HeroService,private messageService: MessageService) { }

  ngOnInit(): void {

    this.getHeroes();
  }

  onSelect(hero:Hero){
    this.selectedHero = hero;

    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  

  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((data)=> this.heroes=data)
  }

}
