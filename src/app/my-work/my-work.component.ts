import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  public types = [
    { 'name': 'All', 'active': true },
    { 'name': 'Angular', 'active': false },
    { 'name': 'JavaScript', 'active': false }
  ]; 

  public projects = [
    {
      'name': 'Pokédex',
      'type': 'JavaScript',
      'img': 'pokedex.png',
      'github': 'https://github.com/Masihdev/PokemonPortfolio',
      'description': 'Based on Javascript and REST API.',
      'path': 'https://pokedex.masihullah-massudi.de/'
    },
    {
      'name': 'Ring of Fire',
      'type': 'Angular',
      'img': 'ringoffire.png',
      'github': 'https://github.com/Masihdev/ringofire',
      'description': 'Multi-user-app based on Angular and Firebase',
      'path': 'https://ringoffire.masihullah-massudi.de/'
    },
    {
      'name': 'Join',
      'type': 'JavaScript',
      'img': 'join.png',
      'github': 'https://github.com/Masihdev/CanbanPortfolio',
      'description': 'Task management system based on JavaScript',
      'path': 'https://join.masihullah-massudi.de/'
    },
    {
      'name': 'El Pollo Loco',
      'type': 'JavaScript',
      'img': 'el-pollo-loco.png',
      'github': 'https://github.com/Masihdev/El-Pollo-Loco',
      'description': 'Object-oriented jump-and-run-game based on JavaScript.',
      'path': 'https://elpolloloco.masihullah-massudi.de/'
    }
    ]

  
  constructor() { }

  ngOnInit(): void {
  }

   /**
   * the clicked project type is marked as active, all others as inactive
   * @param i - index of the type to be marked as active
   */
    markTypeAsActive(i: number) {
      for (let index = 0; index < this.types.length; index++) {
        this.types[index].active = (index == i);
      }
    }
  

/**
   * filters the projects that meet the clicked type
   * @param i - index of project
   * @returns boolean - true, if project is of the active type
   */
 filterProjects(i: number) {
  let activeType = this.types.find(type => type.active);
  if (activeType?.name == 'All') {
    return true;
  } else {
    return activeType?.name == this.projects[i].type;
  }
}
}


