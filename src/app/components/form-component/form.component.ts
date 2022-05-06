import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ForecastService } from 'src/app/services/forecast.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  countyForm!: FormGroup;
  dataWeather!: any;

  constructor(private forecastService: ForecastService) { }

  ngOnInit(): void {
    this.countyForm = new FormGroup({
      county: new FormControl('')
    });
    this.getCounty();
  }

  getCounty() {
    this.forecastService.getCountyByName(this.countyForm.value.county).subscribe((data: any) => {
      this.dataWeather = { ...data };
      console.log('dataweaTher', this.dataWeather)
      // return this.dataWeather;
    }, error => {
      window.alert('Ops')
      console.log('error:>>', JSON.stringify(error, null, 4));
    });

    // return;
  }
}
