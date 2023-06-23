import { Pipe, PipeTransform } from '@angular/core';
import { Document } from '../../models/document.model';

@Pipe({
  name: 'searchDocument',
  pure: false
})
export class SearchDocumentPipe implements PipeTransform {

  transform(value: Document[], searchText: string): Document[] {
    if(searchText != "") {
        return value.filter(obj => obj.name.toLowerCase().includes(searchText.toLowerCase()));
    } else {
        return value;
    }
  }

}
