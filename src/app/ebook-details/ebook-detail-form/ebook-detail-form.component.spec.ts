import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbookDetailFormComponent } from './ebook-detail-form.component';

describe('EbookDetailFormComponent', () => {
  let component: EbookDetailFormComponent;
  let fixture: ComponentFixture<EbookDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EbookDetailFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EbookDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
