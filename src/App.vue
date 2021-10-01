<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div v-for="post in posts">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      posts: []
    }
  },
  methods: {
    async getData () {
      try {
        const response = await this.$http.get(
          "http://jsonplaceholder.typicode.com/posts"
        )
        // JSON responses are automatically parsed.
        this.posts = response.data
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
