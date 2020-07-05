import { Component, OnInit } from '@angular/core';
import { MainService } from '../shared/services/main.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  hideAdmin = true;
  hideManager = true;
  hideClient = true;
  notfound = true;
  id_user = localStorage.getItem("id");
  constructor(private mainService: MainService) { }

  async ngOnInit() {
    this.hideAdmin = true;
    this.hideManager = true;
    this.hideClient = true;
    if (localStorage.getItem("role") == "1") {
      this.hideAdmin = false;
      this.hideManager = true;
      this.hideClient = true;
    }
    if (localStorage.getItem("role") == "2") {
      this.hideAdmin = true;
      this.hideManager = false;
      this.hideClient = true;
    }
    if (localStorage.getItem("role") == "3") {
      this.hideAdmin = true;
      this.hideManager = true;
      this.hideClient = false;
    }
  }
  }

//   ngDoCheck() {
//     this.hideAdmin = true;
//     this.hideManager = true;
//     this.hideClient = true;
//     if (localStorage.getItem("role") == "1") {
//       this.hideAdmin = false;
//       this.hideManager = true;
//       this.hideClient = true;
//     }
//     if (localStorage.getItem("role") == "2") {
//       this.hideAdmin = true;
//       this.hideManager = false;
//       this.hideClient = true;
//     }
//     if (localStorage.getItem("role") == "3") {
//       this.hideAdmin = true;
//       this.hideManager = true;
//       this.hideClient = false;
//     }
//   }
// }
