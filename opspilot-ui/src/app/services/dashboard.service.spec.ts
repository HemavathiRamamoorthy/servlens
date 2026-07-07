import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DashboardServiceService, DashboardService } from './dashboard.service';

describe('DashboardServiceService', () => {
  let service: DashboardServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DashboardServiceService]
    });
    service = TestBed.inject(DashboardServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should request dashboard services', () => {
    const mockResponse: DashboardService[] = [
      {
        id: '25304213-b1f9-48de-9f67-0cee98e2441d',
        serviceName: 'Customer Service',
        status: 'UP',
        version: '1.2.0',
        responseTime: 120,
        cpuUsage: 12.5,
        memoryUsage: 45.3,
        lastUpdated: '2026-07-06T17:00:59.757797500Z'
      }
    ];

    service.getServices().subscribe((services) => {
      expect(services).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('/api/dashboard/services');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
