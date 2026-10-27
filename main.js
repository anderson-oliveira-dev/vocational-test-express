import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './views/Home.js'
import Result from './views/Result.js'
import Form from './views/Form.js'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/',       component: Home,   name: 'home' },
        { path: '/form',   component: Form,   name: 'form' },
        { path: '/result', component: Result, name: 'result' },
        // rota 404 → redireciona pra home
        { path: '/:pathMatch(.*)*', redirect: '/' },
    ],
})

const App = {
    template: `
        <nav class="navbar navbar-dark bg-primary mb-4">
            <div class="container">
                <router-link to="/" class="navbar-brand">Teste Vocacional</router-link>
            </div>
        </nav>
            <main class="container pb-5">
            <router-view />
        </main>
    `,
}

createApp(App).use(router).mount('#app')