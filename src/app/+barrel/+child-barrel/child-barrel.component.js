"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */
console.log('`ChildBarrel` component loaded asynchronously');
var ChildBarrelComponent = /** @class */ (function () {
    function ChildBarrelComponent() {
    }
    ChildBarrelComponent.prototype.ngOnInit = function () {
        console.log('hello `ChildBarrel` component');
    };
    ChildBarrelComponent = __decorate([
        core_1.Component({
            selector: 'child-barrel',
            template: "\n    <h1>Hello from Child Barrel</h1>\n  ",
        })
    ], ChildBarrelComponent);
    return ChildBarrelComponent;
}());
exports.ChildBarrelComponent = ChildBarrelComponent;
