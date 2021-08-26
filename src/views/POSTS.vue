<template>
  <div class="posts">
    <ul :key="data.id" v-for="data in allPosts">
      <li>{{ data.id }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';

export default {
  name: 'POSTS',
  computed: mapGetters(['allPosts']),
};
</script>
