import { Component } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  booleanoHola = false;
  cantAlumnos = 10;
  posts = [{"nombre": "Cami","likes":20},{"nombre": "Juan","likes":4000}];

  constructor(private peticionesHttp: PeticionesService) {
      this.prueba();
      this.camila();
  }

  prueba() {
    
    this.peticionesHttp.getPosts().subscribe( (posts: any[]) => { 
      for(let i=0; i< posts.length; i++){
        console.log(posts[i].title);
      }
    });


    
    
  }

  camila(){}

  

}
