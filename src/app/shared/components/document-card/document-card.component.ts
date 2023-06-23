import { Component, OnInit, Input } from '@angular/core';
import { Document } from '../../models/document.model';

@Component({
  selector: 'app-document-card',
  templateUrl: './document-card.component.html',
  styleUrls: ['./document-card.component.scss']
})
export class DocumentCardComponent implements OnInit {
    @Input() cardDetail: Document | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
