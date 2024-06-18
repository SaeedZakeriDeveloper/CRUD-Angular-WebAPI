import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../../shared/employee.service";
import {NgForm} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: EmployeeService,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      EmployeeID: null,
      FullName: '',
      EMPCode: '',
      Mobile: '',
      Position: ''
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.EmployeeID == null) {
      this.insertRecord(form);
    } else {
      this.updatetRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.service.postEmployee(form.value).subscribe(res => {
      this.toastr.success('با موفقیت انجام شد', 'ثبت نام کارمند');
      this.resetForm(form);
      this.service.refreshList();
    })
  }

  updatetRecord(form: NgForm) {
    this.service.putEmployee(form.value).subscribe(res => {
      this.toastr.info('با موفقیت انجام شد', 'ویرایش کارمند');
      this.resetForm(form);
      this.service.refreshList();
    })
  }

}
