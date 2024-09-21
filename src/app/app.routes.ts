// app.routes.ts
import { Routes } from '@angular/router';
import { DisplayhelloworldComponent } from './displayhelloworld/displayhelloworld.component';
import { ShowhellobuttonComponent } from './showhellobutton/showhellobutton.component';
// Import other components here

// Declare the routes array and export it
export const routes: Routes = [
  { path: 'displayhelloworld', component: DisplayhelloworldComponent },
  { path: 'showhellobutton', component: ShowhellobuttonComponent },
  // Add other route configurations here
];
