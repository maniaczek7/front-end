import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mailMe() {
    console.log('Sending email');
    var mail = 'mailto:r.michniewski@gmail.com?subject=Kontakt ze strony rmichniewski.eu';
    location.href = mail;
  }

  callMe() {
    console.log('Calling');
    var phone = 'tel:+48604055174';
    location.href = phone;
  }

  findMe() {
    console.log('Searc hing');
    //location.href = 'https://goo.gl/maps/jAtEofAmeQ3q9AwL9';
    window.open('https://goo.gl/maps/jAtEofAmeQ3q9AwL9');
  }
}
