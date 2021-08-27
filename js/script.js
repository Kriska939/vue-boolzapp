Vue.config.devtools = true;

const app = new Vue({
    el: '#app',
    data: {
        data,
        currentUser: 0,
    },
    methods: {
        setCurrentUser(index) {
            this.currentUser = index;
        }
    },
});
