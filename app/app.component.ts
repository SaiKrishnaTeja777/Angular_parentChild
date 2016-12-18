import { Component,Input } from '@angular/core';
import { ChildComponent } from './childcomponent/child.component';
@Component({
  selector: 'my-app',
  template: `<h1>Parent Component</h1>
            <label>Enter Parent Value</label>
            <input type='text' #pvalue (keyup) ="0">
            <h3>Value from child component : {{childData}}</h3>
            <child-comp (childValue)="childData=$event" [parentValue]='pvalue.value'></child-comp>
  `,
})
export class AppComponent  { 
  childData:string;
}


