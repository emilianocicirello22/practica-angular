import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.css']
})
export class ProvinciasComponent implements OnInit {

  constructor() { }

  Provincias = [
    {
      "Provincia": "Buenos Aires",
      "Capital": "La plata"
    },
    {
      "Provincia": "Santa Fe",
      "Capital": "Santa Fe"
    },
    {
      "Provincia": "La Pampa",
      "Capital": "Santa Rosa"
    },
    {
      "Provincia": "Cordoba",
      "Capital": "Cordoba"
    },
    {
      "Provincia": "Mendoza",
      "Capital": "Mendoza"
    },
    {
      "Provincia": "Entre Ríos",
      "Capital": "Paraná"
    },
    {
      "Provincia": "Corrientes",
      "Capital": "Resistencia"
    }
  ];

  ngOnInit(): void {
  }

}
