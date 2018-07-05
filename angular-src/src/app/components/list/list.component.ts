import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/Student';
import { StudentService } from '../../services/student.service';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  studentList: Student[];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.studentService.getStudents().subscribe(students => {
      this.studentList = students as Student[];
    });
  }
}
