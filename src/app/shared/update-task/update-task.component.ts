import { Component, OnInit } from '@angular/core';
import { ChildTask } from 'src/app/model/child-task';
import { ChildTaskAPIService } from 'src/app/service/child-task-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  
  editChildTaskId: number;
  isUpdated: boolean;
  isload: boolean=false;

  constructor(private childTaskAPI: ChildTaskAPIService, private getparam: ActivatedRoute) {
    this.getparam.params
      .subscribe(params => {
        console.log(params);
        this.editChildTaskId = Number(params.childTaskID);
      });
  }

  ngOnInit() {

    this.childTaskAPI.getSingleChildTask(this.editChildTaskId)
      .subscribe((childtask) => {
        console.log(childtask);
        this.actualTask = childtask;
        this.editTask={
          childTaskID:this.actualTask['childTaskID'],
          childTask:this.actualTask['childTask'],
          parent:this.actualTask['parent'],
          startDate:this.actualTask['startDate'],
          endDate:this.actualTask['endDate'],
          priority:this.actualTask['priority'],
          endTask:this.actualTask['endTask']
        };
        this.isload=true;
      }); 
      
  }
  updateBook() {
    console.log(this.editTask);
    this.childTaskAPI.update(this.editTask)
      .subscribe((resp) => {
        console.log(resp)
        this.isUpdated = true;
      });
  }
  actualTask: Object = {};
  editTask: Object = {};
}
