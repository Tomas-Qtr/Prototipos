import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'protipos';

    titulo1:string="comiditas"
    eslogan1:string="Disfruto las mañanas con cafe"
    imagen1:string='../assets/medialunas.jpg'

    titulo2:string="cofgdgs"
    eslogan2:string="Disfruto dfss con cafe"
    imagen2:string='.sdf'

  constructor() {}

  ngOnInit(): void {
    const btnmenu = document.querySelector(".nav_toggle")
    const menu = document.querySelector(".nav_menu")
    const menu2= document.querySelector(".nav_administracion")
    btnmenu?.addEventListener("click", function(){
      menu?.classList.toggle("nav_menu_visible")
      menu2?.classList.toggle("nav_menu_visible")
    })

    //medotodo scrol
    window.addEventListener("scroll", function(){
      var header = document.querySelector("header")
      header?.classList.toggle("abajo", window.scrollY>50)
    })
  }

}
