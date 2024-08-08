import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bouton',
  templateUrl: './bouton.component.html',
  styleUrl: './bouton.component.css'
})
export class BoutonComponent {
  @Input() btnText = 'Click!'
  @Input() isOrder = false
}
