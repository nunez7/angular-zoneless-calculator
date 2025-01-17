import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorButtonComponent } from './calculator-button.component';
import { Component } from '@angular/core';

describe('CalculatorButtonComponent', () => {
    let fixture: ComponentFixture<CalculatorButtonComponent>;
    let compiled: HTMLElement;
    let component: CalculatorButtonComponent;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [CalculatorButtonComponent],
      }).compileComponents();
  
      fixture = TestBed.createComponent(CalculatorButtonComponent);
      compiled = fixture.nativeElement as HTMLElement;
      component = fixture.componentInstance;
  
      //Sirve para detectar atributos agregados mediante HostElement
      fixture.detectChanges();
    });

    it('Should create the app', () => {
        expect(component).toBeTruthy();
    });

    it('Should apply w-1/4 doubleSize is false', () => {
        const hostCssClasses: string[] = compiled.classList.value.split(' ');
    
        expect(hostCssClasses).toContain('w-1/4');
        expect(component.isDoubleSize()).toBeFalse();
    });
    
    it('Should apply w-2/4 doubleSize is true', () => {
        fixture.componentRef.setInput('isDoubleSize', true);
        fixture.detectChanges();
    
        const hostCssClasses: string[] = compiled.classList.value.split(' ');
    
        expect(hostCssClasses).toContain('w-2/4');
        expect(component.isDoubleSize()).toBeTrue();
    });
    
    it('Should emit onClick when handleClick is called', () => {
        // Espías
        spyOn(component.onClick, 'emit');
    
        component.handleClick();
    
        expect(component.onClick.emit).toHaveBeenCalled();
        // expect(component.onClick.emit).toHaveBeenCalledWith('1');
    });

    it('Should set isPressed to true and then false when keyboardPressStyle is called with a matching key', (done) => {
        component.contentValue()!.nativeElement.innerText = '1';
        component.keyboardPressedStyle('1');
    
        expect(component.isPressed()).toBe(true);
    
        setTimeout(() => {
          expect(component.isPressed()).toBeFalse();
          //done sirve para decirle que se espere a que responda el clic y luego continue
          done();
        }, 101);
      });
    

});