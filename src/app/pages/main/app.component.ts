import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curriculumVitae';
  name: string;

  constructor(){
    this.name="Andrés Giovanny Giraldo Pacheco";
  }
}
