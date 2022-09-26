import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxImageCompressService } from 'ngx-image-compress';
import { ImageCropperModule } from 'ngx-image-cropper';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ImageCropperModule],
  providers: [NgxImageCompressService],
  bootstrap: [AppComponent],
})
export class AppModule {}
