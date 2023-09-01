import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationsService } from '../services/reservations.service';

const COLUMNS_SCHEMA = [
  {
    key: "table_desk",
    type: "number",
    label: "Table'"
  },
  {
    key: "price",
    type: "number",
    label: "Price"
  },
  {
    key: "drink_food_title",
    type: "text",
    label: "Title"
  },
  
]


@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
//SELECT * FROM `reservation_items` ri JOIN `reservations` r on (r.id = ri.reservation_id) WHERE r.cafe_id = 2;
//SELECT r.table_desk, r.price, mi.drink_food_title FROM `reservation_items` ri JOIN `reservations` r on (r.id = ri.reservation_id) join menu_items mi on (ri.menu_items_id = mi.id) WHERE r.cafe_id = 2;
//r.table_desk, r.price, mi.drink_food_title


export class ReservationsComponent {
  constructor(private route: ActivatedRoute, private rezz: ReservationsService) {}
  
  dataSource: any;
  idc = Number(this.route.snapshot.paramMap.get('id'));
  report: Report;
  
  ngOnInit() : void {
    this.reportDefitinion();
  }
  
  reportDefitinion(){
    //const idc = Number(this.route.snapshot.paramMap.get('id'));
    this.rezz.getAllReservations(this.idc).subscribe((value) => {
      this.report = value.data;
      this.dataSource = this.report;
      console.log('proba users za waiters comp: ', this.report);
    });
  }
  
  displayedColumns: string[] = COLUMNS_SCHEMA.map(col => col.key);
  columnsSchema: any = COLUMNS_SCHEMA;
  
  
}
