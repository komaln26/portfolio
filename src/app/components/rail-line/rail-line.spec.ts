import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RailLine } from './rail-line';

describe('RailLine', () => {
  let component: RailLine;
  let fixture: ComponentFixture<RailLine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RailLine],
    }).compileComponents();

    fixture = TestBed.createComponent(RailLine);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
