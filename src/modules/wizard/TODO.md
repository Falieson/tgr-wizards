# Wizard TODOs

## v0

- [x] Simple Stepper w/ RouteParams
- [x] Example Content for lots of pages
- [x] Wizard.ctx.theme = '../theme.scss'

## V1

- [Stepper(A|B)?, Footer, Page, Header] instance of WizardComponent - Component that includes the ThemeConsumer

## GoldPlating

### WizardBuilder

- [x] the default function is makeWizard, the
- [ ] props:
  - [ ] Components: {id: string[]: Component}
  - [ ] type: Content | Form ?
    - [ ] Pages: {pg: number, section_id: string, component_id: string}[]
    - [ ] Sections: {id: string, label: string | (pg: number) => string, sublabel: string}[]
- [ ] WizardGenerator is the React.Component class the Wizardbuilder HOCs
  - [ ] input

#### Layouter

- probably the most complex portion of the WizardBuilder is the layouter
- props:
  - layout:

```text
LayoutItem: {
  component_id: string,
  purpose: 'stepper' | 'content' | 'form'
}

|------- top -------|
|left  center  right|
|------- bot -------|

{
  top: LayoutItem,
  left: LayoutItem,
}
```

Based on the "purpose" the component is passed methods

- "stepper" props: {steps: StepItems[], currentStep: number}
****