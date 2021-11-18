import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
})
export class SplashscreenPage implements OnInit {


  constructor( private router: Router) { }

  ngOnInit() {

  }

  ionViewDidEnter() {
    setTimeout(() => {
        this.navigateToPage();
    }, 1000);
  }

  navigateToPage() {
    this.router.navigate(['/login']);
  }

}
