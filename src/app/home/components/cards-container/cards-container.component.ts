import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Document, DocumentType } from 'src/app/shared/models/document.model';
import { SearchService } from 'src/app/shared/services/search/search.service';
import { allType, documents } from '../../constants/constant';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss']
})
export class CardsContainerComponent implements OnInit,OnChanges, OnDestroy {
    @Input() selectedType: DocumentType = allType;
    
    cardsList: Document[] = documents;
    searchText: string = "";

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.searchTerm.subscribe(searchText => {
        this.searchText = searchText;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
      if( this.selectedType != undefined) {
        if(this.selectedType.typeId !== "0") 
            this.cardsList = documents.filter(obj => obj.documentType.typeId === this.selectedType?.typeId);
        else
            this.cardsList = documents;
      }
  }

  ngOnDestroy(): void {
    this.searchService.searchTerm.unsubscribe();
  }

}
