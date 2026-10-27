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
        <div class="card quiz-card">
            <div class="card-body p-4 p-md-5">

                <!-- ============ CABEÇALHO ============ -->
                <div class="quiz-header">
                    <span class="quiz-counter">
                        <i class="bi bi-question-circle"></i>
                        Pergunta {{ index + 1 }} de {{ total }}
                    </span>
                    <span class="quiz-percent">{{ progress }}%</span>
                </div>

                <div class="progress quiz-progress">
                    <div class="progress-bar" :style="{ width: progress + '%' }"></div>
                </div>

                <!-- ============ PERGUNTA + OPÇÕES (com transição) ============ -->
                <Transition name="question-slide" mode="out-in" appear>
                    <div :key="index">

                        <h5 class="quiz-question">
                            {{ currentQuestion.question }}
                        </h5>

                        <div class="d-flex flex-column gap-3">
                            <label
                                v-for="(opt, i) in currentQuestion.options"
                                :key="i"
                                class="option-item"
                                :class="{ selected: answers[index] === i }"
                            >
                                <input
                                    class="form-check-input mt-0"
                                    type="radio"
                                    :name="'question-' + index"
                                    :value="i"
                                    :checked="answers[index] === i"
                                    @change="answer(i)"
                                >
                                <span class="option-text">{{ opt.text }}</span>
                            </label>
                        </div>

                    </div>
                </Transition>

                <!-- ============ NAVEGAÇÃO ============ -->
                <div class="quiz-nav">
                    <button
                        class="btn btn-outline-brand"
                        :disabled="index === 0"
                        @click="previous"
                    >
                        <i class="bi bi-arrow-left"></i>
                        Anterior
                    </button>

                    <button
                        v-if="!isLast"
                        class="btn btn-brand"
                        :disabled="!canGoNext"
                        @click="next"
                    >
                        Próximo
                        <i class="bi bi-arrow-right"></i>
                    </button>

                    <button
                        v-if="isLast"
                        class="btn btn-finish"
                        :disabled="!canSeeResult"
                        @click="seeResult"
                    >
                        <i class="bi bi-trophy-fill"></i>
                        Ver meu resultado
                    </button>
                </div>

            </div>
        </div>
    `,
}