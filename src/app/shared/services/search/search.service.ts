import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
    searchTerm = new BehaviorSubject<string>("");

  constructor() { }

  updateSearchText(text: string) {
    this.searchTerm.next(text);
  }
}
