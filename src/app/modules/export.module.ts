import {HomeModule} from "./home/home.module";
import {AuthModule} from "./auth/auth.module";
import {TimerModule} from "./timer/timer.module";
import {SharedModule} from "./shared/shared.module";
import {CalculatorModule} from "./calculator/calculator.module";

export const EXPORT_MODULES = [
  AuthModule,
  HomeModule,
  TimerModule,
  SharedModule,
  CalculatorModule
]
