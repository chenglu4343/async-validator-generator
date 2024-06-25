import Schema from "async-validator";
import { BasicRule } from "./src/BasicRule";
import { StringRule } from "./src/StringRule";

const schema = new Schema({
  name: {
    asyncValidator: new StringRule().addValidator(
      async (val) => Promise.reject("error")
    ).validator,
  },
});

schema.validate({}, (err) => {
  console.log(err);
});
