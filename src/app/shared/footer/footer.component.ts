import { Component, OnInit } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'; 
import { faTwitter } from '@fortawesome/free-brands-svg-icons'; 
import { faDribbble } from '@fortawesome/free-brands-svg-icons'; 
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; 



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

 faFacebook = faFacebook ;
 faTwitter = faTwitter ;
 faDribbble = faDribbble ; 
 faLinkedin = faLinkedin ; 


  constructor() { }

  ngOnInit(): void {
  }

}
