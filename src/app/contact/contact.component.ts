import { Component, OnInit } from '@angular/core';
import * as Enums from '../helper/enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  validateForm!: FormGroup;

  // Important Var
  public enum: any = Enums;
  public loaded: boolean = false;
  public pageload: boolean = false;

  spinnerTimeout() {
    setTimeout(() => {
      this.pageload = true;
    }, 500);

    setTimeout(() => {
      this.loaded = true;
    }, 1500);
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.spinnerTimeout();
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

}
