import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { ChildTask } from '../model/child-task';

@Injectable({
  providedIn: 'root'
})
export class ChildTaskAPIService {

  baseurl:string;

  constructor(private http:Http) {
    this.baseurl="http://localhost:8585/child";
   }

   createChildTask(childTaskData)
  {
    console.log(childTaskData);
   return this.http.post(this.baseurl+"/add-child-task",childTaskData)
    //receive responce from REST API
    .pipe(map(response => {
      console.log(response);
      return response.json();
      
        }
      ));
  }

   getAllChildTask():Observable<ChildTask[]>{
      return this.http.get(this.baseurl+"/view-all-child-tasks").pipe(
        map(response=> {
          console.log(response);
          return response.json();
            }
      ));

   }

   getSingleChildTask(id){
     console.log(id);
    return this.http.get(this.baseurl+"/child-task/"+id)
    .pipe(map(response => {
      console.log(response);
      return response.json();
        }
      ));
  }
  update(updatetask)
      {
        console.log(updatetask);
        console.log(updatetask.childTaskID);
        return this.http.put(this.baseurl+"/edit-child-task/"+updatetask.childTaskID,updatetask)
        .pipe(map(response => {
         console.log(response);
          return response.json();
        }
      ));
      }
}
