import { Component, OnInit } from '@angular/core';
import { UploadService } from './upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor(private Service: UploadService) { }

  test: string;

  ngOnInit() {
    this.test = this.Service.test;
  }

}
