import { Component } from '@angular/core';
import { PowerBiEmbedComponent } from '../power-bi-embed/power-bi-embed.component';
import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PowerBIEmbedModule } from 'powerbi-client-angular';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [GridModule, PagerModule, CommonModule, RouterOutlet, PowerBIEmbedModule, PowerBiEmbedComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
