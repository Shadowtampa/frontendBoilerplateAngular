import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-load-more',
  templateUrl: './button-load-more.component.html',
  styleUrl: './button-load-more.component.css'
})
export class ButtonLoadMoreComponent {

  @Input() hasMoreToughts : boolean = false;
  
}
