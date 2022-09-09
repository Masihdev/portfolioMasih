import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  journey = [
{
  'img':'walk-line.png',
  'title':'MY JOURNEY BEGAN',
  'text':'in the information technology center at Kabul University. Within an year I became familiar with hardware basics, networking basics, linux and computer trouble shooting. At the same time I worked in the German department of the faculty of language and literature as an IT administrator.'
},
{
  'img':'heart-line.png',
  'title':'MY PASSION',
  'text':'have I found in coding, when I wanted to know precisely, how the computers are working with 0 and 1. After investing hundreds of hours in searching I realized that I am now in love with all the information about programming, because I wanted to recieve more and more info on how to code.'
},
{
  'img':'search-line.png',
  'title':'MY SEARCH',
  'text':'began on how to bring my skills to a professional level. I started to learn computer science at Erfurt University of Applied Sciences. Due to the financial difficulties, I had to terminate my study after a semester. Luckily I found out about Developer Academy, where my coding dreams came true.'
},{
  'img':'flight-takeoff-line.png',
  'title':'MY GOAL',
  'text':'is to learn more technologies, become a skilled software developer and make the web user-friendly. As a junior developer I would like to apply my experience in new projects.'
}

];



  constructor() { }

  ngOnInit(): void {
  }

}
