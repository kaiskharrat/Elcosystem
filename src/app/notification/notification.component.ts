import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  @Input() message: string = '';
  @Input() type: string = 'success';

  isVisible: boolean = true;

  ngOnInit() {
    setTimeout(() => this.isVisible = false, 5000);  // Masque la notification après 5 secondes
  }

  closeNotification() {
    this.isVisible = false;
  }
}

