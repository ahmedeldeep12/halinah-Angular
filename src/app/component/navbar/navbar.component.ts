import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $('.name-user').click(function(e) {
      e.preventDefault();
      $('.more').toggle(300)
    });

  }

}
