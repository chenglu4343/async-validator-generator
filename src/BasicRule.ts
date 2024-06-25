import type { RuleItem } from "async-validator";

type Validator<V> = (value: V) => Promise<string | undefined> | undefined;

export class BasicRule<V = any> {
  validators: Validator<V>[] = [];

  constructor(public defaultMessage?: string) {}

  get validator() {
    return (async (_rule, value, callback) => {
      let isCallback = false;

      await Promise.all(
        this.validators.map((validator) => validator(value))
      ).catch((reason: string) => {
        callback(reason || this.defaultMessage);
        isCallback = true;
      });

      !isCallback && callback();
    }) satisfies NonNullable<RuleItem["asyncValidator"]>;
  }

  addValidator(validator: Validator<V>) {
    this.validators.push(validator);
    return this;
  }
}
