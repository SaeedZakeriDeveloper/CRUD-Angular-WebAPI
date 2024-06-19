import {Injectable} from '@angular/core';
import {Employee} from "./employee.model";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import CustomStore from "devextreme/data/custom_store";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData: Employee;
  list: Employee[];
  customDataSource: CustomStore;
  readonly rootURL = "http://localhost:64357/api";

  constructor(private http: HttpClient) {
    this.customDataSource = new CustomStore({
      key: 'EmployeeID',
      load: (loadOptions) => {
        console.log(loadOptions);
        let httpOptions = {
          headers: new HttpHeaders({
            'content-type': 'application/json',
            "dataType": "json"
          })
        };
        return this.http.post(this.rootURL + '/Employee/GetEmployeesWithFilter',
          {
            take: loadOptions.take, skip: loadOptions.skip
          }, httpOptions)
          .toPromise()
          .then((response: any) => {
            return {
              data: response.data,
              totalCount: response.totalCount,
            };
          })
          .catch((err) => {
            console.log(err);
            throw 'خطا در لود دیتا'
          });
      },
      //   insert: (values) = > {
      //   return this.http.post(this.rootURL + '/Employee/PostEmployee',formData)
      //     .toPromise()
      //     .catch(() => { throw 'ثبت رکورد ناموفق' });
      // },
      // remove: (key) => {
      //   return this.http.delete('https://mydomain.com/MyDataService/' + encodeURIComponent(key))
      //     .toPromise()
      //     .catch(() => { throw 'Deletion failed' });
      // },
      //   update: (key, values) => {
      //   return this.http.put('https://mydomain.com/MyDataService/' + encodeURIComponent(key), JSON.stringify(values))
      //     .toPromise()
      //     .catch(() => { throw 'Update failed' });
      // }
      // Needed to process selected value(s) in the SelectBox, Lookup, Autocomplete, and DropDownBox
      // byKey: (key) => {
      //     return this.http.get('https://mydomain.com/MyDataService?id=' + key)
      //         .toPromise();
      // }
    });
  }

  postEmployee(formData: Employee) {
    return this.http.post(this.rootURL + '/Employee', formData)
  }

  refreshList() {
    this.http.get(this.rootURL + '/Employee')
      .toPromise().then(res => this.list = res as Employee[]);
  }

  putEmployee(formData: Employee) {
    return this.http.put(this.rootURL + '/Employee/' + formData.EmployeeID, formData);
  }

  deleteEmployee(id: number) {
    return this.http.delete(this.rootURL + '/Employee/' + id);
  }

}
