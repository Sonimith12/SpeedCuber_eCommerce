<template>
    <div class="m-[50px] w-full">
      <ul class="w-full flex justify-start rounded-lg">
        <li class="border rounded-lg" v-for="tab in tabs" :key="tab" :class="{ 'active': tab === selected }">
          <a @click="setTab(tab)">
            {{ tab }}
          </a>
        </li>
      </ul>
      <slot></slot>
    </div>
  </template>
  
  <style>
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    display: inline-block;
  }
  
  a {
    display: block;
    padding: 10px 20px;
    text-decoration: none;
    color: #333;
    transition: background-color 0.3s ease;
  }
  
  a:hover {
    background-color: #f2f2f2;
  }
  
  li.active a {
    background-color: #888888;
    color: #fff;
    border-radius: 5px;
  }
  </style>
  
  <script>
  export default {
    props: {
      tabs: {
        type: Array,
        required: true,
      },
      selected: {
        type: String,
        required: true,
      },
    },
    methods: {
      setTab(tab) {
        this.$emit('selected', tab);
      },
    },
  };
  </script>
  