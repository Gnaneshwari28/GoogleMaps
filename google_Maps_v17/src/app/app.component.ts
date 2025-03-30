import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'google_Maps_v17';

  // Type 2

  constructor(private sanitizer: DomSanitizer) { } // Inject DomSanitizer

  locationUrl: any;

  ngOnInit() {
    const url =  `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d381.1526325566868!2d78.09166669258722!3d11.514592596173435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babe7cd9efbb5e9%3A0xa796840fda2246f2!2sGK%20FASHION%20DESIGNER!5e1!3m2!1sen!2sus!4v1731222919287!5m2!1sen!2sus"`;
    this.locationUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
