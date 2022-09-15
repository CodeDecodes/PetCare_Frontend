import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private dialogService: NbDialogService) {}
  isOn: boolean = false;
  menu1: boolean = false;
  items = [{ title: 'Profile' }, { title: 'Logout' }];
  ngOnIt() {
    this.router.navigate(['home']);
  }
  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, {
      context: 'this is some additional data passed to dialog',
    });
  }
  ClosePopUP(Switch: boolean) {
    this.isOn = Switch;
  }
  ToggleMenu() {
    if (this.menu1) {
      this.menu1 = false;
    } else {
      this.menu1 = true;
    }
  }
}
