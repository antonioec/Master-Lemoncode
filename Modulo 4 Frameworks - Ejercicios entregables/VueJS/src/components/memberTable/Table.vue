<template>
  <div>
    <h2>Member Page</h2>
    <search-bar-component :search-text="searchText" :on-search="onSearch"/>
    <v-btn type="submit" color="blue" @click="loadMembers">Load</v-btn>
    <table :class="$style.table">
      <member-head/>
      <tbody>
        <template v-for="member in members">
          <member-row :key="member.id" :member="member"/>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MemberHead from "./Head.vue";
import MemberRow from "./Row.vue";
import SearchBarComponent from './SearchBar.vue'
import { Member } from "../../model/member";
import { getAllMembers } from "../../api/memberAPI";

export default Vue.extend({
  name: "MemberTable",
  components: { MemberHead, MemberRow, SearchBarComponent },
  data: () => ({
    members: [] as Member[],
    organization: "lemoncode",
  }),
  methods: {
    loadMembers: function() {
      getAllMembers(this.organization).then(members => {
        this.members = members;
      });
    },
    onSearch: function(searchText) {
      this.organization = searchText;
    }
  },
  props: {
    searchText: String,
  }
});
</script>

<style module>
.table {
  border-collapse: collapse;
  width: 100%;
}

.table tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
