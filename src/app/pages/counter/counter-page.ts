import { Component, signal } from "@angular/core";

@Component({
    templateUrl: './counter-page.html',
    styleUrl: './counter-page.css',
})
export class CounterPageComponent {
    protected counter: number = 10;
    protected counterSignal = signal(10);

    increaseBy(value: number): void {
        this.counter += value;
        this.counterSignal.update(current => current + value);

    }

    decreaseBy(value: number): void {
        this.counter -= value;
        this.counterSignal.update(current => current - value);
    }

    reset(): void {
        this.counter = 0;
        this.counterSignal.set(0);
    }
}