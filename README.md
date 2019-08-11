# Contacts Assignment Project

Contacts appliction with functionality to create, and mark favorite contact.

This application is generated using Angular CLI versino 8.2.1

### Project Setup

1. Install Node version 10+, I have used Node version 12
2. Install Angular Cli version 8 globaly `npm i -g @angular/cli`
3. Use package manager of your choice; this project is using `yarn` as package manager; so you will find `yarn.lock` file to install exact dependencies as in original dev setup. To install yarn use `npm i -g yarn`
4. Clone project via `git clone https://github.com/mumairofficial/fm-contact.git`
5. CD into `fm-contacts` dir & install dependencies using `yarn install` or `npm install`
6. Once all dependencies installed then simple run `ng serve` or `yarn start`
7. Open chrome or firefox and enter `localhost:4200`

### Project Layout Design

For project layout design I got inspirations from twitter new design and column layout. I used utility first css library called `tailwind.css` to style individual component and some custom css.

### Project Structure Overview

This project is structured on top of angular style guidelines. There are 3 main directries to manage application logic.
Application is using very simple and reactive state management logic using rxjs observables; with the help of that application state is perdictable and maintainable from single source of truth.

Application architecture is as follows:

1. `app/core/` contains the logic and applicaion layout available globally in application
   - `components/` contains the application layout logic components such as look n feel `layout`, `left-navigation`, `topbar` and maintained their own module to easily add remove without jumping around appliction logic.
   - `contact.service.ts` contains the `BehaviourSubject` to maintain the application state globally such as `Contacts` and helper methods.
   - `core.module.ts` intended to provide application core dependencies.
2. `app/pages/` contains the views of appliction such as route page contacts & favorite contacts
   - `contact-home/` contain the page logic for listing all contacts and form to create new.
   - `favorite-contacts/` page consist of listing of favorite contacts
3. `app/shared/` contains the components, models which are resued in whole appliction.
   - `components/` contains the resueable component of `contact-item` to use for home contact and favorite contacts item listing.
   - `models/` contains the type defination of contact item to provide intellisense and type safetly wile coding.
   - `shared.module.ts` registered the reuseable components and other common modules to provide into application other modules.
4. `app/app-routing.module.ts` contains the global routing definations
5. `app/app.component.spec.ts` contains the basic test
6. `app/app.component.ts` contains the `router-outlet` to project component directly into view.
7. `app/app.module.ts` contains the global imports of routing and other modules to make them provide in application injector tree.

### Routing Techinique

Both lazy and eager module resolution strategy is used to download only those bits which are mandatory to load application logic

### Form Validation

This application is using angular reactive form module; which provide very ease to initiate form and apply custom or predefined validation rules.

### Karma Tests

Karma test files are included with basic coverage to verify component declaraion rendering with proper dependencies and check if there any compilation error

To run test command `yarn test` or `npm run test`

### Preview

![image](https://user-images.githubusercontent.com/6498132/62837890-4a556880-bc8e-11e9-8476-990a10ce4ede.png)
