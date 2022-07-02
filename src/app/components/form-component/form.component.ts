import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ForecastService } from 'src/app/services/forecast.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-component',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  countyForm!: FormGroup;
  dataWeather!: any;

  constructor(private forecastService: ForecastService,
    private toastService: ToastrService) { }

  ngOnInit(): void {
    this.countyForm = new FormGroup({
      county: new FormControl('')
    });
  }

  getCounty() {
    this.forecastService.getCountyByName(this.countyForm.value.county).subscribe((data: any) => {
      this.dataWeather = { ...data };
    }, error => {
      this.toastService.warning('Municipio não encontrado', 'AVISO');
      // window.alert('Ops, município não encontrado !');
    });
  }
}
