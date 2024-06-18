import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapNavbarComponent } from './bootstrap-navbar.component';

describe('BootstrapNavbarComponent', () => {
  let component: BootstrapNavbarComponent;
  let fixture: ComponentFixture<BootstrapNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BootstrapNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BootstrapNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
