import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalculatorComponent} from "./components/calculator/calculator.component";
import {HomeComponent} from "./components/home/home.component";
import {TimerComponent} from "./components/timer/timer.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "calc", component: CalculatorComponent },
  { path: "timer", component: TimerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
