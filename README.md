# vue-ch-reddit-client

Features
Demo: See [Application Demo](https://ronymateo2.github.io/vue-reddit-client/).

- [x] Pagination support (partially, missing reddit communication).
- [x] Saving pictures in the picture gallery(gallery route implemented)
- [x] App state-preservation/restoration(using vuex).
- [x] Indicator of unread/read post (there is a seen label in post list)
- [x] Dismiss Post Button. (Animations is implemented but there is a bug from time to time it does not apply the animation)
- [x] Dismiss All Button (Animations is implemented).
- [x] Support split layout
- [x] Responsive design.

## Decision

- Use vuetify + material as a system design
- Use Vuex to save the state of the application
- Vue-router allows us to create 2 routes / and /gallery
- Mock data for rapid prototyping
- Responsive Design comes with vuetify (drawer component provides a decent responsive design)

## Architecture

- Views contain all routes and interaction with Vuex and any services
- services contain all interaction with any rest API here it's possible to have more like auth, etc.
- Components interact with Views. Communication is just with props and events. They don't have any knowledge of any route or state. They just provide specific functionality.
- The model represents the entities in our application.
- State using a simple Vuex model

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Run your unit tests

```
npm run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
