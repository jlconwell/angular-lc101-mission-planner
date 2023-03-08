import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experimentBeingEdited: string = null

  experiments: string [] = ["Soil", "Water", "Air Quality"];

  constructor() { }

  ngOnInit() {
  }

  add(test: string) {
    this.experiments.push(test);
  }

  remove(experiment: string) {
    let index = this.experiments.indexOf(experiment);
    this.experiments.splice(index, 1);
  }

  edit(experiment: string) {
    this.experimentBeingEdited = experiment;
 }

 save(updatedTest: string, test: string) {
  let index = this.experiments.indexOf(test);
  this.experiments[index] = updatedTest;
  this.experimentBeingEdited = null;
  }

}
