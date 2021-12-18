import {CalculatorModule} from "./calculator/calculator.module";
import {SharedModule} from "./shared/shared.module";
import {TimerModule} from "./timer/timer.module";
import {HomeModule} from "./home/home.module";

export const EXPORT_MODULES = [
  HomeModule,
  TimerModule,
  SharedModule,
  CalculatorModule,
]
