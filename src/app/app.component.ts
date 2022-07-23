import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("form") formData: NgForm;

  isSubmitted = false;
  defaultAccount = "advanced";
  userData = {
    email: "",
    account: "",
    password: "",
  };

  onSubmit() {
    console.log(this.formData);
    this.isSubmitted = true;
    this.userData = {
      email: this.formData.value.email,
      account: this.formData.value.account,
      password: this.formData.value.password,
    };
  }
}
