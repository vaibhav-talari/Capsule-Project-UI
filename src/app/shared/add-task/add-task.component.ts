import { Component, OnInit } from '@angular/core';
import { ChildTask } from 'src/app/model/child-task';
import { ChildTaskAPIService } from 'src/app/service/child-task-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  childTaskObject: Object={};
  constructor(private childTaskAPI: ChildTaskAPIService,private auto:Router) { }

  ngOnInit() {
  }

  isChildTaskSaved: boolean;
  AddChildTask() {
    console.log(this.childTaskObject);
    this.childTaskAPI.createChildTask(this.childTaskObject).subscribe(
      (TaskSaved: any) => {
        console.log(TaskSaved);
        this.isChildTaskSaved = true;
      }
    );
    setTimeout(()=>{
      this.auto.navigate(['']);
       },1000)
  }

}
