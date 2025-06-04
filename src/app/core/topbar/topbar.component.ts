import { Component, OnInit } from '@angular/core';
import { LucideAngularModule, Menu, Sun, Moon, Languages } from 'lucide-angular';
import { AnimatorService } from '../../services/animator.service';
import { MenuService } from '../../services/menu.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule ,LucideAngularModule, TranslateModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent implements OnInit {
  // Referências aos ícones
  readonly Menu = Menu;
  readonly Sun = Sun;
  readonly Moon = Moon;
  readonly Languages = Languages;

  isDarkMode = false;

  constructor(
    private animatorService: AnimatorService,
    private menuService: MenuService,
    private translate: TranslateService
  ) {
    // Define o idioma padrão como 'pt'
    this.translate.setDefaultLang('pt');

    // Usa o idioma salvo no localStorage ou 'pt' como padrão
    const savedLang = localStorage.getItem('lang') || 'pt';
    this.translate.use(savedLang);
  }

  ngOnInit() {
    // Verifica o tema salvo no localStorage ou prefere o light
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    this.applyTheme();
  }

  toggleLanguage() {
    const currentLang = this.translate.currentLang;
    const newLang = currentLang === 'pt' ? 'en' : 'pt';
    this.translate.use(newLang);
    localStorage.setItem('lang', newLang);
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  private applyTheme() {
    document.documentElement.setAttribute('data-theme', this.isDarkMode ? 'dark' : 'light');
  }

  toggleMenu() {
    this.animatorService.emitirToggleGirar();
    this.menuService.toggleMenu();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}