import { Component, OnInit } from '@angular/core';

type UserState = {
  name: string;
  strikeThrough: boolean;
};


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  firstName = '';
  lastName = '';
  fullName = '';
  users: Array<UserState> = []; //Array
  //show: boolean = true;
  //countAllUsers: number = 0;
  countStrikeThrough: number = 0;
  state: boolean = false;
  //strike = {};

  constructor() { }

  ngOnInit(): void {
  }

  /*toggleState (index: number) {
    if (this.users.indexOf(index) == -1)
    this.state = !this.state;
  }*/

  /*selectClasses () {
    return {
      'strikethrough':this.state==true,
      'normalText':this.state==false
    }
  }*/

  checkStrikeThrough (user: UserState): void {
    if (user.strikeThrough) {
      this.countStrikeThrough--;
      user.strikeThrough = false;
    } else {
      this.countStrikeThrough++;
      user.strikeThrough = true;
    }
  }

  inputFirstName(event: any): void {
    this.firstName = event.target.value;
  }

  inputLastname(input: string): void {
    this.lastName = input;
  }

  saveData(): void {
    this.fullName = `${this.firstName} ${this.lastName}`;
    // Append to list/array
    this.users.push({name: this.fullName, strikeThrough: false});
  }

  

  //strikeThrough (): void {
    /*if(this.checkingUser == true){
      this.checkingUser = false;
    }

    if(this.checkingUser == false){
      this.checkingUser = true;
    }

    this.strike = {
      'strikethrough':this.checkingUser==true,
      'normalText':this.checkingUser==false
    }
  }*/
}
