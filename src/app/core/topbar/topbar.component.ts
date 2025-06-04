import { Component } from '@angular/core';
import { LucideAngularModule, Menu, Sun, Languages } from 'lucide-angular';
import { AnimatorService } from '../../services/animator.service';
import { MenuService } from '../../services/menu.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [LucideAngularModule, TranslateModule ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent {
  // Referências aos ícones
  readonly Menu = Menu;
  readonly Sun = Sun;
  readonly Languages = Languages;

  isDarkMode = false;

  constructor(
    private animatorService: AnimatorService,
    private menuService: MenuService,
    private translate: TranslateService // <<--- aqui!
  ) {
    // Define o idioma padrão como 'pt'
    this.translate.setDefaultLang('pt');

    // Usa o idioma salvo no localStorage ou 'pt' como padrão
    const savedLang = localStorage.getItem('lang') || 'pt';
    this.translate.use(savedLang);
  }

  toggleLanguage() {
    const currentLang = this.translate.currentLang;
    const newLang = currentLang === 'pt' ? 'en' : 'pt';
    this.translate.use(newLang);
    localStorage.setItem('lang', newLang);
    console.log(`Idioma trocado para: ${newLang}`);
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    console.log(`Tema ${this.isDarkMode ? 'Escuro' : 'Claro'}`);
  }

  toggleMenu() {
    console.log('Abrir menu lateral');
    this.animatorService.emitirToggleGirar();
    this.menuService.toggleMenu();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
}
