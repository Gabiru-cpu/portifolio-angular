import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ExperienceComponent } from '../experience/experience.component';
import { SkillsComponent } from '../skills/skills.component';
import { EducationComponent } from '../education/education.component';
import { NetworkComponent } from '../network/network.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HomeComponent, SkillsComponent, ExperienceComponent, EducationComponent, NetworkComponent, ProjectsComponent, ContactComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
