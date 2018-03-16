import { Component } from "@angular/core";
import { ViewController } from "ionic-angular";

@Component({
    template: `
        <button ion-button full clear no-margin (click)="action('invite')">Kết bạn</button>
        <button ion-button full clear no-margin border-top (click)="action('conversation')">Hội thoại ngay</button>
    `
})
export class UserHandlePopover {
    constructor(public viewCtrl: ViewController) {
        // console.log('viewCtrl', this.viewCtrl);
    }

    action(actionName) {
        this.viewCtrl.data.action(actionName);
        this.viewCtrl.dismiss();
    }
}