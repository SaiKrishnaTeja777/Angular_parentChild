"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ChildComponent = (function () {
    function ChildComponent() {
        this.childValue = new core_1.EventEmitter();
    }
    ChildComponent.prototype.onChange = function (value) {
        this.childValue.emit(value);
    };
    return ChildComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChildComponent.prototype, "parentValue", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ChildComponent.prototype, "childValue", void 0);
ChildComponent = __decorate([
    core_1.Component({
        selector: 'child-comp',
        template: "<h1>Child Component</h1>\n             <label>Enter Child Value</label>\n            <input type='text' #childText (keyup)=\"onChange(childText.value)\">\n            <h3>Value from parent component : {{parentValue}} </h3>"
    }),
    __metadata("design:paramtypes", [])
], ChildComponent);
exports.ChildComponent = ChildComponent;
//Things Happening When sending data from child to parent
//1. Create a variable like 'childText' for the input value from the form
//2. use keyup event and bind a event which is created by 'EventEmitter'
//3 pass the event emitter with function onChange and pass the value
//4. pass the value to the childValue event in the parent component and when that happens assign childData local
//   variable to the $event which has the output value of the event
//5. Now print the value which is assigned here print childData 
//# sourceMappingURL=child.component.js.map