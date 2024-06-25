<script setup lang="ts">
import { ref } from "vue";
import { NForm, NFormItem, FormInst, NInput, NButton, FormRules } from "naive-ui";
import { StringRule } from "../../../src/StringRule";

const formRef = ref<FormInst>()
const model = ref({})
const rules: FormRules = {
  name: {
    validator: new StringRule("name 必填").required().validator
  }
}
</script>

<template>
  <NForm ref="formRef" class="naive-form" :model="model" :rules="rules">
    <NFormItem path="name">
      <NInput />
    </NFormItem>
    <NFormItem>
      <NButton @click="formRef?.validate()" type="primary">提交</NButton>
    </NFormItem>
  </NForm>
</template>

<style>
.naive-form {
  width: 400px;
}
</style>
