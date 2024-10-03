import { Component } from '@angular/core';
import { IToughtProps } from '../tought';
import { ToughtService } from '../../../services/tought/tought.service';

@Component({
  selector: 'app-list-toughts',
  templateUrl: './list-toughts.component.html',
  styleUrl: './list-toughts.component.css'
})
export class ListToughtsComponent {

  constructor(private toughtService: ToughtService) {

  }

  toughtSearch: string = "";
  lastPage: number = 1;
  currentPage: number = 1;
  toughtsLoaded: IToughtProps[] = [];
  toughts: IToughtProps[] = [];
  hasMoreToughts: boolean = true;
  onlyFavourites: boolean = false;

  fetchMoreData() {
    if (this.hasMoreToughts) {
      this.currentPage++;
      this.fetchData();
    }
  }

  fetchData() {
    console.log(this.lastPage);
    console.log(this.currentPage);
    this.toughtService.index(this.currentPage).subscribe((toughtsFromAPI) => {
      this.lastPage = toughtsFromAPI.last
      if (toughtsFromAPI.data.length > 0) {
        this.toughtsLoaded.push(...toughtsFromAPI.data);

        // mantenho sempre um bkp dos meus thoughts
        this.toughts = this.toughtsLoaded
      }
      if (this.lastPage === this.currentPage) {
        this.hasMoreToughts = false;
      }
    });

  }

  filterData() {
    if (this.toughtSearch !== '') {
      this.toughts = this.toughtsLoaded.filter(toughts => toughts.content.includes(this.toughtSearch))
    }

    if (this.toughtSearch === '') {
      this.loadAllThoughts()
    }
  }



  fetchFavourites() {
    this.onlyFavourites = !this.onlyFavourites;

    if (this.onlyFavourites) {
      this.toughts = this.toughtsLoaded.filter(toughts => toughts.favourite)

    }

    if (!this.onlyFavourites) { 
      this.loadAllThoughts()
    }
  }

  loadAllThoughts() { 
    this.toughts = this.toughtsLoaded
  }

  ngOnInit() {
    this.fetchData();

  }

}
