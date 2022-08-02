import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyReferenceComponent } from './pages/family-reference/family-reference.component';
import { KnowledgeComponent } from './pages/knowledge/knowledge.component';
import { PersonalInformationComponent } from './pages/personal-information/personal-information.component';
import { PersonalReferenceComponent } from './pages/personal-reference/personal-reference.component';
import { WorkExperienceComponent } from './pages/work-experience/work-experience.component';

const routes: Routes = [
  {
    path:'personal-information',
    component: PersonalInformationComponent
  },
  {
    path:'knowledge',
    component: KnowledgeComponent
  },
  
  {
    path:'work-experience',
    component: WorkExperienceComponent
  },
  {
    path:'family-reference',
    component: FamilyReferenceComponent
  },
  {
    path:'personal-reference',
    component: PersonalReferenceComponent
  }
 

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
