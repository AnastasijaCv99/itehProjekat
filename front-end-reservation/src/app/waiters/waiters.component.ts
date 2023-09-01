import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule, MatTable } from '@angular/material/table';
import { AuthService } from '../services/auth.service';
import { User } from '../interfaces/user';
import { ActivatedRoute } from '@angular/router';

const COLUMNS_SCHEMA = [
  {
    key: "first_name",
    type: "text",
    label: "First name"
  },
  {
    key: "last_name",
    type: "text",
    label: "Last name"
  },
  {
    key: "email",
    type: "text",
    label: "Email"
  },
  {
    key: "cafe_id",
    type: "number",
    label: "Cafe id"
  },
  {
    key: "id",
    type: "number",
    label: "User id"
  },
  {
    key: "password",
    type: "text",
    label: "Password"
  },
  {
    key: "isEdit",
    type: "isEdit",
    label: ""
  }
]


@Component({
  selector: 'app-waiters',
  templateUrl: './waiters.component.html',
  styleUrls: ['./waiters.component.css'],
  //standalone: true,
  //imports: [MatButtonModule, MatTableModule, NgFor, CommonModule],
})

export class WaitersComponent {

constructor(private auth: AuthService, private route: ActivatedRoute) {}
users: User[] = [];
dataSource: any;
idc = Number(this.route.snapshot.paramMap.get('id'));


ngOnInit() : void {
  this.usersDefitinion();
}

usersDefitinion(){
  //const idc = Number(this.route.snapshot.paramMap.get('id'));
  this.auth.getAllUsersForCafe(this.idc).subscribe((value) => {
    this.users = value.data;
    this.dataSource = this.users;
    console.log('proba users za waiters comp: ', this.users);
  });
}

displayedColumns: string[] = COLUMNS_SCHEMA.map(col => col.key);
columnsSchema: any = COLUMNS_SCHEMA;

addRow() {
    const newRow = {"first_name": "", "last_name": "", "email": "", isEdit: true, cafe_id: this.idc, id: 0, password: null};
    this.dataSource = [...this.dataSource, newRow];
  }


  saveChange(user: any) {
    console.log(user);
    user[user.is_admin] = false;
    user[user.cafe_id] = this.idc;
    user[user.password] = null;
    this.auth.editUser(user).subscribe((res) => {
      console.log(res);
    })
  }

 /* columns = [
    {
      columnDef: 'name',
      header: 'First name',
      cell: (element: User) => `${element.first_name}`,
    },
    {
      columnDef: 'last',
      header: 'Last name',
      cell: (element: User) => `${element.last_name}`,
    },
    {
      columnDef: 'email',
      header: 'Email',
      cell: (element: User) => `${element.email}`,
    },
    /*{
      key: "isEdit",
      type: "isEdit",
      label: ""
    }
  ];
  
  displayedColumns = this.columns.map(c => c.columnDef);
*/
}