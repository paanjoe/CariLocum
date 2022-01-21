import { Component, OnInit } from '@angular/core';
import * as Enums from '../helper/enum';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  // Important Var
  public enum: any = Enums;
  public loaded: boolean = false;
  public pageload: boolean = false;

  ngOnInit(): void {
    this.spinnerTimeout();
  }

  spinnerTimeout() {
    setTimeout(() => {
      this.pageload = true;
    }, 500);

    setTimeout(() => {
      this.loaded = true;
    }, 1500);
  }

}
