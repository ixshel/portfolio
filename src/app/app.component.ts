import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

declare let gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto';

 constructor(public router: Router) {
  this.router.events.subscribe((event: any) => {
    if (event instanceof NavigationEnd) {
      gtag("config", "G-BGM4W18NSK", { page_path: event.urlAfterRedirects });
    }
  });
 }
}
