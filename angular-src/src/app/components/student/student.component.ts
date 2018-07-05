import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Student } from '../../models/Student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input('student') student: Student;

  constructor(private studentService: StudentService) {}

  ngOnInit() {}

  updateFields(firstName: string, lastName: string, newId: string) {
    if (!firstName || !lastName || !newId) {
      alert('Debe llenar todos los campos');
    } else {
      const newStudent: Student = {
        firstName: firstName,
        lastName: lastName,
        id: newId
      };
      this.studentService
        .updateFields(this.student.id, newStudent)
        .subscribe(data => {
          console.log('Student updated');
        });
    }
  }

  deleteStudent(id: string) {
    if (confirm('Desea eliminar este registro?')) {
      this.studentService.deleteStudent(id).subscribe(data => {
        console.log('Student deleted');
      });
    }
  }
}
