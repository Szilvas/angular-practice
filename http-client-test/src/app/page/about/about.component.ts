import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  userSubscription: Subscription;
  appleUsers: number = 0;
  bananaUsers: number = 0;
  strawberryUsers: number = 0;

  constructor(private userService: UserService) { }

  ngOnInit() {


    this.userSubscription = this.userService.getAll().subscribe(
      users => {
        users.forEach(user => {


          user.favoriteFruit === "apple" ? this.appleUsers++ : this.appleUsers;
          user.favoriteFruit === "banana" ? this.bananaUsers++ : this.bananaUsers;
          user.favoriteFruit === "strawberry" ? this.strawberryUsers++ : this.strawberryUsers;

        })
      }
    );
  }

}
