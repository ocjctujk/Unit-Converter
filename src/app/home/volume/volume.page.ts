import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volume',
  templateUrl: './volume.page.html',
  styleUrls: ['./volume.page.scss'],
})
export class VolumePage implements OnInit {
  units = [
    {
      name: 'm',
      value: 'm',
      formula: 1,
      result: 1,
      isSup: true,
    },
    {
      name: 'L(litre)',
      value: 'L(litre)',
      formula: 1000,
      result: 1000,
    },
    {
      name: 'ml',
      value: 'ml',
      formula: 1000000,
      result: 1000000,
    },
    {
      name: 'cm',
      value: 'cm',
      formula: 1000000,
      result: 1000000,
      isSup: true,
    },
    {
      name: 'dm',
      value: 'dm',
      formula: 1000,
      result: 1000,
      isSup: true,
    },
    {
      name: 'mm',
      value: 'mm',
      formula: 1000000000,
      result: 1000000000,
      isSup: true,
    },
    {
      name: 'inch',
      value: 'inch',
      formula: 39.371 * 39.371 * 39.371,
      result: 39.371 * 39.371 * 39.371,
      isSup: true,
    },
    {
      name: 'ft',
      value: 'ft',
      formula: 3.281 * 3.281 * 3.281,
      result: 3.281 * 3.281 * 3.281,
      isSup: true,
    },
    {
      name: 'yd',
      value: 'yd',
      formula: 1.094 * 1.094 * 1.094,
      result: 1.094 * 1.094 * 1.094,
      isSup: true,
    },
    {
      name: 'km',
      value: 'km',
      formula: 0.001 * 0.001 * 0.001,
      result: 0.001 * 0.001 * 0.001,
      isSup: true,
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
