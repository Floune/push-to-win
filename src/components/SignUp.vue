<template>
    <div class="sign-up">
<p>Let's create a new account</p>
<input v-model="email" type="text" placeholder="Email"><br>
<input v-model="password" type="password" placeholder="Password"><br>
<button v-on:click="signUp">Sign Up</button>
<span> or go back to <router-link to="/login">login</router-link></span>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name:'signUp',
    data: function (){
        return {
            email:'',
            password:''
        }
    },
    methods:{
        signUp: function(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                function (user) {
                    alert('Your account has been created !')
                },
                function (err){
                    alert('Oops. '+ err.message, console.log(this.email, this.password))
                }
            );
        }
    }
}
</script>
<style scoped>

</style>
