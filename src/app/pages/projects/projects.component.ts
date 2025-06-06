import { Component } from '@angular/core';
import { SafePipe } from '../../pipes/safe.pipe';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-angular';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SafePipe, CommonModule, LucideAngularModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  readonly ExternalLink = ExternalLink;
  readonly Github = Github;
  readonly ChevronLeft = ChevronLeft;
  readonly ChevronRight = ChevronRight;

  projects = [
    {
      title: 'PROJECT_1_TITLE',
      description: 'PROJECT_1_DESC',
      github: 'https://github.com/Gabiru-cpu/Projeto-MVC-DIO',
      videoUrl: 'https://www.youtube.com/embed/NEa8U1-yjtY',
      link: null,
    },
    {
      title: 'PROJECT_2_TITLE',
      description: 'PROJECT_2_DESC',
      github: 'https://github.com/Gabiru-cpu/Looking-for-sounds',
      videoUrl: 'https://www.youtube.com/embed/nN99xpbXLnM',
      link: null,
    },
    {
      title: 'PROJECT_3_TITLE',
      description: 'PROJECT_3_DESC',
      github: 'https://github.com/Gabiru-cpu/CloneSteamUnlocked',
      videoUrl: 'https://www.youtube.com/embed/YIF9xwKM-4o',
      link: null,
    },
    {
      title: 'PROJECT_4_TITLE',
      description: 'PROJECT_4_DESC',
      github: 'https://github.com/Gabiru-cpu/MandarinBrProject',
      videoUrl: 'https://www.youtube.com/embed/4yqyld7i6FA',
      link: 'https://melodic-fudge-bbfe48.netlify.app',
    },
    {
      title: 'PROJECT_5_TITLE',
      description: 'PROJECT_5_DESC',
      github: 'https://github.com/Gabiru-cpu/Quiz-ADS-grupo2',
      videoUrl: 'https://www.youtube.com/embed/_6Vk7t_tFdY',
      link: null,
    },
    {
      title: 'PROJECT_6_TITLE',
      description: 'PROJECT_6_DESC',
      github: 'https://github.com/Gabiru-cpu/Modulo-API-DIO',
      videoUrl: 'https://www.youtube.com/embed/8dxvuRxRfTE',
      link: null,
    },
    {
      title: 'PROJECT_7_TITLE',
      description: 'PROJECT_7_DESC',
      github: null,
      videoUrl: 'https://www.youtube.com/embed/-4fvAqXiLtk',
      link: null,
    },
    {
      title: "PROJECT_8_TITLE",
      description: 'PROJECT_8_DESC',
      github: 'https://github.com/Gabiru-cpu/Rum-n-Boom',
      videoUrl: 'https://www.youtube.com/embed/2GO6gWY7aCo',
      link: null,
    },
  ];


  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
  }

  previous() {
    this.currentIndex =
      (this.currentIndex - 1 + this.projects.length) % this.projects.length;
  }

  getCardClass(index: number): string {
    const diff = (index - this.currentIndex + this.projects.length) % this.projects.length;
    switch (diff) {
      case 0:
        return 'center';
      case 1:
        return 'right1';
      case 2:
        return 'right2';
      case this.projects.length - 1:
        return 'left1';
      case this.projects.length - 2:
        return 'left2';
      default:
        return 'hidden';
    }
  }
}
