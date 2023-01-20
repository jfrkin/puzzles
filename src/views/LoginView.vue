<template>
    <div class="wrapper">
        <div class="container">
            <h2 class="mb-3">Login</h2>
            <form class="flex" @submit.prevent="login">
                <div class="input">
                    <label for="username">Korisničko ime: </label>
                    <input
                    class="form-control"
                    type="text"
                    name="username"
                    v-model.trim="username"
                    placeholder="Username"
                    />
                </div>
                <button type="submit" class="mt-4 btn-pers" id="login_button">
                    Login
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useAuthStore } from "../stores/auth";
export default {
    data() {
        return{
            username: "",
        };
    },
    computed: {
        ...mapState(useAuthStore, ["landingUrl"]),
    },
    methods: {
        ...mapActions(useAuthStore, ["setUsername"]),
        login() {
            this.setUsername(this.username);
            this.$router.push({ path: this.landingUrl });
        },
    },
};
</script>

<style scoped>
.wrapper{
    display: flex;
    width: 50vw;
    height: 90vh;
    justify-content: center;
    align-items: center;
}

.flex {
    display: flex;
    justify-content: flex-start;
}

label {
    margin-right: 1em;
}

button {
    margin-top: 1em;
}
.container {
    background: white;
    padding: 1em;
    color: black;
}
</style>