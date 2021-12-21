import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'daugia';
  constructor(){}

  ngOnInit(){
    $(document).ready(function ($) {
      $('.fadeshop').hover(
        function(){
          $(this).find('.captionshop').fadeIn(150);
        },
        function(){
          $(this).find('.captionshop').fadeOut(150);
        }
      );
    });
  }

}
