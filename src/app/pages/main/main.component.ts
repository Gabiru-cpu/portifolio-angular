import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ExperienceComponent } from '../experience/experience.component';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HomeComponent, SkillsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
