<template>
  
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'profile',
  computed: {
    ...mapState("session", ["user"])
  }
}
</script>

<style>

</style>
