import { Component, OnInit } from '@angular/core';
import { MasterService } from '../service/master.service';

@Component({
  selector: 'app-employee-listing',
  templateUrl: './employee-listing.component.html',
  styleUrls: ['./employee-listing.component.css']
})
export class EmployeeListingComponent implements OnInit {
  empListing:any;

  constructor( private service:MasterService) {
    this.service.getAllEmployee().subscribe(data=>{
      this.empListing = data;
    })
   }

  ngOnInit(): void {

    getEmployeeList()
  
  }

}
function getEmployeeList() {
  
}

