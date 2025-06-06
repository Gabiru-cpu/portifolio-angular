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
      course: 'EDU_COURSE_FATEC',
      date: 'EDU_DATE_FATEC',
      description: 'EDU_DESC_FATEC',
    },
    {
      institution: 'Evolutime',
      course: 'EDU_COURSE_EVOLUTIME',
      date: 'EDU_DATE_EVOLUTIME',
      description: 'EDU_DESC_EVOLUTIME',
    },
    {
      institution: 'Online',
      course: 'EDU_COURSE_ONLINE',
      date: 'EDU_DATE_ONLINE',
      description: 'EDU_DESC_ONLINE',
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
      const walk = (x - this.startX) * 1;
      container.scrollLeft = this.scrollLeft - walk;
    });
  }
}
