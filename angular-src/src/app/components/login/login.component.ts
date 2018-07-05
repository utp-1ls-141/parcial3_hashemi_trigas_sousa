import { Component, OnInit } from '@angular/core';
import { Admin } from '../../models/Admin';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Simulacion de cuentas almacenadas en la base de datos
  cuentas: Admin[] = [];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.cuentas = [
      {
        username: 'admin',
        password: '1234'
      }
    ];
  }

  login(username: string, password: string) {
    for (let i = 0; i < this.cuentas.length; i++) {
      if (
        this.cuentas[i].username === username &&
        this.cuentas[i].password === password
      ) {
        this.router.navigate(['/students']);
      }
    }
  }

  register(username: string, password: string) {
    this.cuentas.push({ username: username, password: password });
    alert('Usuario registrado exitosamente');
    // this.authService.register(username, password);
  }
}
