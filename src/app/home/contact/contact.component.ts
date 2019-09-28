import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required, Validators.max(9999999999), Validators.min(11111111), Validators.maxLength(10), Validators.minLength(8)]),
    message: new FormControl(null, Validators.required),
  })

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.contactForm.value);
    this.contactForm.reset();
  }
}
