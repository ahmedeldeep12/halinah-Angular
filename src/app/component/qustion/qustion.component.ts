import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-qustion',
  templateUrl: './qustion.component.html',
  styleUrls: ['./qustion.component.scss']
})
export class QustionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.answers').click(function() {
      $(this).addClass('select').parent().siblings().find('.select').removeClass('select')
    })
  }


}
