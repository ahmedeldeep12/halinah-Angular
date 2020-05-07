import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $('.fa-bars ').click(function() {
      $('.wrap-live ul').toggleClass('addLeft')
    })
  }

}
