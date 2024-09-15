import { ChangeDetectionStrategy, Component, input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'onpush-component',
    standalone: true,
    imports: [],
    templateUrl: './onpush.component.html',
    styleUrl: './onpush.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnPushComponent implements OnChanges {

    title = input<string>();

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
    }
}
