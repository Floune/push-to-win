<template>
    <div class="container">
        
        <transition name="fade">
        <h1> {{ text }} </h1>
        </transition>
        <input class="input-group" v-model="text">
        
        <button class="btn btn-sm btn-outline-secondary" v-on:click="MupperText">Upper text</button>
        <button v-on:click="MlowerText">Lower text</button>
        <button v-on:click="MreverseText">Reverse text</button>
        <ul>
            <li v-for="item in array" :key="item.id">
                {{ item }}
            </li>
        </ul>
        
    </div>
</template>

<script>
    export default {
        name: 'Test',
        data() {
            return {
                text: 'toto',
                array: ['toto', 'tata', 'titi']
            }
        },
        computed: {
            CupperText: function() {
                // `this` points to the vm instance
                return this.text.toUpperCase();
            }
        },
        methods: {
            MupperText: function() {
                // `this` points to the vm instance
                this.text = this.text.toUpperCase();
            },
            MlowerText: function() {
                this.text = this.text.toLowerCase();
            },
            MreverseText: function() {
                this.text = this.text.split('').reverse().join('')
            }
        }
    }
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s;
    }
    
    .fade-enter,
    .fade-leave-to
    /* .fade-leave-active below version 2.1.8 */
    
    {
        opacity: 0;
    }
</style>

