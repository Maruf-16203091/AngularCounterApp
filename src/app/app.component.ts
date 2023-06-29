import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counterapp';

  countNumber = 0;

  //resetnumber
  resetBtn() {
    this.countNumber = 0;
  }

  //increasenumber
  increaseBtn() {
    this.countNumber = this.countNumber + 1;
  }

  //decreasenumber
  decreaseBtn() {
    this.countNumber = this.countNumber - 1;
    if (this.countNumber < 0) {
      this.countNumber = 0;
    }
  }

}
