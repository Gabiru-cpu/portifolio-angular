import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LucideAngularModule, GraduationCap, ArrowRight } from 'lucide-angular';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, TranslateModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

    readonly GraduationCap = GraduationCap; readonly ArrowRight = ArrowRight;

  educations = [
    {
      institution: 'Fatec Rubens Lara',
      course: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      date: 'Agosto 2024',
      description: 'Formação superior focada em desenvolvimento de sistemas, backend, frontend e arquitetura de software.',
      // link: 'https://drive.google.com/drive/folder_link'
    },
    {
      institution: 'Evolutime',
      course: 'Técnico em Design e Desenvolvimento de Jogos',
      date: 'Agosto 2020',
      description: 'Curso técnico com foco em desenvolvimento de jogos digitais, design, arte e programação.',
      // link: 'https://drive.google.com/drive/folder_link'
    },

    {
      institution: 'Cursos Online',
      course: 'Certificações Diversas',
      date: 'Atualmente',
      description: 'Bradesco, USP, São Judas, DIO, Udemy e outros.',
      link: 'https://drive.google.com/drive/folders/1Kv-ZGFEasx4nqjNxJSEakYsehtHyyDUN?usp=sharing'
    }
  ];

  isDown = false;
  startX = 0;
  scrollLeft = 0;

  ngAfterViewInit() {
    const container = this.scrollContainer.nativeElement as HTMLElement;

    container.addEventListener('mousedown', (e) => {
      this.isDown = true;
      container.classList.add('active');
      this.startX = e.pageX - container.offsetLeft;
      this.scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
      this.isDown = false;
      container.classList.remove('active');
    });

    container.addEventListener('mouseup', () => {
      this.isDown = false;
      container.classList.remove('active');
    });

    container.addEventListener('mousemove', (e) => {
      if (!this.isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - this.startX) * 1; // 👈 Diminui a velocidade (era 1.5)
      container.scrollLeft = this.scrollLeft - walk;
    });
  }
}
