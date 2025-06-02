import { Component } from '@angular/core';
import { SafePipe } from '../../pipes/safe.pipe';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-angular';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SafePipe, CommonModule, LucideAngularModule],
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
      title: '.NET MVC com SQL Server',
      description: 'Primeiro contato com MVC utilizando .NET C# em conjunto com Entity Framework.',
      github: 'https://github.com/Gabiru-cpu/Projeto-MVC-DIO',
      videoUrl: 'https://www.youtube.com/embed/NEa8U1-yjtY',
      link: null,
    },
    {
      title: 'Looking for Sounds',
      description: 'Projeto de conclusão do Curso Técnico em Design de Games.',
      github: 'https://github.com/Gabiru-cpu/Looking-for-sounds',
      videoUrl: 'https://www.youtube.com/embed/nN99xpbXLnM',
      link: null,
    },
    {
      title: 'Clone do Steam Unlocked',
      description: 'Projeto tentando recriar um website que consiste em um fórum de jogos.',
      github: 'https://github.com/Gabiru-cpu/CloneSteamUnlocked',
      videoUrl: 'https://www.youtube.com/embed/YIF9xwKM-4o',
      link: null,
    },
    {
      title: 'MandarinBr Projeto',
      description: 'Website responsivo criado durante o processo seletivo.',
      github: 'https://github.com/Gabiru-cpu/MandarinBrProject',
      videoUrl: 'https://www.youtube.com/embed/4yqyld7i6FA',
      link: 'https://melodic-fudge-bbfe48.netlify.app',
    },
    {
      title: 'Quiz Grupo 2',
      description: 'Projeto desenvolvido com finalidade de fechar a apresentação de Arquitetura.',
      github: 'https://github.com/Gabiru-cpu/Quiz-ADS-grupo2',
      videoUrl: 'https://www.youtube.com/embed/_6Vk7t_tFdY',
      link: null,
    },
    {
      title: '.NET Web API com SQL Server',
      description: 'Primeiro contato com APIs utilizando .NET C#.',
      github: 'https://github.com/Gabiru-cpu/Modulo-API-DIO',
      videoUrl: 'https://www.youtube.com/embed/8dxvuRxRfTE',
      link: null,
    },
    {
      title: 'Primeiro contato com desenvolvimento Web - Nlw3',
      description: 'Meu primeiro contato fazendo um projeto chamado Happy.',
      github: null,
      videoUrl: 'https://www.youtube.com/embed/-4fvAqXiLtk',
      link: null,
    },
    {
      title: "Rum'n Boom",
      description: 'Jogo Top-Down desenvolvido em grupo com o motor gráfico Unity.',
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
