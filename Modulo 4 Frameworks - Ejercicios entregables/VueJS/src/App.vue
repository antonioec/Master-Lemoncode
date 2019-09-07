<template>
  <v-content>
    <v-container>
      <member-table :search-text="searchText" :on-search="onSearch"/>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import Vue from "vue";
import { MemberTable } from "./components";

export default Vue.extend({
  name: "App",
  components: { MemberTable },
  props: {
    searchText: String,
    onSearch: Function
  }
});
</script>
