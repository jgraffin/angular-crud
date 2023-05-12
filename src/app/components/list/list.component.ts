import { Component } from '@angular/core';

import { IAnimals } from 'src/app/interfaces/IAnimals';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  animals: IAnimals[] = [];

  animalDetails = 0;

  constructor(private listService: ListService) {
    this.getAnimals();
  }

  onShowAge(animal: IAnimals) {
    this.animalDetails = animal.age;
  }

  onRemoveAnimal(animal: IAnimals) {
    this.animals = this.animals.filter((item) => animal.name !== item.name);
    this.listService.remove(animal.id).subscribe();
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => this.animals = animals);
  }
}
