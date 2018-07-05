import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from '../models/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  serverRoute: String = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  getStudents() {
    return this.http.get(this.serverRoute + '/students');
  }
  addStudent(firstName: string, lastName: string, id: string) {
    let student = {
      firstName: firstName,
      lastName: lastName,
      id: id
    };
    return this.http.post(this.serverRoute + '/students/add', student);
  }

  updateFields(id, student: Student) {
    return this.http.post(this.serverRoute + '/students/update/' + id, student);
  }
  deleteStudent(id: string) {
    return this.http.delete(this.serverRoute + '/students/delete/' + id);
  }
}
