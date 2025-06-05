import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule],
})
export class ExperienceComponent implements OnInit {
  orientation: 'vertical' | 'horizontal' = 'vertical';
  scrollProgress = 0;
  isDesktop = true;

  experiences = [
    {
      role: 'Instrutor de Informática e Programação',
      company: 'Evolutime – Santos | Set 2021 – Ago 2022',
      summary:
        'Ministrei cursos de Desenvolvimento Web, Games e Informática, além de cuidar da infraestrutura de TI da escola.',
    },
    {
      role: 'Suporte Técnico',
      company: 'Jota5 – Santos | Ago 2022 – Jun 2023',
      summary:
        'Suporte técnico de 1º nível, manutenção de redes, computadores e atendimento multicanal.',
    },
    {
      role: 'Estagiário em Desenvolvimento',
      company: '7COMm – São Paulo | Jun 2023 – Jun 2024',
      summary:
        'Desenvolvimento de uma plataforma de questionários internos e processamento de PDFs, utilizando Spring Boot, Angular e MySQL.',
    },
    {
      role: 'Desenvolvedor Full Stack Júnior',
      company: '7COMm – São Paulo | Jun 2024 – Presente',
      summary:
        'Atuo na manutenção e evolução de sistemas legados para o Bradesco, além de desenvolver soluções com IA como ChatDev, ChatÁgil e CNPJTNextGen.',
      achievements: [
        'Implantação de IA generativa para automação de processos internos.',
        'Contribuição na modernização de sistemas legados.',
        'Criação de microsserviços utilizando Spring Boot e Angular.',
      ],
    },
  ];

  ngOnInit() {
    this.checkScreenSize();
  }

  toggleOrientation() {
    const button = document.querySelector('.toggle-button');
    button?.classList.add('animate');
    setTimeout(() => button?.classList.remove('animate'), 500);

    this.orientation = this.orientation === 'vertical' ? 'horizontal' : 'vertical';
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.orientation === 'vertical') {
      const timelineContainer = document.querySelector('.experience-container');
      if (!timelineContainer) return;

      const containerRect = timelineContainer.getBoundingClientRect();
      const containerTop = containerRect.top + window.scrollY;
      const containerHeight = containerRect.height;
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Define quanto antes do topo queremos que comece (25% da altura da viewport)
      const startOffset = viewportHeight * 1;

      // Calcula a posição de início (quando o topo do container está startOffset pixels acima do topo da viewport)
      const startPosition = containerTop - startOffset;

      // Calcula a posição de término (base do container)
      const endPosition = containerTop + containerHeight;

      // Calcula o progresso (0 a 1) considerando o offset
      let scrollRelative = (scrollPosition - startPosition) / (endPosition - startPosition);

      // Limita entre 0% e 100%
      this.scrollProgress = Math.min(Math.max(scrollRelative * 100, 0), 100);
    }
  }

  @HostListener('window:resize', [])
  checkScreenSize() {
    this.isDesktop = window.innerWidth > 767;
  }
}
