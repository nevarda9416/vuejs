<template>
  <TodoList :data="data"/>
</template>
<script setup lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import TodoList from '../normal/VList.vue';
export default defineComponent({
  components: {
    TodoList,
  },
  setup() {
    const todoStore = useStore();
    todoStore.dispatch('todo/getList');
    return {
      data: computed(() => todoStore.state.todo.list)
    }
  }
});
</script>
