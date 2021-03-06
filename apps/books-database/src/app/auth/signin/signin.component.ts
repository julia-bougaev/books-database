import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthFacade } from '../../store';
import {Observable} from "rxjs";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SigninComponent implements OnInit {
  error$: Observable<string> = this.authFacade.error$;
  signinFormGroup: FormGroup;
  constructor(private authFacade: AuthFacade, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signinFormGroup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required]]
    });
  }

  onSignIn(){
     this.authFacade.signin(this.signinFormGroup.value.email, this.signinFormGroup.value.password);
  }

}
