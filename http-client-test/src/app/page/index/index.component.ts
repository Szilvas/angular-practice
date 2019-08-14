import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  userSubscription: Subscription;
  activeUsers: number = 0;
  inactiveUsers: number = 0;
  totalBalance: number = 0;
  appleUsers: number = 0;
  bananaUsers: number = 0;
  strawberryUsers: number = 0;
  userList: User[];
  userNumber: number = 0;

  constructor(private userService: UserService) { }

  ngOnInit() {
    
    this.userSubscription = this.userService.getAll().subscribe(
      users => {
        users.forEach(user => {
          user.isActive === true ? this.activeUsers++ : this.inactiveUsers++;
          this.totalBalance += parseFloat(user.balance.replace("$", "").replace(",", ""));
          user.favoriteFruit === "apple" ? this.appleUsers++ : this.appleUsers;
          user.favoriteFruit === "banana" ? this.bananaUsers++ : this.bananaUsers;
          user.favoriteFruit === "strawberry" ? this.strawberryUsers++ : this.strawberryUsers;
          this.userList = users;
          this.userNumber = users.length;
        })
      }
    );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}