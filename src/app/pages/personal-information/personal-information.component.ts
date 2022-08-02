import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {

  name: string;  
  secondName: string;
  dateBirth: string;
  city: string;
  number:string;

  constructor() {
    
    this.name = "Andrés Giovanny";
    this.secondName = "Giraldo Pacheco"
    this.dateBirth = "April 18, 1993"
    this.city = "Bogotá"
    this.number= "3505689117"
  
  }

  ngOnInit(): void {
  }

}
