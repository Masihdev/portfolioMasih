import { Component, OnInit } from '@angular/core';
//import { resetFakeAsyncZone } from '@angular/core/testing';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
   name!: string;
   email!: any;
   message!: string;

   
  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    // if (this.myform.valid) {
    //   console.log("Form Submitted!");
    // }
   
    console.log(this.name);
    console.log(this.email);
    console.log(this.message);

  //   this.name = '';
  //   this.email = '';
  //   this.message = '';

  }

}

// 
// (click)="sendMessage()"


