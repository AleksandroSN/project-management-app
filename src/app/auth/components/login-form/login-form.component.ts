import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { InputValidationService, AuthService } from "@app/core/services";
import { User } from "@app/shared";
import { LOGIN_INPUT, PASSWORD_INPUT } from "@utils";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent implements OnInit {
  hide = true;

  form?: FormGroup;

  constructor(
    private fb: FormBuilder,
    private inputValidationService: InputValidationService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      login: ["", [Validators.required, Validators.minLength(5)]],
      password: ["", [Validators.required, this.inputValidationService.passwordValidator()]],
    });
  }

  get login() {
    return this.form?.get(LOGIN_INPUT);
  }

  get password() {
    return this.form?.get(PASSWORD_INPUT);
  }

  onSubmit() {
    const user = this.form?.value as User;
    this.authService.login(user);
  }
}
