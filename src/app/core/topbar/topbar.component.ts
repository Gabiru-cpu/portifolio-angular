import { Component } from '@angular/core';
import { LucideAngularModule, Menu, Sun, Languages } from 'lucide-angular';
import { AnimatorService } from '../../services/animator.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent {
  // Referências aos ícones
  readonly Menu = Menu;
  readonly Sun = Sun;
  readonly Languages = Languages;

  isDarkMode = false;

  constructor(private animatorService: AnimatorService) {}

  toggleLanguage() {
    console.log('Trocar idioma');
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    console.log(`Tema ${this.isDarkMode ? 'Escuro' : 'Claro'}`);
  }

  toggleMenu() {
    console.log('Abrir menu lateral');
    this.animatorService.emitirToggleGirar();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
}
