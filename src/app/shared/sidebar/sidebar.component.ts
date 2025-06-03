import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { AnimatorService } from '../../services/animator.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(
    public animatorService: AnimatorService,
    public menuService: MenuService) {}

  closeSidebar() {
    this.menuService.fecharMenu();
  }

  scrollToTop() {
    this.animatorService.emitirToggleGirar();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}