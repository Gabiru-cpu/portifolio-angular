import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-network',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss'],
})
export class NetworkComponent {
  connections = [
    {
      name: 'Ana Silva',
      role: 'Desenvolvedora Frontend',
      company: 'Tech Solutions',
      img: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Bruno Costa',
      role: 'Engenheiro de Dados',
      company: 'DataCorp',
      img: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Carla Souza',
      role: 'UI/UX Designer',
      company: 'DesignLab',
      img: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
      name: 'Diego Rocha',
      role: 'Desenvolvedor Full Stack',
      company: 'WebWorks',
      img: 'https://randomuser.me/api/portraits/men/76.jpg',
    },
    {
      name: 'Eduarda Lima',
      role: 'Product Manager',
      company: 'InovaTech',
      img: 'https://randomuser.me/api/portraits/women/33.jpg',
    },
  ];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.connections.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.connections.length) %
      this.connections.length;
  }

  getCardClass(index: number): string {
    const diff =
      (index - this.currentIndex + this.connections.length) %
      this.connections.length;
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
