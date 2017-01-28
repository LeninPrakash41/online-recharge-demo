import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../auth/auth.service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isLoggedIn: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.checkLogin().subscribe((data) => {
      this.isLoggedIn = !!data;
    });
    // this.isLoggedIn = this.authService.isLoggedIn;
  }

  logout() {
    // this.authService.isLoggedIn = false;
    this.authService.updateLogin(false);
    localStorage.removeItem('jwt');
    this.router.navigateByUrl('/');
  }
}
