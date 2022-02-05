import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-loading',
  templateUrl: './btn-loading.component.html',
  styleUrls: ['./btn-loading.component.scss']
})
export class BtnLoadingComponent implements OnInit {
  title = "Booking";
  isLoading = false;
  constructor() { }

  ngOnInit(): void {
  }
  addAction() {
    this.title = "Loading...";
    this.isLoading = true;
    setTimeout(() => {
      this.title = "Booking";
      this.isLoading = false;
    }, 3000);
  }


}
