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
      name: 'Ana Silva',
      role: 'Desenvolvedora Frontend',
      company: 'Tech Solutions',
      img: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Bruno Costa',
      role: 'Engenheiro de Software',
      company: 'InovaTech',
      img: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Carla Souza',
      role: 'Product Owner',
      company: 'NextLevel',
      img: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
      name: 'Daniel Oliveira',
      role: 'UI/UX Designer',
      company: 'DesignLab',
      img: 'https://randomuser.me/api/portraits/men/76.jpg',
    },
    {
      name: 'Eduardo Lima',
      role: 'Desenvolvedor Full Stack',
      company: 'Freelancer',
      img: 'https://randomuser.me/api/portraits/men/85.jpg',
    },
  ];

  groupedConnections: any[][] = [];
  currentIndex = 0;
  autoplayInterval: any;

  ngOnInit() {
    this.groupedConnections = this.chunkArray(this.connections, 3);
    this.startAutoplay();
  }

  ngOnDestroy() {
    clearInterval(this.autoplayInterval);
  }

  chunkArray(arr: any[], size: number) {
    const res = [];
    for (let i = 0; i < arr.length; i += size) {
      res.push(arr.slice(i, i + size));
    }
    return res;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.groupedConnections.length) %
      this.groupedConnections.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.groupedConnections.length;
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.next();
    }, 4000);
  }
}
