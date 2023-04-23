<script setup>
import { onMounted } from "vue";
import { useCompanies } from "@/stores/companies";
//import { RouterLink } from "vue-router";

const store = useCompanies();
onMounted(store.getCompanies);
</script>

<template>
  <div>
     les companies

     <li v-for="company in store.companies" :key="company.id"><b>{{ company.name }}</b>  contacts ->
     
        <a v-for="contact in company.contacts" :key="contact.id"> {{ contact.firstname }}, </a>
     </li>

      
  </div>
</template>