import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HomeComponent, ExperienceComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
