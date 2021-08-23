<template>
  <div class="posts">
    {{ allPosts }}
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';

export default {
  name: 'POSTS',
  computed: mapGetters(['allPosts']),
};
</script>
