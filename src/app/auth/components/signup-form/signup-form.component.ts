import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { InputValidationService, AuthService } from "@app/core/services";
import { UserWithName, AuthFormControls } from "@app/shared";

@Component({
  selector: "app-signup-form",
  templateUrl: "./signup-form.component.html",
  styleUrls: ["./signup-form.component.scss"],
})
export class SignupFormComponent implements OnInit {
  hide = true;

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private inputValidationService: InputValidationService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(5)]],
      login: ["", [Validators.required, Validators.minLength(5)]],
      password: ["", [Validators.required, this.inputValidationService.passwordValidator()]],
    });
  }

  get controls(): AuthFormControls {
    return this.form.controls as AuthFormControls;
  }

  onSubmit() {
    const user = this.form?.value as UserWithName;
    this.authService.signup(user);
  }
}
