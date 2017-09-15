import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {
  baseUrl: string = 'https://api.adorable.io/avatars/500/';
  endBaseUrl: string = '@adorable.io.png';

  constructor(private domSanitizer: DomSanitizer) {

  }

  transform(value: any): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + value + this.endBaseUrl);
  }

}
