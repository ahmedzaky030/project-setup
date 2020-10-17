# Runing Serve Docker
docker run -e ACTIVE_PROFILE=h2 --name ecommerce-ns -p8090:8090 mwahbams/ecommerce-ns:0.1

## Server Info
# docker run -e ACTIVE_PROFILE=h2 --name ecommerce-ns  -p8090:8090 mwahbams/ecommerce-ns:0.1
#  http://localhost:8090/voyager  -- for models
#  http://localhost:8090/graphiql -- for console
#  http://localhost:8090/graphql -- for api
for DB
http://localhost:8090/h2-console -- Db console
#    url: jdbc:h2:~/h2-ns
#    username: admin
#    password: admin

# ECommerce

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
