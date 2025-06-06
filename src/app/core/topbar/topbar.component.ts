import { Component, OnInit } from '@angular/core';
import { LucideAngularModule, Menu, Sun, Moon, Languages } from 'lucide-angular';
import { AnimatorService } from '../../services/animator.service';
import { MenuService } from '../../services/menu.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, TranslateModule],
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
    // Verifica se há idioma salvo no localStorage
    const savedLang = localStorage.getItem('lang');
    
    // Se não houver idioma salvo, usa o idioma do navegador
    const browserLang = this.getBrowserLanguage();
    const defaultLang = browserLang === 'pt' ? 'pt' : 'en';
    
    this.translate.setDefaultLang(defaultLang);
    this.translate.use(savedLang || defaultLang);
  }

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    this.applyTheme();
  }

  // Método para detectar o idioma do navegador
  private getBrowserLanguage(): string {
    if (typeof window !== 'undefined' && window.navigator) {
      const browserLang = window.navigator.language || 
                         (window.navigator as any).userLanguage || 
                         'en';
      return browserLang.split('-')[0].toLowerCase();
    }
    return 'en';
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