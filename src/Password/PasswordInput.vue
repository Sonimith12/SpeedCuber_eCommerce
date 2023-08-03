<template>
    <input
      :type="passwordVisible ? 'text' : 'password'"
      v-bind="$attrs"
      v-model="password"
      @focus="showPassword"
      @blur="hidePassword"
    >
  </template>
  
  <script>
  export default {
    props: {
      value: String,
    },
    data() {
      return {
        password: this.value,
        passwordVisible: false,
      };
    },
    methods: {
      showPassword() {
        this.passwordVisible = true;
      },
      hidePassword() {
        this.passwordVisible = false;
      },
    },
    watch: {
      value(newVal) {
        this.password = newVal;
      },
    },
  };
  </script>
  