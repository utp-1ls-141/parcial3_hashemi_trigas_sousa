import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  constructor(private studentService: StudentService) {}

  ngOnInit() {}

  addStudent(firstName: string, lastName: string, id: string) {
    if (!firstName || !lastName || !id) {
      alert('Debe llenar todos los campos');
    } else {
      this.studentService
        .addStudent(firstName, lastName, id)
        .subscribe(data => {
          console.log('Student added');
        });
    }
  }
}
