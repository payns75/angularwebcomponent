import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { UploadComponent } from './upload/upload.component';
import { UploadService } from './upload/upload.service';


@NgModule({
  declarations: [
    UploadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UploadService],
  entryComponents: [
    UploadComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(UploadComponent, { injector });
    customElements.define('app-upload', customElement);
  }

  ngDoBootstrap() { }
}