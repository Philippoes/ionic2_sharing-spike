import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';

import {SocialSharing} from 'ionic-native'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  whatsappShare() {
    SocialSharing.shareViaWhatsApp("Message Via WhatsApp", null /*Image*/, "https://medium.com/@philip.mzdb")
  }
  twitterShare() {
    SocialSharing.shareViaTwitter("Message Via Twitter", null /*Image*/, "https://medium.com/@philip.mzdb")
  }
  facebookShare() {
    SocialSharing.shareViaFacebook("Message Via Facebook", null /*Image*/, "https://medium.com/@philip.mzdb")
  }
  otherShare() {
    SocialSharing.share("General Share Sheet", null /*Image*/, "https://medium.com/@philip.mzdb")
  }


}
