import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchService } from '../../services/search/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {
    searchText: string = "";

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.searchTerm.subscribe(searchText => {
        this.searchText = searchText;
    });
  }

  updateSearchTerm() {
    this.searchService.updateSearchText(this.searchText);
  }

  ngOnDestroy(): void {
    this.searchService.searchTerm.unsubscribe();
  }

}
