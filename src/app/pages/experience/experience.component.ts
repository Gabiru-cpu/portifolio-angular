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
      role: 'EXP_1_ROLE',
      company: 'EXP_1_COMPANY',
      summary: 'EXP_1_SUMMARY',
      achievements: [
        'EXP_1_ACHIEVEMENTS.0',
        'EXP_1_ACHIEVEMENTS.1',
        'EXP_1_ACHIEVEMENTS.2'
      ]
    },
    {
      role: 'EXP_2_ROLE',
      company: 'EXP_2_COMPANY',
      summary: 'EXP_2_SUMMARY',
      achievements: [
        'EXP_2_ACHIEVEMENTS.0',
        'EXP_2_ACHIEVEMENTS.1',
        'EXP_2_ACHIEVEMENTS.2'
      ]
    },
    {
      role: 'EXP_3_ROLE',
      company: 'EXP_3_COMPANY',
      summary: 'EXP_3_SUMMARY',
      achievements: [
        'EXP_3_ACHIEVEMENTS.0',
        'EXP_3_ACHIEVEMENTS.1',
        'EXP_3_ACHIEVEMENTS.2'
      ]
    },
    {
      role: 'EXP_4_ROLE',
      company: 'EXP_4_COMPANY',
      summary: 'EXP_4_SUMMARY',
      achievements: [
        'EXP_4_ACHIEVEMENTS.0',
        'EXP_4_ACHIEVEMENTS.1',
        'EXP_4_ACHIEVEMENTS.2',
        'EXP_4_ACHIEVEMENTS.3',
        'EXP_4_ACHIEVEMENTS.4'
      ]
    }
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
