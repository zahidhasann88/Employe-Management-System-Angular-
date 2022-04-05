import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() dep:any;
  DepartmentId:number;
  DepartmentName:string;

  ngOnInit(): void {
    this.DepartmentId=this.dep.DepartmentId;
    this.DepartmentName=this.dep.DepartmentName;
  }
  addDepartment(){
   
    var val = {DepartmentId:this.DepartmentId,
               DepartmentName: this.DepartmentName};
    
    this.service.addDepartment(val).subscribe(res=>{
      alert(res.toString());
      console.log(res);
    });

  }

  updateDepartment(){
    var val = {DepartmentId:this.DepartmentId,
               DepartmentName: this.DepartmentName};

    this.service.updateDepartment(val).subscribe(res=>{
      alert(res.toString());
});
  }
}
