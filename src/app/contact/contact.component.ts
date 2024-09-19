import { Component, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData: any = {};
  notificationMessage: string = '';
  notificationType: string = 'success';

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}


  sendEmail(contactForm: any) {
    if (contactForm.valid) {
      this.http.post('http://localhost:8080/api/contact/send', this.formData, { responseType: 'text' })
        .subscribe(
          (response: string) => {
            this.notificationMessage = response;
            this.notificationType = 'success';  // Notification de succès
            contactForm.reset();  // Réinitialise le formulaire
          },
          (error: any) => {
            this.notificationMessage = 'Erreur lors de l\'envoi du message.';
            this.notificationType = 'error';  // Notification d'erreur
          }
        );
    } else {
      // Active la soumission du formulaire pour afficher les messages d'erreur
      contactForm.submitted = true;
    }
  }
}