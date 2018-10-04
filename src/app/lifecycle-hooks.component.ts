import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  template: `
    <p>
      lifecycle-hooks works!
    </p>
  `,
  styles: []
})
export class LifecycleHooksComponent implements OnInit, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, DoCheck, OnChanges {

  constructor() { }

  ngOnInit() {
    console.log('onInit');
  }
  ngDoCheck() {
    console.log('onCheck');
  }
  ngAfterContentChecked(){
    console.log('onACC');
  }
  ngAfterContentInit(){
    console.log('onACI');
  }
  ngOnChanges(){
    console.log('onChange');
  }
  ngAfterViewChecked(){
    console.log('onAVC');
  }
  ngAfterViewInit(){
    console.log('onAVI');
  }

}
