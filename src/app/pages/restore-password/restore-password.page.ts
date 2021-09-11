import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restore-password',
  templateUrl: './restore-password.page.html',
  styleUrls: ['./restore-password.page.scss'],
})
export class RestorePasswordPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  navigateToPage() {
    this.router.navigate(['/login']);
  }

}
