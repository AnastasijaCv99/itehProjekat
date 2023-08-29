import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CafeService } from '../services/cafe.service';
import { Cafe } from '../interfaces/cafe';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private userServise: AuthService, private router:Router, private route: ActivatedRoute, private cafeService: CafeService) { };

  cafe: Cafe;

  ngOnInit(): void{
    this.cafeDefinition(); 
  }

  cafeDefinition(){
    this.cafeService.selectedCafe$.subscribe((value) => {
      this.cafe = value;
      console.log('proba da li radi ovo iz carta ', value);
    });
  }
}
