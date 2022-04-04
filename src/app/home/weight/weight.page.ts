import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.page.html',
  styleUrls: ['./weight.page.scss'],
})
export class WeightPage implements OnInit {
  units = [
    {
      name: 'kg',
      value: 'kg',
      formula: 1,
      result: 1,
    },
    {
      name: 'g',
      value: 'g',
      formula: 1000,
      result: 1000,
    },
    {
      name: 'mg',
      value: 'mg',
      formula: 1000000,
      result: 1000000,
    },
    {
      name: 'carat',
      value: 'carat',
      formula: 5000,
      result: 5000,
    },
    {
      name: 'tola',
      value: 'tola',
      formula: 85.73524,
      result: 85.73524,
    },
    {
      name: 'lb(pound)',
      value: 'lb(pound)',
      formula: 2.205,
      result: 2.205,
    },
    {
      name: 'ounce',
      value: 'ounce',
      formula:  35.274,
      result:  35.274,
    },
    {
      name: 'tonne',
      value: 'tonne',
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
