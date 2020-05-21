import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient [] = [
    new Ingredient('apple', 3),
    new Ingredient('banana', 4),
  ]; //xác định loại cho ingredient và = mảng

  constructor() {
  }

  ngOnInit() {
  }

}
