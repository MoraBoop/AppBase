import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { FormControl, FormGroup } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public rs;

  user = new FormGroup({
    nick: new FormControl(''),
    pass: new FormControl('')
  });

  constructor(private usersService: UsersService) { }

  ngOnInit() { }

  seccionStart(user) {
    this.usersService.sectionStart(user).subscribe(
      result => this.rs = result
    );
  }

  onSubmit() {
    console.warn(this.user.value);
    this.seccionStart(this.user.value);
  }

}
