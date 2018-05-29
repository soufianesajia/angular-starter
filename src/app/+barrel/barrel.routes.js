"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var barrel_component_1 = require("./barrel.component");
exports.routes = [
    { path: '', children: [
            { path: '', component: barrel_component_1.BarrelComponent },
            { path: 'child-barrel', loadChildren: './+child-barrel#ChildBarrelModule' }
        ] },
];
