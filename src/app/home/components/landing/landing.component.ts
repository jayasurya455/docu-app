import { Component, OnInit } from '@angular/core';
import { DocumentType } from 'src/app/shared/models/document.model';
import { allType, documentType } from '../../constants/constant';
import { CinemaService } from '../../services/cinema.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
    allType: DocumentType = allType;
    selectedType: DocumentType  = allType;
    documentTypes: DocumentType[] = documentType;
    userMailId:string = "jayasurya455@gmail.com";

  constructor(private cinemaService: CinemaService) { }

  ngOnInit(): void {
    this.cinemaService.getAllDetails(this.userMailId)
      .subscribe((data) => {
        // Handle the API response data
        console.log(data);
      },
      error => {
        // Handle the API error
        console.error(error);
      });
  }

  onActiveDocumentTypeChanged(event: any) {
    this.selectedType = event.activeType;
  }

}
