Specification of form validation rules in a project by convention.

# convention

- Use asyncValidators uniformly
- The check function only checks value, returns pormise, and uses resolve and reject to indicate whether the check passes
- Put all the validation rules in the validator

# Usage

```ts
import { BasicRule, StringRule } from 'async-validator-generator'

const rules = {
  name: {
    asyncValidator: new StringRule('name uncorrect')
      .required('nessary')
      .min(3)
      .max(10).validator,
  },
  complex: {
    asyncValidator: new BasicRule().addValidator((val) => {
      if (val === '123')
        return Promise.reject('123 is not allowed')
    }).validator,
  },
}
```

# Custom

```js
import { StringRule } from 'async-validator-generator'

export class CustomStringRule extends StringRule {
  telephone(message) {
    return this.matchReg(/^1[3-9]\d{9}$/, message)
  }
}
```
