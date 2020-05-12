import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact-form.component.html',
  styleUrls: [
    './contact-form.component.scss'
  ]
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  formSubmitted = false; //Holds status of the form

  constructor(private fb: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    this.formSubmitted = true; //Form has been submitted

    //Process the form
    if (this.contactForm.valid) {
      const email = this.contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.httpClient.post('https://formspree.io/moqkvdyk',
        { name: email.name, email: email.email, message: email.message },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
          }
        );
    }
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }

}
