import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../shared.module';
import { CustomDialogComponent } from './custom-dialog.component';

describe('CustomDialogComponent', () => {
    let component: CustomDialogComponent;
    let fixture: ComponentFixture<CustomDialogComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CustomDialogComponent],
            imports: [SharedModule, HttpClientTestingModule, RouterTestingModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CustomDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
