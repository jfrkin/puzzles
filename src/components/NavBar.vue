<template>
  <header>
    <img
      alt="Šah logo"
      class="logo"
      src="@/assets/logo.jpg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="Najbolja stranica za vježbanje šaha." />

      <div class="nav-row">
        <div>
          <nav>
            <RouterLink to="/">Naslovnica</RouterLink>
            <RouterLink to="/puzzle">Puzzle</RouterLink>
          </nav>
        </div>
        <div class="user-info">
          <span v-show="!edit" @click="toggleEdit(this, username)"
            >Korisnik: {{ username }}</span
          >

          <label for="username" v-show="edit">Korisnik: </label>
          <input
            type="text"
            name="username"
            v-model="username"
            v-show="edit"
            @blur="saveEdit(ev, username)"
          />
          <br />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { RouterLink } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import { useAuthStore } from "../stores/auth";

export default {
  components: {
    HelloWorld,
    RouterLink,
  },
  data() {
    return {
      username: "",
      edit: false,
    };
  },
  beforeMount() {
    const store = useAuthStore();
    this.username = store.username;
  },
  methods: {
    toggleEdit: function (ev, username) {
      this.edit = !this.edit;

      // Focus input field
      if (username.edit) {
        Vue.nextTick(function () {
          ev.$$.input.focus();
        });
      }
    },

    saveEdit: function (ev, username) {
      const store = useAuthStore();
      this.toggleEdit(ev, username);
      store.setUsername(username);
    },
  },
};
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 1em 1em;
}

.logo {
  display: block;
  margin: 0 auto;
}

nav {
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.nav-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.user-info {
  display: flex;
  text-align: right;
  justify-content: center;
  align-items: center;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
