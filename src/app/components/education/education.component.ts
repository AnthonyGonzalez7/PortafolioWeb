import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educacionItems = [
    {title: "Licenciatura en Desarrollo de Software",
     institucion: "UTP", 
     logo:"../assets/logoUTP.jpg",
     time: "2020 - Actual",
    url: "#"},

    {title: "Tecnico en Ingeniería con Especialización en Desarollo de Software", 
    institucion: "UTP", 
    logo:"../assets/logoUTP.jpg", 
    time: "2020 - 2022", 
    url: "https://drive.google.com/file/d/1ivNDeoYuOILYp1sX8SpfRzU-FUFELbrC/view"},

    {title: "Bachiller en Informática", 
    institucion: "CTG", 
    logo:"../assets/logoCTG.jpg", 
    time: "2017 - 2019", 
    url: "https://drive.google.com/file/d/1_qMFlXqqSltmv-aTCEGQHmsHHoVG0xR5/view"},
  
  ];
}
