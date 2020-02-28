import { Cold } from './cold';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {

  powers = ['Really Smart', 'Super', 'Super Hot', 'Weather Changer'];

  model = new Cold(18, 'Mr Murali', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
  }

  newHero() {
    this.model = new Cold(18, '', '');
  }
  // Todo: Remove this when we're done

  get diagnostic() { return JSON.stringify(this.model); }

}
