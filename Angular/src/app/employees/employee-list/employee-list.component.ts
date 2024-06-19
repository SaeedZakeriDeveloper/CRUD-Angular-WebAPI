import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../../shared/employee.service";
import {Employee} from "../../shared/employee.model";
import {ToastrService} from "ngx-toastr";
import CustomStore from "devextreme/data/custom_store";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  customDataSource: CustomStore;

  constructor(private service: EmployeeService,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    // this.service.refreshList();
  }

  populateForm(emp: Employee) {
    // this.service.formData = Object.assign({}, emp);
  }

  onDelete(id: number) {
    // if (confirm("آیا مطمئن هستید؟")) {
    //   this.service.deleteEmployee(id).subscribe(res => {
    //     this.service.refreshList();
    //     this.toastr.warning('با موفقیت انجام شد', 'حذف');
    //   })
    // }
  }

}
