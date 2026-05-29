import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
    templateUrl: './hero-page.component.html',
    styleUrl: './hero-page.component.css',
    imports: [UpperCasePipe]
})
export class HeroPageComponent {
    protected name = signal('Ironman');
    protected age = signal(45);
    protected heroDescription = computed(() => `${this.name()} - ${this.age()} años`);
    protected capitalizedName = computed(() => this.name().toUpperCase());

    changeHero(): void {
        this.name.set('Spiderman');
        this.age.set(19);
    }

    resetForm(): void {
        this.name.set('Ironman');
        this.age.set(45);
    }

    changeAge(): void {
        this.age.set(60);
    }
}