import { Course } from './../course';
import { MessagesService } from './../messages/messages.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  courses: Course[];

  constructor(public messagesService: MessagesService ) { }

  ngOnInit(): void {

  }

 

}
