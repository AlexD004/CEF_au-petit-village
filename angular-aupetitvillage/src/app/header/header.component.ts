import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

    /* Hide nav on mobile */
    @Input() mobile = false;
    public screenWidth: any;   
      
    ngOnInit() {  
        this.screenWidth = window.innerWidth;  
    }  
      
    @HostListener('window:resize', ['$event'])  
    onResize() {  
      this.screenWidth = window.innerWidth;
      if (this.screenWidth <= 576) {
        this.mobile = true;
      }else{
        this.mobile = false;
      }
    }  

    /* Toggle nav with burger button */
    @Input() isOpen = false;
    openNavMobile(){
      this.isOpen = !this.isOpen;
    }



}
