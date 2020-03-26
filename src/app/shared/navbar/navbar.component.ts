import { SideNavService } from './../../services/side-nav.service';
import { Component, OnInit } from '@angular/core';
import { faAlignJustify	 } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  faAlignJustify = faAlignJustify; 
  faUser = faUser;
  faCogs = faCogs;
  faList = faList;
  faSignOutAlt = faSignOutAlt;
  
  
  constructor(public sideNavService: SideNavService) { }

  ngOnInit(): void {
  } 
}
