import { Component, OnInit } from '@angular/core';
import { HotelService } from './services/hotel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  customers: any[] = [];

  constructor(private hotelService: HotelService) {}

  ngOnInit() {
    this.hotelService.getCustomers().subscribe(
      (data) => {
        this.customers = data;
        console.log('Clientes:', data);
      },
      (error) => {
        console.error('Error obteniendo clientes', error);
      }
    );
  }
}
