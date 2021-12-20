import { Component, OnInit } from '@angular/core';
import {timer} from "rxjs";
import {createLogErrorHandler} from "@angular/compiler-cli/ngcc/src/execution/tasks/completion";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  time: Date = new Date();
  test = timer(1000);
  sub: any;

  constructor() {

  }

  ngOnInit(): void {
    this.sub = this.test.subscribe(val => console.log(val))
    this.time.setHours(0);
    this.time.setMinutes(0);
    this.time.setSeconds(0);
  }

  addSeconds(time: number) {
    this.time.setSeconds(this.time.getSeconds() + time);
  }

  addMinutes(time: number) {
    this.time.setMinutes(this.time.getMinutes() + time);
  }

  addHour(time: number) {
    this.time.setHours(this.time.getHours() + time);
  }
}
