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
  //https://www.cucinare.tv/wp-content/uploads/2021/09/D%C3%ADa-Internacional-del-Caf%C3%A9-2021.jpg
    titulo2:string="Cafes"
    eslogan2:string="La mejor preparacion de cafes estan aca"
    imagen2:string='../assets/maquinas-para-cafeteria.png'

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
