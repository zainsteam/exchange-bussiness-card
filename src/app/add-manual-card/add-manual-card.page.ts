import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-manual-card',
  templateUrl: './add-manual-card.page.html',
  styleUrls: ['./add-manual-card.page.scss'],
})
export class AddManualCardPage implements OnInit {

  constructor( public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  cerrar() {

    this.modalCtrl.dismiss();
}

}
