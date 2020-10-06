import { Component, OnInit } from '@angular/core';
import { Category } from './category.enum';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor() { }

  name: string;
  price: number;
  description: string;
  isAvailable: boolean;
  category: Category;

  ngOnInit(): void {
    this.name = "Adolf Hitler";
    this.description = "German dictator";
    this.isAvailable = false;
    this.category = Category.NotSuper;
  }

}
