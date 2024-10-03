import { Component } from '@angular/core';
import { ToughtService } from '../../../services/tought/tought.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IToughtProps } from '../tought';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-edit-tought',
  templateUrl: './edit-tought.component.html',
  styleUrl: './edit-tought.component.css'
})
export class EditToughtComponent {

  constructor(private toughtService: ToughtService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  form!: FormGroup;

  saveThought() {
    this.toughtService.edit(this.form.value).subscribe(() => {
      this.router.navigate([''])
    })
  }

  clearThought() {
    this.router.navigate(['/'])
  }

  getFormIsValid() {
    return this.form.valid ? 'botao' : 'botao__desabilitado';
  }

  setFormGroup(item: null | IToughtProps) {
    this.form = this.formBuilder.group({
      content: [item?.content, Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|s)*/)
      ])],
      author: [item?.author, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/(.|\s)*\S(.|s)*/)
      ])],
      model: [item?.model, Validators.compose([
        Validators.required
      ])],
      id: [item?.id]
    })
  }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    this.toughtService.getTought(id!).subscribe((response) => {
      this.setFormGroup(response)
    })
    this.setFormGroup(null)
  }

}
