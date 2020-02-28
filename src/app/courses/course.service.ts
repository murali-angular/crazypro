import { MessagesService } from './../messages/messages.service';
import { COURSES } from './../mock-courses';
import { Course } from './../course';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  getCourses(): Observable<Course[]> {
    // send a meage after fetching heroes
    this.messagesService.add('CouseService: fetched courses');
    return of(COURSES);

  }

  constructor(private messagesService: MessagesService) { }
}
