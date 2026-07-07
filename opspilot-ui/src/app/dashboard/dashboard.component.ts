import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DashboardServiceService, DashboardService } from '../services/dashboard.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  services: DashboardService[] = [];
  errorMessage: string | null = null;

 constructor(
    private dashboardServiceService: DashboardServiceService,
    private cdr: ChangeDetectorRef  
  ) {}

  
  ngOnInit(): void {

    this.dashboardServiceService.getServices().subscribe({
      next: (data) => {
        this.services = data;
        this.cdr.detectChanges();   // 👈 force UI update
      },
      error: () => {
        this.errorMessage = '⚠️ API is unavailable, but UI is working fine.';
        this.cdr.detectChanges();
      }
    });
  }
}