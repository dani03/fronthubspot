import {  ref } from "vue";
import { defineStore } from "pinia";

export const useCompanies = defineStore("companies", () => {

  const companies = ref([]);
  function getCompanies() {
    return window.axios.get("companies").then((response) => {
      console.log( response.data);
      companies.value = response.data.data;
    });
  }

  return { getCompanies, companies };
});