import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablProdComponent } from './tabl-prod/tabl-prod.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TablProdComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shopORT';
}
