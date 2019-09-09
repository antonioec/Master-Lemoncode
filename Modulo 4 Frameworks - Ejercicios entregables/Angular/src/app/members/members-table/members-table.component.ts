import { Component, OnInit, Input } from '@angular/core';

import { MemberEntity } from '../models/member.model';
import { MembersApiService } from '../members-api.service';

@Component({
  selector: 'app-members-table',
  templateUrl: './members-table.component.html',
  styles: []
})
export class MembersTableComponent implements OnInit {
  members: MemberEntity[];
  organization: string;

  ngOnInit(): void {
    this.organization = 'Lemoncode';
  }

  constructor(private membersApi: MembersApiService) { }

  loadMembers() {
    this.membersApi.getAllMembers(this.organization)
      .subscribe((ms) => this.members = ms);
  }

  onSearch(value) {
    this.organization = value;
  }
}
