import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettyImagesContainerComponent } from './getty-images-container.component';

describe('GettyImagesContainerComponent', () => {
  let component: GettyImagesContainerComponent;
  let fixture: ComponentFixture<GettyImagesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GettyImagesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GettyImagesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
