import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent implements OnInit {

  instituteOne : String;
  instituteTwo : String;
  titleOne: String;
  titleTwo: String;
  constructor() {

    this.instituteOne = 'National Learning Service Sena';
    this.instituteTwo = 'Technological University of Pereira UTP';
    this.titleOne = 'Technologist in Analysis and development of Information Systems';
    this.titleTwo= 'Diploma Web Application Development';
   }

  ngOnInit(): void {
  }

}
