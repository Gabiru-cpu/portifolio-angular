import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-network',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss'],
})
export class NetworkComponent implements OnInit, OnDestroy {
  connections = [
    {
      name: 'Vinicius Ferreira',
      role: 'UI/UX Designer',
      img: 'https://i.pinimg.com/736x/39/83/f5/3983f515d4b850dfac211fbc75b0c714.jpg',
      linkedin: 'https://www.linkedin.com/in/viniciusferreiraflorencio/',
    },
    {
      name: 'Gabriel A. Victorio',
      role: 'Backend Developer',
      img: 'https://i.pinimg.com/736x/e4/ee/e5/e4eee543fc4fb843970a04ce79435216.jpg',
      linkedin: 'https://www.linkedin.com/in/gabriel-victorio/',
    },
    {
      name: 'Rafela Santos',
      role: 'RH | DP | R&S',
      img: 'https://i.pinimg.com/736x/0f/f3/f8/0ff3f857da6d3e84439228dd4c757fc8.jpg',
      linkedin: 'https://www.linkedin.com/in/rafaela-santos-gp/',
    },
    {
      name: 'Breno Delluca',
      role: 'Systems Analyst and Software Developer',
      img: 'https://i.pinimg.com/736x/75/32/48/753248e8ba16a6f0bed50ddc8ef28bb5.jpg',
      linkedin: 'https://www.linkedin.com/in/breno-delluca/',
    },
    {
      name: 'Diego Marcellino',
      role: 'Backend Developer',
      img: 'https://i.pinimg.com/736x/a7/1e/14/a71e14510ca4906046294728f6fea758.jpg',
      linkedin: 'https://www.linkedin.com/in/diegomarcelino3/',
    },
    {
      name: 'Lucas Faria',
      role: 'Backend Developer',
      img: 'https://i.pinimg.com/736x/69/9e/6d/699e6d8f056b08addfa0469d65c5fb06.jpg',
      linkedin: 'https://www.linkedin.com/in/lucas-fariasag/',
    },
    {
      name: 'Leila Brum',
      role: 'UI/UX Designer',
      img: 'https://i.pinimg.com/736x/c0/6d/86/c06d861b901db86e08feed5d77866507.jpg',
      linkedin: 'https://www.linkedin.com/in/leila-brum/',
    },
    {
      name: 'Nikson Hernandes',
      role: 'Backend Developer',
      img: 'https://i.pinimg.com/736x/4d/d6/12/4dd61284f9a807178fe1724c95330855.jpg',
      linkedin: 'https://www.linkedin.com/in/nikson-hernandes-55492b207/',
    },
    {
      name: 'Rhayadh Zaparoli',
      role: 'Systems Analyst | Mainframe',
      img: 'https://i.pinimg.com/736x/80/ef/e0/80efe02a63876d79262410909e6e43f4.jpg',
      linkedin: 'https://www.linkedin.com/in/rhayadh-zaparoli-40308124b/',
    },
    {
      name: 'Thaisa de Abreu',
      role: 'UI/UX Designer',
      img: 'https://i.pinimg.com/736x/f6/ab/d2/f6abd26041563538fbfa397979e30cca.jpg',
      linkedin: 'https://www.linkedin.com/in/thaisa-de-abreu-9b084b201/',
    },
    {
      name: 'Caio A. de Andrade',
      role: 'Mobile Developer',
      img: 'https://i.pinimg.com/736x/4a/c5/11/4ac5113b2c8645061729074a64b04694.jpg',
      linkedin: 'https://www.linkedin.com/in/caio-alexandre-de-andrade-06a408245/',
    },
    {
      name: 'Neemias Leal',
      role: 'Mobile Developer',
      img: 'https://i.pinimg.com/736x/40/b6/d3/40b6d328e69886ca6e38b0d3f0c8d119.jpg',
      linkedin: 'https://www.linkedin.com/in/neemias-leal-b83999218/',
    },
    {
      name: 'Kailane Rodrigues',
      role: 'Systems Analysis',
      img: 'https://i.pinimg.com/736x/29/10/34/291034d02d64dd1e33bad7fdec816a17.jpg',
      linkedin: 'https://www.linkedin.com/in/kailane-rodrigues-79b161187/',
    },
    {
      name: 'J. Victor Entenza',
      role: 'Network Support Specialist',
      img: 'https://i.pinimg.com/736x/c4/fd/d0/c4fdd08b2ae30a4f26604e3829eb0622.jpg',
      linkedin: 'https://www.linkedin.com/in/victor-entenza-b56957248/',
    },
    {
      name: 'Helmuth Müller',
      role: 'Software Engineer',
      img: 'https://i.pinimg.com/736x/54/e4/15/54e4154c316ce32a77b80817f7c78b49.jpg',
      linkedin: 'https://www.linkedin.com/in/helmuth-m-n-007/',
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
