import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menuAberto = new BehaviorSubject<boolean>(false);
  menuAberto$ = this.menuAberto.asObservable();

  abrirMenu() {
    this.menuAberto.next(true);
  }

  fecharMenu() {
    this.menuAberto.next(false);
  }

  toggleMenu() {
    this.menuAberto.next(!this.menuAberto.value);
  }
}
