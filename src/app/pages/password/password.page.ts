import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToPage() {
    this.router.navigate(['/restore-password']);
  }

  back(page) {
    this.router.navigate(page);
  }

}
