import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  empId:any;
 @Input() empName:any;


  constructor(private route:ActivatedRoute) {
    this.empId = this.route.snapshot.paramMap.get('id');
   
   }

  ngOnInit(): void {
  }

}
