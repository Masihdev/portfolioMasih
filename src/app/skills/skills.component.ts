import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

public skills = [
  {'name': 'JavaScript', 'img': 'js.png'},
  {'name': 'Angular', 'img': 'angular1.png'},
  {'name': 'HTML/CSS', 'img': 'html.png'},
  {'name': 'Scrum', 'img': 'scrum.png'},
  {'name': 'Git', 'img': 'git.png'},
  {'name': 'Design Thinking', 'img': 'design.png'},
  {'name': 'Rest API', 'img': 'rest.png'},
  {'name': 'Test automation', 'img': 'test.png'},
  {'name': 'Database', 'img': 'data.png'}
];


  constructor() { }

  ngOnInit(): void {
  }

}
