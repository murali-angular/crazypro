import { CourseService } from './course.service';
import { COURSES } from './../mock-courses';
import { Course } from './../course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CourseService]
})
export class CoursesComponent implements OnInit {

   courses: Course[];
   selectedCourse: Course;

   // tslint:disable-next-line: no-shadowed-variable
   constructor(private CourseService: CourseService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.CourseService.getCourses().subscribe(courses => this.courses = courses);
  }

  onSelect(course: Course): void {
    this.selectedCourse = course;

  }

}
