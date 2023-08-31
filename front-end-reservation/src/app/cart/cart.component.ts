import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CafeService } from '../services/cafe.service';
import { Cafe } from '../interfaces/cafe';
import { MenuItemService } from '../services/menu-item.service';
import { MenuItems } from '../interfaces/menu-items';
import { SendReservation } from '../interfaces/send-reservation';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private userServise: AuthService, private router:Router, private route: ActivatedRoute, 
    private cafeService: CafeService, private menuService: MenuItemService) { };

  cafe: Cafe[];
  menuItem: MenuItems[];
  display = "none";
  tableNumberInput : any;

  reservationToSend: SendReservation = {
    cafe_id: 0,
    table_id: 0,
    price: 0,
    menuItems: ([]),
  };
  price: number = 0;

  ngOnInit(): void{
    this.cafeDefinition(); 
    this.cartItems();
  }

  cafeDefinition(){
    this.cafeService.selectedCafe$.subscribe((value) => {
      this.cafe = value;
    });
  }

  cartItems(){
    this.menuItem = this.menuService.returnArray();
    if (this.menuItem[0]==null) {
      console.log('nema nista jos');
    } else console.log('ima', this.menuItem);
  }

  onSubmit() {
    this.tableNumberInput = (<HTMLInputElement>document.getElementById("tableNumber")).value;
    //console.log('unesena vrednost stola: ', (document.getElementById("tableNumber") as HTMLInputElement).value);
    console.log('unesena vrednost stola je ', this.tableNumberInput);
    console.log('proba da li radi ovo iz carta, kafic  id je: ', this.cafe[0].id);
    console.log('proba za iteme: ', this.menuItem);

    this.reservationToSend.cafe_id = this.cafe[0].id;
    this.reservationToSend.table_id = this.tableNumberInput;

    this.menuItem.forEach(element => {
      element.price = element.price*element.quantity
      this.price =this.price + element.price;
    }); 
    this.reservationToSend.price = this.price;
    this.reservationToSend.menuItems = this.menuItem;
    console.log('finalni order: ', this.reservationToSend);

    this.menuService.makeAnOrder(this.reservationToSend).subscribe((res) =>
    {
      console.log(res)
    });

    this.display = "none";
    this.menuItem = [];
    this.menuService.emptyArray();
    //i na kraju isprazni niz ovaj sa itemima, kad posaljes porudzbinu i sve
  }

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
}
