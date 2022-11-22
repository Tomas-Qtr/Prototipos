import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.scss']
})
export class SeccionComponent implements OnInit {

  @Input() tiuloSeccion:string | undefined
  @Input() esloganSeccion:string | undefined
  @Input() imagenSeccion:string | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
