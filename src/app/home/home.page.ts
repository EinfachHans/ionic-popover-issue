import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private popoverCtrl: PopoverController) {}

  present(event: MouseEvent) {
    this.popoverCtrl.create({
      component: PopoverComponent,
      event,
      cssClass: 'popover-fc'
    }).then((popover) => {
      popover.present();
    });
  }
}
