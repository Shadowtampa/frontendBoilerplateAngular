import { Component } from '@angular/core';
import { ToughtService } from '../../../services/tought/tought.service';
import { IToughtProps } from '../tought';
import { routes } from '../../../app-routing.module';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-tought',
  templateUrl: './create-tought.component.html',
  styleUrl: './create-tought.component.css'
})
export class CreateToughtComponent {

  constructor(
    private toughtService: ToughtService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  form!: FormGroup;

  saveThought() {

    if (!this.form.valid) {
      console.log(this.form.value)
      return;
    }

    this.toughtService.create(this.form.value).subscribe(() => {
      this.router.navigate([''])
    });


  }

  clearThought() {
    this.router.navigate([''])
  }

  getFormIsValid(){
    return this.form.valid ? 'botao' : 'botao__desabilitado';
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      content: ['', Validators.compose([
        Validators.required, 
        Validators.pattern(/(.|\s)*\S(.|s)*/)
      ])],
      author: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/(.|\s)*\S(.|s)*/)
      ])],
      model: ['modelo1', Validators.compose([
        Validators.required
      ])]
    })
  }
}
