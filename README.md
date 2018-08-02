<p align='center'>
  <h1 align='center'>TGR-Wizards</h1>
  <h2>Compilation of example wizards made with prototype of `tr-wizard` module</h2>
  <hr />
</p>

## Downloading

The recommended downloading strategy is to use `git clone --recursive` due to some dependencies being git hosted submodules. If you don't do it this way the `nps setup.install.gx` script may loop indefinitely.

```bash
git clone --recursive https://github.com/Falieson/tgr-wizards.git
```

## Usage

(copy/pasted from `src/modules/wizard/README.md`)

```javascript
// WB: default values
interface IWizBuilderProps {
  id?: string,
  Container?: JSX.Element,
  Page?: JSX.Element,
  Stepper?: JSX.Element,
  theme?: any,    // tslint:disable-line no-any
}
function WizardBuilder({
  id = sid,
  Container = SimpleContainer,
  Page = SimplePage,
  Stepper = SimpleStepper,
  theme = T,
}: IWizBuilderProps
```

```javascript
// WB: instantiate
const Wizard = WizardBuilder({
  Stepper: BetterStepper,
  id: 'betterSimple',
})

// WB: usage
export default function() {
  return <Wizard>
    {...pages}
  </Wizard>
}
```

## File Structure

```text
src/
├── app/          - global app stuff
├── components/   - the pieces used in the routes, abstracts modules
├── helpers/      - useful functions
├── middlewares/  - third-party HOC functionality (apollo, router)
├── modules/      - first-party modules
    ├── gx        - author hasn't published rc4 which fixes a broken package
    ├── wizard    - prototyping the module before extracting it to its own module
├── routes/       - define page for a route
├── types/        - ts modules, common, interfaces
```

## Notable Features

- the module's `theme.scss` set vars that define the UI's palette
- the wizard is controlled by UrlSearchParams, can link to a page of the wizard
- the module is a WizardBuilder
  - a HOC that makes composing different Wizard UIs easy
  - while coordinating logic between the Wizard's parts
  - can pass themes to the Builder too
- React16 Context to pass data to components while skipping intermediary components

## TL;DR;

- The #1 LI in the "Docs" list below has lots of info about the underlying stack
- the only thing you really need to know to get started are 2 commands: `npm i -D && nps`

## A bit more...

- `s?css.d.ts` is generated by the webpack watcher

## The base stack isn't ready for prod

- the stack is made for app development
- it uses webpack-dev-server to deliver a standard development environment
- production stage for the tgr-app isn't done yet, which means the goal of being able to run `nps build.prod` and get a dist/ that can be consumed by `tgr-mono`(monolith) or `tgr-fullstack`(prototyping) apps.
- this app does't include an express-server so running `build.prod` doesn't give you something easily useable.

## Docs

- [tgr-app README](https://github.com/Falieson/2018-typescript-react-app/blob/7a531f503a36e2b09a65a7324f917918a1f0a9c0/README.md)
- [module PATTERNS](https://github.com/Falieson/tgrstack.com/wiki/Patterns)
