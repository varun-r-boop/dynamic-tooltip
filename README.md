# @vr-boop/dynamic-tooltip

A dynamic tooltip directive for Angular that displays tooltips based on multiple conditions provided by the user.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Basic Setup](#basic-setup)
  - [Tooltip Conditions](#tooltip-conditions)
- [Contributing](#contributing)

## Installation

To install the package, run the following command:

```sh
npm install @vr-boop/dynamic-tooltip
```
## Usage
## Basic Setup

First, import the DynamicTooltipModule into your Angular module:

```typescript

// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DynamicTooltipModule } from '@vr-boop/dynamic-tooltip';

@NgModule({
  declarations: [
    AppComponent,
    // other components
  ],
  imports: [
    BrowserModule,
    DynamicTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Then, you can use the appDynamicTooltip directive in your component templates:

```typescript

// src/app/your-component/your-component.component.ts
import { Component } from '@angular/core';
import { TooltipCondition } from '@vr-boop/dynamic-tooltip';

@Component({
  selector: 'app-your-component',
  template: `
    <div [appDynamicTooltip]="tooltipData">
      Hover over me for tooltip
    </div>
  `
})
export class YourComponent {
  tooltipData = {
    data: {
      // your data here
    usage : number,
    limit : number,
    isTrail : boolean
    },
    conditions: [
      {
      condition: (data: any) => data.usage >= data.limit,
      message: "Display text 1"
    },
    {
      condition: (data: any) => data.Trail,
      message: (data: any) => `Display text 2`
    }
    ]
  };
}
```

## Tooltip Conditions

The appDynamicTooltip directive accepts a single input, tooltipConfig, which is an object containing:

    data: The data that will be evaluated against the conditions.
    conditions: An array of conditions that will determine the tooltip message.

Each condition in the conditions array should be an object with two properties:

    condition: A function that takes the data as an argument and returns a boolean indicating whether the condition is met.
    message: A string or a function that returns a string, which will be displayed as the tooltip message if the condition is met.
  

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.
