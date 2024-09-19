import { Component, OnInit } from '@angular/core';
import { faHome, faTools, faTasks, faDollarSign, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faHome = faHome;
  faServices = faTools;  // Nouvelle icône pour les services
  faRealisation = faTasks;
  faPrices = faDollarSign;
  faContact = faPhone;
  constructor() { }

  ngOnInit(): void {
  }

}
