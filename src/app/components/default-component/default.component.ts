import { Component, input, SimpleChanges } from '@angular/core';

@Component({
    selector: 'default-component',
    standalone: true,
    imports: [],
    templateUrl: './default.component.html',
    styleUrl: './default.component.scss',
})
export class DefaultComponent {
    title = input<string>();

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
    }
}
