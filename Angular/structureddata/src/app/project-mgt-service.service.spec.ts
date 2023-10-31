import { TestBed } from '@angular/core/testing';

import { ProjectMgtServiceService } from './project-mgt-service.service';

describe('ProjectMgtServiceService', () => {
  let service: ProjectMgtServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectMgtServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
