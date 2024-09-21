import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule if needed

@Component({
  selector: 'app-displayhelloworld',
  standalone: true,
  imports: [CommonModule], // Add necessary modules here
  templateUrl: './displayhelloworld.component.html',
  styleUrls: ['./displayhelloworld.component.css']
})
export class DisplayhelloworldComponent {}
