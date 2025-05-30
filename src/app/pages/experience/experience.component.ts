import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ExperienceComponent {
  orientation: 'vertical' | 'horizontal' = 'vertical';
  scrollProgress = 0;

  experiences = [
    {
      year: '2021',
      role: 'Instrutor de Informática e Programação',
      company: 'Evolutime – Santos | Set 2021 – Ago 2022',
      summary:
        'Ministrei cursos de Desenvolvimento Web, Games e Informática, além de cuidar da infraestrutura de TI da escola.',
    },
    {
      year: '2022',
      role: 'Suporte Técnico',
      company: 'Jota5 – Santos | Ago 2022 – Jun 2023',
      summary:
        'Suporte técnico de 1º nível, manutenção de redes, computadores e atendimento multicanal.',
    },
    {
      year: '2023',
      role: 'Estagiário em Desenvolvimento',
      company: '7COMm – São Paulo | Jun 2023 – Jun 2024',
      summary:
        'Desenvolvimento de uma plataforma de questionários internos e processamento de PDFs, utilizando Spring Boot, Angular e MySQL.',
    },
    {
      year: '2024',
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

  toggleOrientation() {
    this.orientation =
      this.orientation === 'vertical' ? 'horizontal' : 'vertical';
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.orientation === 'vertical') {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      this.scrollProgress = (scrollTop / docHeight) * 130;
    }
  }
}
