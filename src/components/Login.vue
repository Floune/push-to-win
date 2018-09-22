<template>
    <div class="login">
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                
                    <v-card  class="mx-auto pa-4" >
                        <v-btn class="mb-0" block outline color="indigo" v-on:click="login">
                            <i aria-hidden="true" class="v-icon fab fa-github mr-2"></i> Connect with Github
                        </v-btn><br>
                        <v-btn class="mt-0" block outline color="indigo" v-on:click="logout"><i aria-hidden="true" class="v-icon "></i>Logout</v-btn>
                        <p class="text-md-center">You don't have an account ? You can
                            <router-link to="/sign-up"> create one here</router-link>
                        </p>
                    </v-card>
                
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import firebase from 'firebase'
    var provider = new firebase.auth.GithubAuthProvider();
    export default {
        name: 'login',
        data: function() {
            return {}
        },
        methods: {
            login: function() {
                firebase.auth().signInWithPopup(provider).then(function(result) {
                    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                    var token = result.credential.accessToken;
                    // The signed-in user info.
                    var user = result.user;
                    // ...
                    console.log('login success')
                    this.$router.replace('about')
                }).catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // The email of the user's account used.
                    var email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;
                    // ...
                    console.log('login error')
                });
    
            },
            logout: function() {
                firebase.auth().signOut().then(function() {
                    // Sign-out successful.
                    console.log('logout success')
                }).catch(function(error) {
                    // An error happened.
                    console.log('logout error')
                });
            }
        }
    }
</script>

<style scoped>
    
</style>

