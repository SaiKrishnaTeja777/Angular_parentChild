import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component ({
    selector: 'child-comp',
    template:`<h1>Child Component</h1>
             <label>Enter Child Value</label>
            <input type='text' #childText (keyup)="onChange(childText.value)">
            <h3>Value from parent component : {{parentValue}} </h3>`
})
export class ChildComponent {
    @Input() parentValue:string;
    @Output() childValue: EventEmitter<string> = new EventEmitter();
    onChange(value:string){
        this.childValue.emit(value);
    }
}


//Things Happening When sending data from child to parent

//1. Create a variable like 'childText' for the input value from the form
//2. use keyup event and bind a event which is created by 'EventEmitter'
//3 pass the event emitter with function onChange and pass the value
//4. pass the value to the childValue event in the parent component and when that happens assign childData local
//   variable to the $event which has the output value of the event
//5. Now print the value which is assigned here print childData