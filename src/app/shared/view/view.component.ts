import { Component, OnInit } from '@angular/core';
import { ChildTask } from 'src/app/model/child-task';
import { ChildTaskAPIService } from 'src/app/service/child-task-api.service';
import { AppPage } from 'e2e/src/app.po';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  childTask: ChildTask[];
  endTaskhtml: boolean = false;
  userFilter: any = { childTask: '', priority: '', startDate: '', endDate: '', parent: { parentTask: '' } };
  constructor(private childTaskAPI: ChildTaskAPIService,private auto:Router) {
    this.childTask = [];
  }

  EndTask(id) {

    this.childTaskAPI.getSingleChildTask(id)
      .subscribe((childtask) => {
        console.log(childtask);
        this.actualTask = childtask;
        this.editTask = {
          childTaskID: this.actualTask['childTaskID'],
          childTask: this.actualTask['childTask'],
          parent: this.actualTask['parent'],
          startDate: this.actualTask['startDate'],
          endDate: this.actualTask['endDate'],
          priority: this.actualTask['priority'],
          endTask: this.actualTask['endTask']
        };
        console.log(this.editTask);
        this.editTask['endTask'] = true;
        console.log(this.editTask['endTask'] );
        this.endTaskhtml=this.editTask['endTask'];
        this.childTaskAPI.update(this.editTask)
          .subscribe((resp) => {
            console.log(resp);
          });
      });
      setTimeout(()=>{
        this.auto.navigate(['']);
         },1000);
  }

  ngOnInit() {
    this.childTaskAPI.getAllChildTask().subscribe(
      data => {
        this.childTask = data;
      });
  }
  actualTask: Object = {};
  editTask: Object = {};
}
