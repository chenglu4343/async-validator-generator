<script setup>
import { ref } from 'vue'
import { NButton, NForm, NFormItem, NInput } from 'naive-ui'
import { StringRule } from '../../../src/StringRule'

const formRef = ref()
const model = ref({})
const rules = {
  name: {
    validator: new StringRule('name 必填').required().validator,
  },
}
</script>

<template>
  <NForm ref="formRef" class="naive-form" :model="model" :rules="rules">
    <NFormItem path="name">
      <NInput />
    </NFormItem>
    <NFormItem>
      <NButton type="primary" @click="formRef?.validate()">
        提交
      </NButton>
    </NFormItem>
  </NForm>
</template>

<style>
.naive-form {
  width: 400px;
}
</style>
