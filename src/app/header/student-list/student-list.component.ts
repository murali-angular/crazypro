import { HomeServiceService } from './../home/home-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students;
  selectedStudent;

  constructor(public homeService: HomeServiceService) { }

  ngOnInit(): void {
  }

  public selectStudent(student) {
    this.selectedStudent = student;
  }

}
