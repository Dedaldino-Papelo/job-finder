import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() name: string = ""
  @Input() expirationDate: string = ""

  today = new Date().toLocaleDateString('pt-BR')


  isDateExpired(): Boolean {
    return this.today > this.expirationDate
  }

}
