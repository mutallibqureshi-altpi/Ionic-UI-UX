import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    console.log('profile');
    console.log(localStorage.getItem('authToken'));
  }

  addAccount() {
    this.router.navigateByUrl('login/main/account');
    console.log('laha');
  }
}
