import { CalculatorComponent } from '@/calculator/components/calculator/calculator.component';
import { Component , ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'calculator-view',
  standalone: true,
  imports: [
    CalculatorComponent
  ],
  templateUrl: './calculator-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CalculatorViewComponent {

}
