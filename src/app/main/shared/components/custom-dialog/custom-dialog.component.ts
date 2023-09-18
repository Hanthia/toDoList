import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationStart, Router } from '@angular/router';
import { filter, take, tap } from 'rxjs';

@Component({
    selector: 'app-custom-dialog',
    templateUrl: './custom-dialog.component.html',
    styleUrls: ['./custom-dialog.component.scss']
})
export class CustomDialogComponent implements OnInit {
    @Input() title = '';
    constructor(public dialogRef: MatDialogRef<CustomDialogComponent>, router: Router) {
        // Close dialog ref on route changes
        router.events
            .pipe(
                // eslint-disable-next-line @typescript-eslint/typedef
                filter((event) => event instanceof NavigationStart),
                tap(() => this.dialogRef.close()),
                take(1)
            )
            .subscribe();
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function, @angular-eslint/no-empty-lifecycle-method
    ngOnInit(): void {}
}
