import { Component } from '@angular/core';
import { ReseauxSociauxURLService } from '../../services/reseaux-sociaux-url.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  socialURLs: any[] = [];
  constructor(private ReseauxSociauxURLService: ReseauxSociauxURLService) {}

  ngOnInit(): void {
    this.socialURLs = this.ReseauxSociauxURLService.socialURLs
  }

}
