import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userLogin: User = new User();
  constructor(
    private userSrv: UserService
  ) { }

  ngOnInit(): void {
    this.userSrv.getElement().then((userData:any)=>{
      if (userData != null) {
        this.userLogin.email = userData.email;
      }
      
    });
  }



  

}
