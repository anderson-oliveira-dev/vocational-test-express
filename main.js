import { computed } from 'vue'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory, useRoute } from 'vue-router'

import Home from './views/Home.js'
import Result from './views/Result.js'
import Form from './views/Form.js'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/',       component: Home,   name: 'home' },
        { path: '/form',   component: Form,   name: 'form' },
        { path: '/result', component: Result, name: 'result' },
        { path: '/:pathMatch(.*)*', redirect: '/' },
    ],
})

const App = {
    setup() {
        const route = useRoute()
        const isHome = computed(() => route.name === 'home')
        return { isHome }
    },
    template: `
        <nav class="navbar navbar-dark navbar-app">
            <div class="container">
                <router-link to="/" class="navbar-brand d-flex align-items-center gap-2 mb-0">
                    <div class="brand-badge d-none d-sm-flex">
                        <i class="bi bi-mortarboard-fill"></i>
                    </div>
                    <div class="d-flex flex-column lh-1">
                        <span class="brand-title">Rede Unisertão | UniCesumar</span>
                        <span class="brand-subtitle d-none d-sm-block">Teste Vocacional Express</span>
                    </div>
                </router-link>

                <router-link v-if="isHome" to="/form" class="btn btn-light btn-sm fw-semibold">
                    Começar <i class="bi bi-arrow-right ms-1"></i>
                </router-link>
                <router-link v-else to="/" class="btn btn-outline-light btn-sm">
                    <i class="bi bi-arrow-left me-1"></i> Voltar
                </router-link>
            </div>
        </nav>

        <main class="app-main">
            <div class="container py-4 pb-5">
                <router-view />
            </div>
        </main>

        <footer class="footer-app">
            <div class="container">
                <div class="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start gap-2">
                    <div>
                        <strong>Rede Unisertão | UniCesumar</strong>
                        <div class="opacity-75">Teste Vocacional Express</div>
                    </div>
                    <div class="opacity-75">
                        © 2026 — Todos os direitos reservados
                    </div>
                </div>
                <div class="footer-divider text-center text-md-start opacity-50">
                    <small>Ferramenta de orientação vocacional de uso educacional.</small>
                </div>
            </div>
        </footer>
    `,
}

createApp(App).use(router).mount('#app')