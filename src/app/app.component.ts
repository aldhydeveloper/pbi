import { Component } from '@angular/core';
import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { PowerBIEmbedModule } from 'powerbi-client-angular';
import { PowerBiEmbedComponent } from './power-bi-embed/power-bi-embed.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ GridModule, PagerModule, CommonModule, RouterOutlet, PowerBIEmbedModule, PowerBiEmbedComponent, GridListComponent,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'powerBIEbeded';
}
