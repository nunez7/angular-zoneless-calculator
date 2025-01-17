import { Component, ChangeDetectionStrategy, HostListener, viewChildren } from '@angular/core';
import { CalculatorButtonComponent } from '../calculator-button/calculator-button.component';

@Component({
  selector: 'calculator',
  imports: [CalculatorButtonComponent],
  templateUrl: './calculator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './calculator.component.css',
  host: {
    '(document:keyup)': 'handleKeyboardEvent($event)'
  }
})
export class CalculatorComponent {

  public calculatorButtons = viewChildren(CalculatorButtonComponent);

  handleClick(key: string){
    console.log({key});
  }

  //@HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent){

    const keyEquivalents: Record<string, string> = {
      Escape: 'C',
      Clear: 'C',
      NumLock: 'C',
      '*': 'x',
      '/': '÷',
      Enter: '=',
    }
    
    const key = event.key;
    const keyValue = keyEquivalents[key] ?? key;


    //Llamamos el evento de buttons
    this.handleClick(keyValue);

    this.calculatorButtons().forEach(button => {
        button.keyboardPressedStyle(keyValue);
    });
  }
   
}
