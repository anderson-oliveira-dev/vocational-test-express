import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { questions } from '../js/data.js'
import { encryptData } from '../js/crypto.js'

export default {
    setup() {
        const router = useRouter()
        const index = ref(0)
        const answers = ref({})

        const currentQuestion = computed(() => questions[index.value])
        const total = questions.length
        const answeredCount = computed(() => Object.keys(answers.value).length)
        const progress = computed(() =>
            Math.round((answeredCount.value / total) * 100)
        )
        const isLast = computed(() => index.value === total - 1)
        const canSeeResult = computed(() => answeredCount.value === total)
        const canGoNext = computed(() => answers.value[index.value] !== undefined)

        function answer(optionIndex) {
            answers.value[index.value] = optionIndex
        }

        function next() {
            if (canGoNext.value && !isLast.value) index.value++
        }

        function previous() {
            if (index.value > 0) index.value--
        }

        function seeResult() {
            if (!canSeeResult.value) return

            const answersArray = questions.map((_, i) => answers.value[i])

            const encrypted = encryptData(answersArray)

            router.push({ name: 'result', query: { r: encrypted } })
        }

        return {
            index, answers, currentQuestion, total,
            answeredCount, progress, isLast, canSeeResult, canGoNext,
            answer, next, previous, seeResult,
        }
    },
    template: `
        <div class="card shadow-sm">
            <div class="card-body">

                <div class="d-flex justify-content-between mb-2">
                    <small class="text-muted">
                        Pergunta {{ index + 1 }} de {{ total }}
                    </small>
                    <small class="text-muted">
                        {{ progress }}% respondido
                    </small>
                </div>

                <div class="progress mb-4" style="height: 8px;">
                    <div class="progress-bar" :style="{ width: progress + '%' }"></div>
                </div>

                <h5 class="fw-semibold mb-4">
                    {{ currentQuestion.question }}
                </h5>

                <div class="d-flex flex-column gap-3">
                    <label
                        v-for="(opt, i) in currentQuestion.options"
                        :key="i"
                        class="form-check d-flex align-items-center gap-2 mb-0"
                        style="cursor: pointer;"
                    >
                        <input
                            class="form-check-input mt-0"
                            type="radio"
                            :name="'question-' + index"
                            :value="i"
                            :checked="answers[index] === i"
                            @change="answer(i)"
                        >
                        <span class="form-check-label">
                            {{ opt.text }}
                        </span>
                    </label>
                </div>

                <div class="d-flex justify-content-between mt-4">
                    <button
                        class="btn btn-outline-secondary"
                        :disabled="index === 0"
                        @click="previous"
                    >
                        ← Anterior
                    </button>

                    <button
                        v-if="!isLast"
                        class="btn btn-primary"
                        :disabled="!canGoNext"
                        @click="next"
                    >
                        Próximo →
                    </button>

                    <button
                        v-if="isLast"
                        class="btn btn-success"
                        :disabled="!canSeeResult"
                        @click="seeResult"
                    >
                        Ver meu resultado
                    </button>
                </div>

            </div>
        </div>
    `,
}