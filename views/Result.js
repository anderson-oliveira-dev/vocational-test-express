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
            .map(([key, count]) => ({ key, count, ...areas[key] }))
            .filter((area) => area.count > 0)
            .sort((a, b) => b.count - a.count)

        const maxCount = Math.max(...ranking.map((r) => r.count), 1)
        ranking.forEach((r) => {
            r.percent = Math.round((r.count / maxCount) * 100)
        })

        return {
            error: null,
            ranking,
            top: ranking[0],
            second: ranking[1] || null,
        }
    },
    template: `
        <div class="card result-card">
            <div class="card-body p-4 p-md-5">

                <div v-if="error">
                    <div class="alert alert-warning">{{ error }}</div>
                </div>

                <div v-else>

                    <!-- ============ CABEÇALHO ============ -->
                    <div class="text-center mb-4 fade-in-up">
                        <div class="icon-circle icon-circle-lg">
                            <i class="bi bi-mortarboard"></i>
                        </div>
                        <p class="text-uppercase text-brand small fw-semibold mb-2" style="letter-spacing: 1.5px;">
                            Seu perfil de interesses
                        </p>
                        <h2 class="fw-bold mb-3">{{ top.name }}</h2>
                        <p class="lead text-secondary mb-0">{{ top.description }}</p>
                    </div>

                    <hr class="my-4">

                    <!-- ============ RANKING ============ -->
                    <h5 class="fw-semibold mb-3">
                        <i class="bi bi-bar-chart-line me-2 text-brand"></i>
                        Suas áreas de maior afinidade
                    </h5>

                    <div class="d-flex flex-column gap-3 mb-4">
                        <div
                            v-for="(area, i) in ranking"
                            :key="area.key"
                            class="rank-item fade-in-up"
                            :class="{ 'rank-first': i === 0 }"
                            :style="{ animationDelay: (i * 80) + 'ms' }"
                        >
                            <div class="rank-header">
                                <div class="rank-name">
                                    <span
                                        class="rank-medal"
                                        :class="{
                                            'rank-medal-gold': i === 0,
                                            'rank-medal-silver': i === 1,
                                            'rank-medal-bronze': i === 2
                                        }"
                                    >
                                        {{ i + 1 }}
                                    </span>
                                    {{ area.name }}
                                </div>
                                <small class="rank-count">
                                    {{ area.count }} resposta{{ area.count === 1 ? '' : 's' }}
                                </small>
                            </div>
                            <div class="progress progress-animated">
                                <div
                                    class="progress-bar"
                                    :style="{ width: area.percent + '%' }"
                                ></div>
                            </div>
                        </div>
                    </div>

                    <hr class="my-4">

                    <!-- ============ SEGUNDA ÁREA ============ -->
                    <div
                        v-if="second"
                        class="second-area-card mb-4 fade-in-up"
                        :style="{ animationDelay: (ranking.length * 80 + 100) + 'ms' }"
                    >
                        <span class="second-area-badge">
                            <i class="bi bi-stars"></i>
                            Outra afinidade
                        </span>
                        <h5 class="fw-semibold mb-2">
                            <span class="text-brand">{{ second.name }}</span>
                        </h5>
                        <p class="text-secondary mb-0">{{ second.secondaryNote }}</p>
                    </div>

                    <!-- ============ FORMAÇÕES ============ -->
                    <div class="courses-section mb-4">
                        <h5 class="fw-semibold mb-2">
                            <i class="bi bi-mortarboard me-2 text-brand"></i>
                            Formações para conhecer
                        </h5>
                        <p class="text-secondary small mb-3">
                            Cursos que combinam com seu perfil de
                            <strong class="text-brand">{{ top.name }}</strong>:
                        </p>
                        <div class="d-flex flex-wrap gap-2">
                            <span
                                v-for="(course, idx) in top.courses"
                                :key="course"
                                class="course-badge"
                                :style="{ animationDelay: (idx * 60) + 'ms' }"
                            >
                                {{ course }}
                            </span>
                        </div>
                    </div>

                    <!-- ============ BOTÃO ============ -->
                    <div class="text-center mt-4">
                        <router-link to="/form" class="btn btn-brand btn-lg px-4">
                            <i class="bi bi-arrow-clockwise me-2"></i>
                            Refazer teste
                        </router-link>
                    </div>

                </div>
            </div>
        </div>
    `,
}