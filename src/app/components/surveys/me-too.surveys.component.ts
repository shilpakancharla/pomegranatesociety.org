import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-surveys',
  templateUrl: './me-too.surveys.component.html',
  styleUrls: [
    "../submission/submission-form.component.scss"
  ]
})
export class MeTooSurveysComponent implements OnInit {
  surveyForm: FormGroup;
  formSubmitted = false; //Holds status of the form

  constructor(private fb: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.surveyForm = this.fb.group(
      {
        race: [null, [Validators.required]], //Radio
        age: ["", [Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern("^[0-9]*$")]], //Text field
        question1: [null, [Validators.required]], //Radio 
        question2: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(10000)]], //Text field
        question3: ["", [ Validators.required, Validators.minLength(10), Validators.maxLength(10000)]], //Text field
        question4: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(10000)]], //Text field
        question5: [null, [Validators.required]], //Radio
        question6: ["", [Validators.minLength(10), Validators.maxLength(10000)]], //Text field
        question7: ["", [Validators.minLength(10),
            Validators.maxLength(10000)
          ]
        ], //Text field
        question8: [null], //Radio
        question9: [null,
          [
            Validators.required
          ]
        ], //Radio
        question10: [null], //Slider
        question11: [null], //Slider
        question12: ["",
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10000)
          ]
        ], //Text Fielder
      }
    );
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }
    return value;
  }

  onSubmit() {
    this.formSubmitted = true; //Form has been submitted

    //Process the form
    if (this.surveyForm.valid) {

    }
  }

  get race() { return this.surveyForm.get("race"); }
  get age() { return this.surveyForm.get("age"); }
  get question1() { return this.surveyForm.get("question1"); }
  get question2() { return this.surveyForm.get("question2"); }
  get question3() { return this.surveyForm.get("question3"); }
  get question4() { return this.surveyForm.get("question4"); }
  get question5() { return this.surveyForm.get("question5"); }
  get question6() { return this.surveyForm.get("question6"); }
  get question7() { return this.surveyForm.get("question7"); }
  get question8() { return this.surveyForm.get("question8"); }
  get question9() { return this.surveyForm.get("question9"); }
  get question10() { return this.surveyForm.get("question10"); }
  get question11() { return this.surveyForm.get("question11"); }
  get question12() { return this.surveyForm.get("question12"); }

}
