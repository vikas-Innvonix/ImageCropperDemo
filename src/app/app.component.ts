import { Component } from '@angular/core';
import { NgxImageCompressService } from 'ngx-image-compress';
import { ImageCroppedEvent } from 'ngx-image-cropper';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'image-crop-demo';
  imgChangeEvent: any = '';
  cropImgPreview: any = '';

  image: string;

  imgResultBeforeCompress: string = '';
  imgResultAfterCompress: string = '';
  constructor(private imageCompressor: NgxImageCompressService) {
    this.image = '';
  }
  onFileChange(event: any): void {
    this.imgChangeEvent = event;
  }

  cropImg(e: ImageCroppedEvent) {
    this.cropImgPreview = e.base64;
  }

  imgLoad() {}
  initCropper() {}
  imgFailed() {}

  formatSizeUnits(bytes: number): string {
    if (bytes >= 1073741824) {
      return (bytes / 1073741824).toFixed(2) + ' GB';
    } else if (bytes >= 1048576) {
      return (bytes / 1048576).toFixed(2) + ' MB';
    } else if (bytes >= 1024) {
      return (bytes / 1024).toFixed(2) + ' KB';
    } else if (bytes > 1) {
      return bytes + ' bytes';
    } else if (bytes == 1) {
      return bytes + ' byte';
    } else {
      return '0 bytes';
    }
  }

  compressFile() {
    this.imageCompressor.uploadFile().then(({ image, orientation }) => {
      this.imgResultBeforeCompress = image;
      console.log(
        'Size in bytes of image upload is: ' +
          this.formatSizeUnits(this.imageCompressor.byteCount(image))
      );

      this.imageCompressor
        .compressFile(image, orientation, 50, 80)
        .then((compress) => {
          this.imgResultAfterCompress = compress;
          console.log(
            'Size in bytes of image after upload is: ' +
              this.formatSizeUnits(this.imageCompressor.byteCount(compress))
          );
        });
    });
  }
}
