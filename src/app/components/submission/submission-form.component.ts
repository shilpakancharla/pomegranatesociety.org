import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { validateName, validateEmail } from "./validators";


@Component({
  selector: "app-submission",
  templateUrl: "./submission-form.component.html",
  styleUrls: ["./submission-form.component.scss"]
})
export class SubmissionFormComponent implements OnInit {
  submissionForm: FormGroup;
  formSubmitted = false; //Holds status of the form

  private nameValidators = [Validators.minLength(1), Validators.maxLength(50)];

  private emailValidators = [Validators.maxLength(250), Validators.email];

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.submissionForm = this.fb.group(
      {
        anonymous: [false],
        name: [""],
        contact: [false],
        email: [""],
        contentWarning: ["", [Validators.required]],
        title: ["", Validators.required],
        message: [
          "",
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10000)
          ]
        ],
        agree: [false, [Validators.requiredTrue]]
      },
      { validators: [validateName, validateEmail] }
    );
  }

  onSubmit() {
    if (this.submissionForm.get("anonymous").value == false) {
      this.submissionForm
        .get("name")
        .setValidators(this.nameValidators.concat(Validators.required));
    } else {
      this.submissionForm.get("name").setValidators(this.nameValidators);
    }

    if (this.submissionForm.get("contact").value == true) {
      this.submissionForm
        .get("email")
        .setValidators(this.emailValidators.concat(Validators.required));
    } else {
      this.submissionForm.get("email").setValidators(this.emailValidators);
    }

    this.formSubmitted = true; //Form has been submitted

    console.log(this.submissionForm.valid);

    //Process the form
    if (this.submissionForm.valid) {
      const email = this.submissionForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.httpClient.post('https://formspree.io/mwkrpogy',
        { anonymous: email.anonymous, name: email.name, contact: email.contact, 
          contentWarning: email.contentWarning, title: email.title, message: email.message, 
          agree: email.agree },
          { 'headers': headers }).subscribe(
            response => {
              console.log(response);
            }
          );
    }
  }

  get nameInvalid() { return (this.submissionForm.getError("nameRequired") || this.submissionForm.getError("nameMaxLength")); }
  get emailInvalid() { return (this.submissionForm.getError("emailRequired") || this.submissionForm.getError("emailMalformed")); }
  get anonymous() { return this.submissionForm.get("anonymous"); }
  get name() { return this.submissionForm.get("name"); }
  get contact() { return this.submissionForm.get("contact"); }
  get email() { return this.submissionForm.get("email"); }
  get contentWarning() { return this.submissionForm.get("contentWarning"); }
  get title() { return this.submissionForm.get("title"); }
  get message() { return this.submissionForm.get("message"); }
  get agree() { return this.submissionForm.get("agree"); }
}
