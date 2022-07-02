import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ForecastService } from 'src/app/services/forecast.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  countyForm!: FormGroup;
  dataWeather!: any;

  constructor(
    private forecastService: ForecastService,
    private toastService: ToastrService
    ) { }

  ngOnInit(): void {
    this.countyForm = new FormGroup({
      county: new FormControl('')
    });
  }

  getCounty() {
    this.forecastService.getCountyByName(this.countyForm.value.county).subscribe((data: any) => {
      this.dataWeather = { ...data };
    }, error => {
      this.toastService.warning('Ops, Município não foi encontrado', 'Aviso');
      // window.alert('Ops, município não encontrado !')
    });
  }
}
