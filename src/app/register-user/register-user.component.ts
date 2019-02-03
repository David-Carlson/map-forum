import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute, 
    private router: Router,
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) { }
  

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email:    ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) 
      return;
    this.loading = true;
    this.userService.registerUser(this.f.username.value, this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        user => {
          if (user == null) {
            console.log("Null user for registration");
          }
          else {
            this.authenticationService.register(user);
          }
        }, 
        error => {
          console.log('Problem registering');
        });
      
      // .pipe(first())
      // .subscribe(
      //     data => {            
      //       if (data != null) {
      //         this.router.navigate(['users/dashboard']);
      //       }
      //       if (data['admin'] === 'user')
      //         // console.log('is user');
              
      //       else if ((data['admin'] === 'admin'))
      //         // console.log('is admin');
      //         this.router.navigate(['admin/dashboard']);
      //       else
      //         console.log("Bad admin status " + data['admin'])
      //     },
          // error => {
          //   console.log('Problem logging in');
          // });
  }

}
