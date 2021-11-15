import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ident',
  templateUrl: './ident.component.html',
  styleUrls: ['./ident.component.css']
})

export class IdentComponent implements OnInit {

  identForm!: FormGroup;
  isSubmitted = false;
  badLogin = false;
  @Output() leLogin = new EventEmitter<string>();

  tabChiffres: number[] = [];
  tabChiffresSelect: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.identForm = new FormGroup({
      login: new FormControl(''),
      passe: new FormControl('')
    });

    this.tabChiffres = this.remplissageTableau();
  }

  get formControls() { return this.identForm.controls; }

  authentification() {
    let toutOk = true;
    this.isSubmitted = true;
    console.log("ident :" + this.identForm.value.login);

    // Contrôle du login
    if (this.identForm.value.login == '') {
      this.badLogin = true;
      toutOk = false;
    }

    // Contrôle du code entré
    if (this.tabChiffresSelect.length<6) {
      toutOk = false;
    }

    if (toutOk) {
      this.leLogin.emit(this.identForm.value.login);
    }
  }

  // Initialisation aléatoire de l'affichage du tableau des chiffres
  remplissageTableau() {
    let leTab: number[] = [];
    let cpt = 10;

    while (cpt > 0) {
      let nbr = Math.floor(Math.random() * 10);

      if (leTab.indexOf(nbr) === -1) {
        leTab.push(nbr);
        cpt--;
      }
    }

    console.log(leTab);
    return leTab;
  }

  // Mise en place de du choix de code de l'utilisateur
  remplissageSelect(chiffre: number) {
    this.tabChiffresSelect.push(chiffre);
    console.log(this.tabChiffresSelect);
  }
}
