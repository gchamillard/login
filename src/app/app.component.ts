import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
  // Déclaration de la variable (typée !) pour l'utilisateur
  login:string = '';

  onLoginAdded(event : string) {
    this.login = event;
  }

  getConnect() {
    return this.login != '';
  }
}
