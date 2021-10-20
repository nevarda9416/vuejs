import {createRouter, createWebHistory} from 'vue-router';
import Todo from '../components/Todo.vue'
const routes = [
    {
        path: "/",
        name: "Todo",
        components: Todo
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router