<template>
    <div class="test">
        <input type="text" v-model="title"><br>
        <h1>{{title}}</h1>
        <p>{{user.firstName}}</p>
        <p v-text="user.firstName"></p>
        <p v-if="showName">{{user.firstName}}</p>
        <p v-else>Nobody</p>
        <ul>
            <li v-for="item in items">{{item.title}}</li>
        </ul>
        <!-- with v-on event handlers can be attached to elements -->
        <button v-on:click="greet('Hello World')">Say Hello</button><br>
        <button v-on:click="greet">Say Hello</button><br>
        <!-- for key events there are predefined events that check for types of keys -->
        <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">
        <hr>
        <!-- v-model it's a tow way data binding -->
        <label>Frist Name</label><input type="text" v-model="user.firstName">
        <br>
        <label>Last Name</label><input type="text" v-model="user.lastName">
        <br>
        <!-- this is a computed proverty which is going to be updated based on the values of the properties that are used to build this property -->
        <h3>{{fullName}}</h3>
        <!-- this is a property that can be added to the component when it's used so you can change/set it's value inline with static values or values from the parent component -->
        <h2>{{msg}}</h2>
    </div>
</template>

<script>
export default {
    name: 'test',
    props: {
        msg: {
            type: String,
            default: 'Foobar'
        }
    },
    data() {
        return { 
            title: 'Hello World',
            user: {
                firstName: 'John',
                lastName: 'Doe'
            },
            showName: true,
            items: [
                {title: 'Item One'},
                {title: 'Item Two'},
                {title: 'Item Three'}
            ]
        }
    },
    methods: {
        greet(greeting) {
            alert(greeting);
        },
        pressKey(e) {
            console.log(e.target.value);
        },
        enterHit(){
            console.log('You hit enter');
        }
    },
    computed: {
        fullName() {
            return `${this.user.firstName} ${this.user.lastName}`;
        }
    }
}
</script>

<style scoped>
</style>
