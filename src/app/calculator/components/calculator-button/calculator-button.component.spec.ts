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
    

});