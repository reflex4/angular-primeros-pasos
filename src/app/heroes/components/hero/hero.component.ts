import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;
  public showChangeNameButton: boolean = true;
  public showChangeAgeButton: boolean = true;

  public changeName(name: string): void {
    this.name = name;
    this.showChangeNameButton = false;
  }

  public changeAge(age: number): void {
    this.age = age;
    this.showChangeAgeButton = false;
  }

  public resetForm(): void {
    this.name = 'ironman';
    this.showChangeNameButton = true;
    this.age =45;
    this.showChangeAgeButton = true;
  }

  get capitalizedName(): string {
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }
}
