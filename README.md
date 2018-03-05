# TripCalculator

An app to help users budget for travel by letting them know if they are saving
enough for upcoming trips.

## Development

This project has yet to launch and is currently in rapid development. 
Read this guide to get your environment ready and contribute.

### Angular

We use the [Angular framework](https://angular.io/) with [TypeScript](https://www.typescriptlang.org/index.html).
Angular has a lot of useful features as well as tools like [Angular CLI](https://github.com/angular/angular-cli)
 which generates code scaffolding, builds the project, runs the project in a
 development server and runs tests. There are also prebuilt components that we
 use to get a product sooner from the [Angular Material library](https://material.angular.io/).
 
### Getting Started

The project depends on [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/).
If you don't already have it, you will need to install Node - which includes npm
 in its install - before anything else. You'll use npm to get the rest.

To check if you already have Node and npm open a command line interface:
```
> node --version
v8.9.4
> npm --version
5.7.1
```
If you don't have these tools install them from their website.

Now you can get Angular CLI with npm. Make sure to install it globally:
```
> npm install -g @angular/cli
```

Assuming you have [git](https://git-scm.com/) installed on your computer, make
 sure you have forked the repository and cloned it to your machine.
```
> cd to/directory/for/repo
> git clone https://gitlab.com/your-username-here/trip-calculator.git
```

Finally, from within your project folder use npm to install the project's
 dependencies:
```
> npm install
```

Hopefully, the project builds after installing all of the packages. You're set to
 start writing some code if there aren't any errors.
 
Below are some helpful tools that Angular CLI provides. Go to their [wiki](https://github.com/angular/angular-cli/wiki)
 for more info.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app
 will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can
 also use `ng generate directive/pipe/service/class/module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the
 `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the
 [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
