import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Stephen } from '../stephen.model';

@Component({
    selector: 'app-child',
    template: `

        {{ stephen.firstName }}
        {{ stephen.lastName }}
        {{ stephen.fullName }}
        `,
    //styleUrls: ['./child.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ChildViewComponent implements OnInit {
    @Input() stephen: Stephen;
    @Output() onNameSelected: EventEmitter;

    constructor() {
        this.onNameSelected = new EventEmitter();
    }

    ngOnInit() {
    }

    clicked(name: string): void {
        this.onNameSelected.emit(name);
    }
}