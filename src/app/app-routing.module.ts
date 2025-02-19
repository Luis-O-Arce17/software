//Luis Arce: El Editor no reconocia este archivo, olvide ponet el ; en import

import { InventoryComponent } from './components/inventory/inventory.component'; //Luis Arce: arregle el error que salia en route y en InventoryComponent
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', component: InventoryComponent }
  ];