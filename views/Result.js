import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { decryptData } from '../js/crypto.js'
import { questions, areas } from '../js/data.js'

export default {
    setup() {
        const route = useRoute()
        const router = useRouter()
        const encrypted = route.query.r

        if (!encrypted) {
            onMounted(() => router.replace({ name: 'home' }))
            return {
                error: 'Nenhum resultado encontrado. Faça o teste primeiro.',
                ranking: [], top: null, second: null,
            }
        }

        const decrypted = decryptData(encrypted)
        if (!decrypted || !Array.isArray(decrypted)) {
            onMounted(() => router.replace({ name: 'home' }))
            return {
                error: 'Não foi possível descriptografar o resultado.',
                ranking: [], top: null, second: null,
            }
        }

        const counts = {}
        Object.keys(areas).forEach((k) => { counts[k] = 0 })

        decrypted.forEach((optIndex, qIndex) => {
            const areaKey = questions[qIndex]?.options?.[optIndex]?.area
            if (areaKey && counts[areaKey] !== undefined) counts[areaKey]++
        })

        const ranking = Object.entries(counts)
            .map(([key, count]) => ({
                key,
                count,
                ...areas[key],
            }))
            .sort((a, b) => b.count - a.count)

        const maxCount = Math.max(...ranking.map((r) => r.count), 1)
        ranking.forEach((r) => {
            r.percent = Math.round((r.count / maxCount) * 100)
        })

        return {
            error: null,
            ranking,
            top: ranking[0],
            second: ranking[1],
        }
    },
    template: `
        <div class="card shadow-sm">
            <div class="card-body p-4 p-md-5">

                <div v-if="error">
                    <div class="alert alert-warning">{{ error }}</div>
                </div>

                <div v-else>

                <div class="text-center mb-4">
                    <h1><i class="bi bi-mortarboard"></i></h1>
                    <p class="text-uppercase text-muted small fw-semibold mb-2" style="letter-spacing: 1.5px;">
                        Seu perfil de interesses
                    </p>
                    <h2 class="fw-bold mb-3">{{ top.name }}</h2>
                    <p class="lead mb-0">{{ top.description }}</p>
                </div>

                <hr class="my-4">

                <h5 class="fw-semibold mb-3">Suas áreas de maior afinidade</h5>
                <div class="d-flex flex-column gap-3 mb-4">
                    <div v-for="(area, i) in ranking" :key="area.key">
                        <div class="d-flex justify-content-between align-items-baseline mb-1">
                            <span class="fw-semibold">
                                <span class="text-muted me-1">{{ i + 1 }}.</span>
                                {{ area.name }}
                            </span>
                            <small class="text-muted">
                                {{ area.count }} resposta{{ area.count === 1 ? '' : 's' }}
                            </small>
                        </div>
                        <div class="progress" style="height: 8px;">
                            <div
                                class="progress-bar"
                                :class="i === 0 ? 'bg-success' : 'bg-primary'"
                                :style="{ width: area.percent + '%' }"
                            ></div>
                        </div>
                    </div>
                </div>

                <hr class="my-4">

                <div class="alert alert-info mb-4">
                    <h5 class="fw-semibold mb-2">
                        Outra área que merece sua atenção:
                        <span class="text-primary">{{ second.name }}</span>
                    </h5>
                    <p class="text-muted mb-4">{{ second.secondaryNote }}</p>

                    <h5 class="alert-heading fw-semibold mb-2">Formações para conhecer</h5>
                    <p class="mb-3 small">
                        Cursos que combinam com seu perfil de <strong>{{ top.name }}</strong>:
                    </p>
                    <div class="d-flex flex-wrap gap-2">
                        <span
                            v-for="course in top.courses"
                            :key="course"
                            class="badge bg-white text-dark border px-3 py-2 fw-normal"
                        >
                            {{ course }}
                        </span>
                    </div>
                </div>

                <div class="text-center">
                    <router-link to="/form" class="btn btn-primary">
                        Refazer teste
                    </router-link>
                </div>

                </div>
            </div>
        </div>
    `,
}