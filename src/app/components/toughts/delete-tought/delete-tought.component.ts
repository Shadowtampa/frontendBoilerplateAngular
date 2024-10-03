import { Component } from '@angular/core';
import { ToughtService } from '../../../services/tought/tought.service';
import { IToughtProps } from '../tought';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-tought',
  templateUrl: './delete-tought.component.html',
  styleUrl: './delete-tought.component.css'
})
export class DeleteToughtComponent {
  constructor(
    private toughtService: ToughtService,
    private router: Router,
    private route: ActivatedRoute) { }

  tought: IToughtProps = {
    content: '',
    model: 'modelo1',
    author: '',
    favourite: false
  };

  deleteTought() {

    this.toughtService.delete(this.tought.id!).subscribe(() => {
      this.router.navigate([''])
    })
    
  }

  cancel() {
    this.router.navigate([''])
  }

  ngOnInit(){ 
    const id =  this.route.snapshot.paramMap.get('id');
    this.toughtService.getTought(id!).subscribe( response => { 
      this.tought = response;
    }) ;
  }

}
