import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/services/register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  reactiveForm!: FormGroup;
  formStatus: any;

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.reactiveForm = this.fb.group({
      firstname: ['', [Validators.required, this.noSpaceAllowed]],
      lastname: ['', [Validators.required, this.noSpaceAllowed]],
      emailid: ['', [Validators.required, Validators.email]],
      contact: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.reactiveForm.statusChanges.subscribe((value) => {
      console.log(value);
      this.formStatus = value;
    });
  }

  onSubmit(): void {
    if (this.reactiveForm.valid) {
      console.log(this.reactiveForm.value);

      this.registerService.registerUser(this.reactiveForm.value).subscribe({
        next: (val: any) => {
          alert("User registered successfully");
          this.router.navigate(['login']);
        },
        error: (err: any) => {
          console.error(err);
        }
      });
    }
  }

  noSpaceAllowed(control: FormControl): { [s: string]: boolean } | null {
    if (control.value != null && control.value.indexOf(' ') !== -1) {
      return { noSpaceAllowed: true };
    }
    return null;
  }
}
