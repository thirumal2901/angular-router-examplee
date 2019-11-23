import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Stephen } from './stephen.model';

@Component({
    selector: 'app-parent',
    template: `

        Hello, Mr. (or Ms.): {{ selectedName }}

`,
styleUrls: ['./parent-view.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ParentViewComponent implements OnInit {
    stephen: Stephen;
    selectedName: string;

    constructor() {
        this.stephen = new Stephen();
        this.selectedName = this.stephen.firstName;
    }

    ngOnInit() {
    }

    updateName(selectedName: string): void {
    console.log('in parent');
    this.selectedName = selectedName;
    }

}