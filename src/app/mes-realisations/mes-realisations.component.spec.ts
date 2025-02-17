import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesRealisationsComponent } from './mes-realisations.component';

describe('MesRealisationsComponent', () => {
  let component: MesRealisationsComponent;
  let fixture: ComponentFixture<MesRealisationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesRealisationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesRealisationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
