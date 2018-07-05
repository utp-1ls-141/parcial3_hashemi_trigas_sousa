import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentService } from './services/student.service';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AddComponent } from './components/add/add.component';
import { StudentComponent } from './components/student/student.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
// Angular Material
import {
  MatToolbarModule,
  MatListModule,
  MatCardModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';

const routes: Routes = [
  { path: 'students', component: ListComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginComponent,
    NotfoundComponent,
    AddComponent,
    StudentComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [RouterModule],
  providers: [StudentService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
