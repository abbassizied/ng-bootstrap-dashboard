import { SideNavService } from './../../services/side-nav.service';
import { Component, OnInit } from '@angular/core'; 
import { faPlusCircle, faMinusCircle, faSearch, faCogs, faArrowCircleDown, faArrowCircleRight, faChartBar, faGlobe, faHandPointRight, faHandPointUp, faIdCard, faLandmark, faLifeRing, faMap, faQuestion, faFolder } from '@fortawesome/free-solid-svg-icons';

 
 
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  activeId = 1;
  
  faPlusCircle = faPlusCircle;
  faMinusCircle = faMinusCircle; 
  faSearch = faSearch;
  faCogs = faCogs;
  faArrowCircleDown = faArrowCircleDown;
  faArrowCircleRight = faArrowCircleRight;
  faChartBar = faChartBar;
  faGlobe = faGlobe;
  faHandPointRight = faHandPointRight;
  faHandPointUp = faHandPointUp;
  faIdCard = faIdCard;
  faLandmark = faLandmark;
  faLifeRing = faLifeRing;
  faMap = faMap;
  faQuestion = faQuestion;
  faFolder = faFolder;
  
  
  
  
  icon1 = faHandPointRight ;
  icon2 = faHandPointRight ;
  icon3 = faPlusCircle ;
  
  public isCollapsed1 = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;
  
  constructor(public sideNavService: SideNavService) {}

  ngOnInit(): void {
  }
 
  changeIcon1() {
	  if(this.isCollapsed1){
		  this.icon1 = faHandPointRight;
	  }else{ 
		    this.icon1 = faHandPointUp; 
	  } 
	  
  }

  changeIcon2() {
	  if(this.isCollapsed2){
		  this.icon2 = faHandPointRight;
	  }else{ 
		    this.icon2 = faHandPointUp; 
	  } 
	  
  }

  changeIcon3() {
	  if(this.isCollapsed3){
		  this.icon3 = faPlusCircle;
	  }else{ 
		    this.icon3 = faMinusCircle; 
	  } 
	  
  }
}
