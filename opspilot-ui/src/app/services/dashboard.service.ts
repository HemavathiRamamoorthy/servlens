import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface DashboardService {
  id: string;
  serviceName: string;
  status: 'UP' | 'DOWN' | 'DEGRADED' | string;
  version: string;
  responseTime: number; // in milliseconds
  cpuUsage: number; // percentage
  memoryUsage: number; // percentage
  lastUpdated: string; // ISO timestamp
}

@Injectable({ providedIn: 'root' })
export class DashboardServiceService {
  private apiUrl = '/api/dashboard/services';  // use proxy instead of hardcoded localhost

  constructor(private http: HttpClient) {}

  getServices(): Observable<DashboardService[]> {
    console.log('DashboardService.getServices() called');
    return this.http.get<DashboardService[]>(this.apiUrl).pipe(
      tap((data) => console.log('DashboardService.getServices() response:', data))
    );
  }
}
