import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReseauxSociauxURLService {

  socialURLs = [
    { 
      name: "Facebook",
      icon: "fa-facebook",
      url: "#facebook_URL"
    },
    { 
      name: "Twitter",
      icon: "fa-x-twitter",
      url: "#twitter_URL"
    },
    { 
      name: "Instagram",
      icon: "fa-instagram",
      url: "#instagram_URL"
    },
    { 
      name: "Pinterest",
      icon: "fa-pinterest",
      url: "#pinterest_URL"
    },
    { 
      name: "LinkedIn",
      icon: "fa-linkedin",
      url: "#linkedin_URL"
    }

  ]

  constructor() { }
}
