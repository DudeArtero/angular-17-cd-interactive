import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DefaultComponent } from './components/default-component/default.component';
import { OnPushComponent } from './components/onpush-component/onpush.component';

export enum ChangeDetectionType {
    DEFAULT = 'default',
    ONPUSH = 'onpush',
}

export interface InteractiveComponent {
    type: ChangeDetectionType;
    title: string;
    components?: InteractiveComponent;
}

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, OnPushComponent, DefaultComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    appComponents: InteractiveComponent[] = [
        {
            type: ChangeDetectionType.DEFAULT,
            title: "App component"
        }
    ]

    selectedComponent = signal<OnPushComponent | DefaultComponent | undefined>(undefined);

    ChangeDetectionType = ChangeDetectionType;

    handleAddComponent(type: ChangeDetectionType) {}
}
