import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PourquoiNousComponent } from './pourquoi-nous.component';

describe('PourquoiNousComponent', () => {
  let component: PourquoiNousComponent;
  let fixture: ComponentFixture<PourquoiNousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PourquoiNousComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PourquoiNousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
