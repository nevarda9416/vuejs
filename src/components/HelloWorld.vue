<template>
  <div class="hello">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">Vue Axios Post</div>
            <div class="card-body">
               <form @submit="formSubmit">
                  <strong>Title:</strong>
                  <input type="text" class="form-control" v-model="title"/>
                  <button class="btn btn-success">Submit</button>
               </form>               
               <strong>Output:</strong>
               <pre>
                  {{output}}
               </pre>
            </div>
          </div>            
        </div>
      </div>  
    </div>
    <h1>{{ msg }}</h1>
    <h2>{{ isVisible ? message : '' }}</h2>
    <p>{{showMessage()}}</p>
    <p>Câu chào sau khi chuyển đổi: '{{reverseMessage}}'</p>
    <p>Uppercase Message: '{{upperCaseMessage}}'</p>
    <p><a :href="href" v-if="seen">Bạn sẽ thấy tin nhắn này</a></p>
    <p v-bind:class='showClass'>Binding Class</p>
    <p v-bind:class="[{'active':isVisible},errorClass]">Array</p>
    <p v-bind:style="styleObject">Object</p>
    <p v-bind:style='[addActive,addError]'>Array</p>
    <div v-if="type==='A'">A</div>
    <div v-else-if="type==='B'">B</div>
    <div v-else-if="type==='C'">C</div>
    <div v-else>Not A/B/C</div>
    <template v-if="loginType==='username'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username-input">
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email-input">
    </template>
    <h1 v-show="ok">Hi!</h1>
    <p>Number: '{{number}}'</p>
    <p>Number To Word: '{{showNumberWord}}'</p>
    <input type='button' v-bind:disabled="isShowButton" value='Button Disabled'/>
    <input type='button' v-bind:disabled="!isShowButton" value='Button Enabled'/>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: 'Hello World!',
      isShowButton: true,
      isVisible: true,
      seen: true,
      href: '127.0.0.1:8081',
      number: '123456',
      activeClass: 'active',
      errorClass: 'error',
      styleObject: {
        color: 'blue',
        fontSize: '35px'
      },
      addActive: {
        'background': 'blue',
        'font-size': '20px'
      },
      addError: {
        'color': 'white'
      },
      ok: true,
      type: 'C',
      loginType: 'username',
      /////////////
      title: '',
      output: ''
    }
  },
  methods: {
    showMessage: function() {
      return "'" + this.message + "'";
    },
    formSubmit: function(e) {
      e.preventDefault();
      let currentObj = this;
      this.axios.post('http://127.0.0.1/angular_dev/php/create.php', {
        title: this.title
      })
      .then(function (response){
        currentObj.output = response.data;
      })
      .catch(function(error){
        currentObj.output = error;
      });
    }
  },
  computed: {
    reverseMessage: function() {
      return this.message.split('').reverse().join('')
    },
    showNumberWord: function() {
      console.log('Có gọi');
      var message = '';
      for (var i=0;i<this.number.length;i++){
        if (this.number[i] == "1"){
            message += "Một ";
        }
        else if (this.number[i] == "2"){
            message += "Hai ";
        }
        else if (this.number[i] == "3"){
            message += "Ba ";
        }
        else if (this.number[i] == "4"){
            message += "Bốn ";
        }
        else if (this.number[i] == "5"){
            message += "Năm ";
        }
        else if (this.number[i] == "6"){
            message += "Sáu ";
        }
        else if (this.number[i] == "7"){
            message += "Bảy ";
        }
        else if (this.number[i] == "8"){
            message += "Tám ";
        }
        else if (this.number[i] == "9"){
            message += "Chín ";
        }
        else if (this.number[i] == "0"){
            message += "Không ";
        }
      }
      return message;
    },
    upperCaseMessage: function() {
      // Mặc định Vue sẽ hiểu đây là getter nên phải có return
        return "[ " + this.message.toUpperCase() + " ]";
    },
    showClass: function() {
      return {
        'active': false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
