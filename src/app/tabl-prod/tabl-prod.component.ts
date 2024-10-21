import { HttpClient } from '@angular/common/http';
import {Component} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { RouterLink } from '@angular/router';

export interface PeriodicElement {
  title: string;
  id: number;
  weight: number;
  price: number;
  brand: string;
  stock: number;
}

const ELEMENT_DATA: PeriodicElement[] = [

];
@Component({
  selector: 'app-tabl-prod',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterLink],
  templateUrl: './tabl-prod.component.html',
  styleUrl: './tabl-prod.component.css'
})
export class TablProdComponent {
  displayedColumns: string[] = ['id', 'brand', 'title', 'price', 'stock', 'weight'];
  dataSource = ELEMENT_DATA;  

  constructor(private http: HttpClient) {
    http.get<IResponse>("https://dummyjson.com/products").subscribe(data => 
      this.dataSource = data.products
    )
  }
}


interface IResponse {
  products: PeriodicElement[];
}