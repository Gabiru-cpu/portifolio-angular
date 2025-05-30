import { Component } from '@angular/core';
import { SafePipe } from '../../pipes/safe.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SafePipe, CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects = [
    {
      description: 'Portfólio pessoal feito em Angular e Tailwind',
      link: 'https://github.com/Gabiru-cpu/portifolio-angular',
      videoUrl: 'https://www.youtube.com/embed/SEU_VIDEO_ID_1',
    },
    {
      description: 'Sistema de cadastro com Spring Boot',
      link: 'https://github.com/Gabiru-cpu/seu-projeto',
      videoUrl: 'https://www.youtube.com/embed/SEU_VIDEO_ID_2',
    },
    {
      description: 'Jogo plataforma feito em Unity',
      link: 'https://gabiru-cpu.itch.io/seu-jogo',
      videoUrl: 'https://www.youtube.com/embed/SEU_VIDEO_ID_3',
    },
    {
      description: 'CRUD em Rust com Tauri',
      link: 'https://github.com/Gabiru-cpu/tauri-rust-crud',
      videoUrl: 'https://www.youtube.com/embed/SEU_VIDEO_ID_4',
    },
    {
      description: 'Sistema Full Stack com Spring e Angular',
      link: 'https://github.com/Gabiru-cpu/fullstack-app',
      videoUrl: 'https://www.youtube.com/embed/SEU_VIDEO_ID_5',
    },
  ];

  currentIndex = 0;
  selectedVideo: string | null = null;

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

  openVideo(videoUrl: string) {
    this.selectedVideo = videoUrl;
  }

  closeVideo() {
    this.selectedVideo = null;
  }
}
