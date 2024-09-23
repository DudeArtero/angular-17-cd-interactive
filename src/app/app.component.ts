import { Component, importProvidersFrom, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DefaultComponent } from './components/default-component/default.component';
import { OnPushComponent } from './components/onpush-component/onpush.component';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { TreeNode } from 'primeng/api';
import { CommonModule } from '@angular/common';

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
    imports: [CommonModule, RouterOutlet, OnPushComponent, DefaultComponent, OrganizationChartModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    appComponents: TreeNode<InteractiveComponent>[] = [
        {
            data: {
                type: ChangeDetectionType.DEFAULT,
                title: 'App component',
            },
            children: [
                {
                    data: {
                        type: ChangeDetectionType.DEFAULT,
                        title: 'App component',
                    },
                    children: [],
                },
            ],
        },
    ];

    selectedComponent = signal<OnPushComponent | DefaultComponent | undefined>(undefined);

    ChangeDetectionType = ChangeDetectionType;

    handleAddComponent(type: ChangeDetectionType) {}
}
