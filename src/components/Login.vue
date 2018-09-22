<template>
    <div class="login">
        <h3>SignIn</h3>
        <input type="text" placeholder="Email"><br>
        <input type="password" placeholder="Password"><br>
        <button v-on:click="login">Connection</button>
        <p>You don't have an account ? You can <router-link to="/sign-up"> create one</router-link></p>
    </div>
</template>

<script>
export default {
    name: 'login',
    data: function(){
        return {}
    },
    methods: {
        login: function(){
            this.$router.replace('about')
        }
    }
}
</script>

<style scoped>

</style>

