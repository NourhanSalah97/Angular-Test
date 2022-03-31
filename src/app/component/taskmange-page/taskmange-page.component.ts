import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-taskmange-page',
  templateUrl: './taskmange-page.component.html',
  styleUrls: ['./taskmange-page.component.css']
})
export class TaskmangePageComponent implements OnInit {
list:any[]=[];

  constructor() { }

  ngOnInit(): void {
  }
onClick(item:string) {
 this.list.push({id:this.list.length,task:item})
console.log(this.list)
}
removeTask(id:number) {
this.list=this.list.filter(item => item.id!==id);
}
}
