import { SideNavService } from './services/side-nav.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-angular-crud';
  
  constructor(public sideNavService: SideNavService) {}
  
}
