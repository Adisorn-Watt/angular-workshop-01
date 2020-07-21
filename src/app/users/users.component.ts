import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

type UserState = {
  fullName: string;
  strikeThrough: boolean;
};

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  //firstName = '';
  //lastName = '';
  //fullName = '';
  users: Array<UserState> = []; //Array
  //errfName:boolean = false;
  //errlName:boolean = false;
  countStrikeThrough: number = 0;
  //state: boolean = false;
  summitted = false;

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  checkStrikeThrough (user: UserState): void {
    if (user.strikeThrough) {
      this.countStrikeThrough--;
      user.strikeThrough = false;
    } else {
      this.countStrikeThrough++;
      user.strikeThrough = true;
    }
  }

  /*inputFirstName(event: any): void {
    this.firstName = event.target.value;
  }

  inputLastname(input: string): void {
    this.lastName = input;
  }*/

  saveData(): void {
    // There's only empty, or is/are only space(s)
    /*if (this.firstName === "" || this.firstName == null) {
      this.errCheck = true;
      return;
    } */
    // Normal case
    //this.errCheck = false
    //this.fullName = `${this.firstName} ${this.lastName}`;
    // Append to list/array
    //this.users.push({name: this.fullName, strikeThrough: false});
    this.summitted = true;
    if (this.loginForm.invalid) {

      return;
    }

    const fullName = `${this.f.firstName.value} ${this.f.lastName.value}`;
    this.users.push({fullName: fullName, strikeThrough: false});
  }
}
