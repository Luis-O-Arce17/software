import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  inventories: any[] = [];

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.getInventories();
  }

  getInventories(): void {
    this.inventoryService.getInventories().subscribe(
      data => this.inventories = data,
      error => console.error(error)
    );
  }
}