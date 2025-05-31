import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-network',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss'],
})
export class NetworkComponent implements OnInit, OnDestroy {
  connections = [
    {
      name: 'Vinicius Ferreira',
      role: 'UI/UX Designer',
      img: 'https://randomuser.me/api/portraits/men/45.jpg',
      linkedin: 'https://www.linkedin.com/in/viniciusferreiraflorencio/',
    },
    {
      name: 'Gabriel Victorio',
      role: 'Backend Developer',
      img: 'https://randomuser.me/api/portraits/men/35.jpg',
      linkedin: 'https://www.linkedin.com/in/gabrielvictorio/',
    },
    {
      name: 'Diego Marcellino',
      role: 'Backend Developer',
      img: 'https://randomuser.me/api/portraits/men/76.jpg',
      linkedin: 'https://www.linkedin.com/in/diegomarcelino/',
    },
    {
      name: 'Lucas Faria',
      role: 'Backend Developer',
      img: 'https://randomuser.me/api/portraits/men/54.jpg',
      linkedin: 'https://www.linkedin.com/in/lucasfaria/',
    },
    {
      name: 'Nikson Hernandes',
      role: 'Backend Developer',
      img: 'https://randomuser.me/api/portraits/men/39.jpg',
      linkedin: 'https://www.linkedin.com/in/niksonhernandes/',
    },
  ];

  currentIndex = 0;
  autoSlideInterval: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.autoSlideInterval);
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.next(false); // false = não reinicia o intervalo de novo
    }, 10000); // 10 segundos
  }

  resetAutoSlide() {
    clearInterval(this.autoSlideInterval);
    this.startAutoSlide();
  }

  next(reset = true) {
    this.currentIndex = (this.currentIndex + 1) % this.connections.length;
    if (reset) this.resetAutoSlide();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.connections.length) % this.connections.length;
    this.resetAutoSlide();
  }

  goTo(index: number) {
    this.resetAutoSlide();

    const stepsForward = (index - this.currentIndex + this.connections.length) % this.connections.length;
    const stepsBackward = (this.currentIndex - index + this.connections.length) % this.connections.length;

    const direction = stepsForward <= stepsBackward ? 1 : -1;
    const steps = Math.min(stepsForward, stepsBackward);

    let count = 0;
    const interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + direction + this.connections.length) % this.connections.length;
      count++;
      if (count >= steps) {
        clearInterval(interval);
      }
    }, 200);
  }

  getCardClass(index: number): string {
    const diff = (index - this.currentIndex + this.connections.length) % this.connections.length;
    switch (diff) {
      case 0:
        return 'card-center';
      case 1:
        return 'card-right1';
      case 2:
        return 'card-right2';
      case this.connections.length - 1:
        return 'card-left1';
      case this.connections.length - 2:
        return 'card-left2';
      default:
        return 'card-hidden';
    }
  }
}
