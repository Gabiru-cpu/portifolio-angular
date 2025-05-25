import { Component } from '@angular/core';
import { LucideAngularModule, Mail } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
    readonly Mail = Mail;
  currentYear = new Date().getFullYear();
}
