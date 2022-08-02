import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './pages/main/app.component';
import { KnowledgeComponent } from './pages/knowledge/knowledge.component';
import { PersonalInformationComponent } from './pages/personal-information/personal-information.component';
import { WorkExperienceComponent } from './pages/work-experience/work-experience.component';
import { FamilyReferenceComponent } from './pages/family-reference/family-reference.component';
import { PersonalReferenceComponent } from './pages/personal-reference/personal-reference.component';

@NgModule({
  declarations: [
    AppComponent,
    KnowledgeComponent,
    PersonalInformationComponent,
    WorkExperienceComponent,
    FamilyReferenceComponent,
    PersonalReferenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
