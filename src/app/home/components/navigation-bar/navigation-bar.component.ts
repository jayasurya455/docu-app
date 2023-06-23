import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DocumentType } from 'src/app/shared/models/document.model';
import { allType, documentType } from '../../constants/constant';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
    documentTypes: DocumentType[] = documentType;
    allType: DocumentType = allType;
    activeType: DocumentType = this.allType;
    @Output() selectedType = new EventEmitter<{activeType: DocumentType}>();

  constructor() { }

  ngOnInit(): void {
    this.selectedType.emit({activeType: this.activeType});
  }

  selectDocumentType(docuType: DocumentType) {
    this.activeType = docuType;
    this.selectedType.emit({activeType: this.activeType});
  }
    

}
