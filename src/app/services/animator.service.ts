import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimatorService {
  private toggleGirarSubject = new Subject<void>();

  toggleGirar$ = this.toggleGirarSubject.asObservable();

  emitirToggleGirar() {
    this.toggleGirarSubject.next();
  }
}
