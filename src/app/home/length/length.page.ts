import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-length',
  templateUrl: './length.page.html',
  styleUrls: ['./length.page.scss'],
})
export class LengthPage implements OnInit {
  units = [
    {
      name: 'm',
      value: 'm',
      formula: 1,
      result: 1,
    },
    {
      name: 'cm',
      value: 'cm',
      formula: 100,
      result: 100,
    },
    {
      name: 'inch',
      value: 'inch',
      formula: 39.371,
      result: 39.371,
      toFixed: 2,
    },
    {
      name: 'dm',
      value: 'dm',
      formula: 10,
      result: 10,
    },
    {
      name: 'mm',
      value: 'mm',
      formula: 1000,
      result: 1000,
    },
    {
      name: 'ft',
      value: 'ft',
      formula: 3.281,
      result: 3.281,
    },
    {
      name: 'yd',
      value: 'yd',
      formula: 1.094,
      result: 1.094,
    },
    {
      name: 'mile',
      value: 'mile',
      formula: 0.000621371,
      result: 0.000621371
    },
    {
      name: 'km',
      value: 'km',
      formula: 0.001,
      result: 0.001,
    },
  ];
  constructor() {}

  ngOnInit() {}
  onChange(value: number | string, selectedValue: string) {
    const selectedFormula = this.units.filter((unit) => {
      return unit.value === selectedValue;
    })[0].formula;
    for (let unit of this.units) {
      unit.result = unit.formula * (+value / selectedFormula);
    }
  }
}
