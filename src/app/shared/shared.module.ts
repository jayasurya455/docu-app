import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DocumentCardComponent } from './components/document-card/document-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchDocumentPipe } from './pipes/search-document/search-document.pipe';
import { FormsModule } from '@angular/forms';

export { DocumentCardComponent } from './components/document-card/document-card.component';
export { SearchBarComponent } from './components/search-bar/search-bar.component';


@NgModule({
  declarations: [
    DocumentCardComponent,
    SearchBarComponent,
    SearchDocumentPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule
  ],
  exports: [
    DocumentCardComponent,
    SearchBarComponent,
    SearchDocumentPipe
  ]
})
export class SharedModule { }
