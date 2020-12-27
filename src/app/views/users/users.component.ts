import { FournisseurService } from './../../sres/fournisseur.service';
import { User } from './../../model/User';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 nom :string;
 users:User[];
 @Input() amal:string;
  constructor(private serviceUsers:FournisseurService) { }

  ngOnInit() {
    this.nom='khalilo fatiga';
    this.serviceUsers.getUsersWithHttpCall().subscribe(data=> {
      alert(data)
      console.log(data);
      this.users=data;
      console.log('users'+this.users);
      alert(this.users);
    });
  }

}
