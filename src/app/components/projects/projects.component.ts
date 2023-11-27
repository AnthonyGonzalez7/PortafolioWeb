import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projectsItems = [
    {title:"ScriptRaptor",
    img:"../assets/ScriptRaptor.jpg", 
    context:"Página web de team freelance de desarrollo de software conformado por estudiantes universitarios.",
    language:"React",
    type:"Colaborativo",
    url:"https://scriptraptor.tech/"},

    {title:"Web de autos",
    img:"../assets/WebAutos.jpg",  
    context:"Web dedicada a review de automoviles, detalla ciertas especificaciones de cada auto.",
    language:"NextJS, TypeScript", 
    type:"Personal", 
    url:"https://webcurso-anthonyjahirr.vercel.app/"},

    {title:"Web de colores",
    img:"../assets/WebIA.jpg",  
    context:"Página web que da recomendaciones de colores, esta misma responde ante cualquier prompt gracias a la implentacion del API de chat GPT.",
    language:"React", 
    type:"Colaborativo", 
    url:"https://github.com/NelsonRodriguez7/SEMESTRALDS9"},

  ]
}
