import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  firstName = '';
  lastName = '';
  name = '';
  users = []; //Array
  show: boolean = true;
  countUsers: number = 0;
  countCrossed: number = 0

  inputYourName(event: any): void {
    this.firstName = event.target.value;
  }

  inputLastname(input: string): void {
    this.lastName = input;
  }

  saveData(): void {
    this.name = `${this.firstName} ${this.lastName}`;
    // Append to list/array
    this.users.push(this.name);
    // Count quantity of users in array
    this.countUsers = this.users.length;
    //this.countUsers++; has the same result as above but too simple
  }

  strikeThrough (): void {

  }

  constructor() { }

  ngOnInit(): void {
  }

}
