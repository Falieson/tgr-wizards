# TR-Wizard (TS React Wizard)

The reason this isn't in the components directory, but a 'modules' direcetory is because it is meant to be refactored into a standalone ts-react-module which can then be installed via npm from a private registry.

This means that there is some duplication between the structure of this folder and that of the parent-app, ie:

```text
.
├── helpers/   # dependencies that need to be included in the refactor, could violate DRY
├── types/     # dependencies that need to be included in the refactor, could violate DRY
├── theme.scss # dependencies that need to be included in the refactor, could violate DRY
```

Additionally, a module shouldn't import anything from outside of its direcetory, if it does - that thing that should be copied into the module directory and imported locally. Better yet, if its a common enough piece of code, move it into a new module folder and follow the regular abstraction pattern.

## Abstraction pattern

1. routes are layouts that import components
2. components import modules, whether first or third party
3. first party modules should be treated like and expected to behave like third party modules (ie: dependencies explanation above)

## Peer Dependencies

just to keep track of some expectations, would be done better in a `package.json`

### React-Router

- the app uses react-router (wizard makes use of currentLocation?Wz)
- could use query-string w/ window.location instead

### url-search-param

- experimental, requires polyfill (npm module)
