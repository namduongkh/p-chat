import { Component } from "@angular/core";
import { FriendshipService } from "../../services/friendship.service";

@Component({
    selector: 'invitation-list',
    templateUrl: 'invitation-list.html'
})
export class InvitationList {
    invitations: any = [];

    constructor(private friendshipSvc: FriendshipService) {
        this.friendshipSvc.invitations().subscribe((list) => {
            this.invitations = list || [];
        });
    }
}