import { Component, Input } from '@angular/core';
import { IToughtProps } from '../tought';
import { ToughtService } from '../../../services/tought/tought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tought',
  templateUrl: './tought.component.html',
  styleUrl: './tought.component.css'
})



export class ToughtComponent {

  constructor(private router: Router, private toughtService: ToughtService) { }


  @Input() tought: IToughtProps = {
    id: '',
    content: '',
    model: 'modelo1',
    author: '',
    favourite: false
  };

  getCellSizeClass() {
    if (this.tought.content.length >= 246) {
      return 'pensamento-g'
    }
    return 'pensamento-p'

  }

  delete() {
    this.router.navigate([`toughts/confirmToughtDeleting/${this.tought.id}`])
  }

  edit() {
    this.router.navigate([`editTought/${this.tought.id}`])
  }

  favourite() {
    this.tought.favourite = !this.tought.favourite;

    console.log(this.tought)
    this.toughtService.favourite(this.tought).subscribe(() => { 
    });
  }

  

}