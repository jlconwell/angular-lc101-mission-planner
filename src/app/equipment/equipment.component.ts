import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  itemBeingEdited: string = null;

  equipmentList: string [] = ["Loader", "Flashlight", "Rover"];
  constructor() { }

  ngOnInit() {
  }

  add(item: string) {
    this.equipmentList.push(item);
  }

  remove(item: string) {
    let itemIndex = this.equipmentList.indexOf(item);
    this.equipmentList.splice(itemIndex, 1);
  }

  edit(item: string) {
    this.itemBeingEdited = item;
 }

 save(updatedItem: string, item: string) {
  let index = this.equipmentList.indexOf(item);
  this.equipmentList[index] = updatedItem;
  this.itemBeingEdited = null;
  }
}
