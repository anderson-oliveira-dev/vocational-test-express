import { areas } from '../js/data.js'

const areaIcons = {
    health: '🩺',
    engineering: '⚙️',
    sales: '🤝',
    management: '📊',
    teaching: '📚',
    aesthetics: '💅',
    tech: '💻',
    marketing: '📢',
}

const areaTaglines = {
    health: 'Cuidar de pessoas, saúde e bem-estar',
    engineering: 'Resolver desafios técnicos e projetar soluções',
    sales: 'Negociar, atender e conquistar clientes',
    management: 'Liderar, organizar e fazer negócios crescerem',
    teaching: 'Ensinar, orientar e desenvolver pessoas',
    aesthetics: 'Beleza, autoestima e cuidados pessoais',
    tech: 'Programar, criar soluções digitais e inovar',
    marketing: 'Comunicar, criar campanhas e conectar marcas',
}

const discoveries = [
    { icon: '🎯', title: 'Sua área principal', description: 'Qual das 8 áreas mais combina com o seu perfil e por quê.' },
    { icon: '📊', title: 'Ranking completo', description: 'Todas as áreas ordenadas por afinidade com suas respostas.' },
    { icon: '🎓', title: 'Formações recomendadas', description: 'Cursos que fazem sentido para a sua área de maior destaque.' },
    { icon: '✨', title: 'Segunda afinidade', description: 'Outra área que merece sua atenção e também combina com você.' },
    { icon: '🔍', title: 'Compatibilidade', description: 'O quanto você realmente se identifica com sua área top.' },
    { icon: '🚀', title: 'Próximos passos', description: 'Um ponto de partida para explorar sua área com confiança.' },
]

export default {
    setup() {
        const areaList = Object.entries(areas).map(([key, area]) => ({
            key,
            icon: areaIcons[key] || '📌',
            name: area.name,
            tagline: areaTaglines[key] || '',
        }))

        function scrollToAreas() {
            document.getElementById('areas')?.scrollIntoView({ behavior: 'smooth' })
        }

        return { areaList, discoveries, scrollToAreas }
    },
    template: `
        <div class="home">

            <!-- ============ HERO ============ -->
            <section class="text-center pt-3 pb-5">
                <span class="badge rounded-pill text-white px-3 py-2 fw-normal mb-3 bg-unisertao">
                    <i class="bi bi-stars me-1"></i> Teste vocacional gratuito
                </span>

                <h1 class="display-4 fw-bold mb-3 text-brand">
                    Você sabe mesmo qual carreira combina com você?
                </h1>

                <p class="lead text-secondary mx-auto mb-4" style="max-width: 680px;">
                    Em poucos minutos, descubra qual das <strong class="text-brand">8 áreas do conhecimento</strong> mais combina com o seu perfil, as formações ideais e a área que merece sua atenção.
                </p>

                <div class="d-flex flex-wrap gap-2 justify-content-center mb-4">
                    <router-link to="/form" class="btn btn-brand btn-lg px-4">
                        Descobrir meu perfil <i class="bi bi-arrow-right ms-1"></i>
                    </router-link>
                    <button class="btn btn-outline-brand btn-lg px-4" @click="scrollToAreas">
                        Ver as 8 áreas <i class="bi bi-arrow-down ms-1"></i>
                    </button>
                </div>

                <div class="d-flex flex-wrap gap-4 justify-content-center text-secondary small">
                    <span>✅ Gratuito</span>
                    <span>🔒 Anônimo</span>
                    <span>⚡ Rápido</span>
                    <span>📊 Resultado imediato</span>
                </div>
            </section>

            <!-- ============ O QUE VOCÊ VAI DESCOBRIR ============ -->
            <section class="py-5 border-top border-light-subtle">
                <div class="text-center mb-5">
                    <p class="text-uppercase small fw-semibold mb-2 text-brand" style="letter-spacing: 1.5px;">
                        O que você vai descobrir
                    </p>
                    <h2 class="fw-bold mb-3">Um retrato completo do seu perfil vocacional</h2>
                    <p class="text-secondary mx-auto" style="max-width: 640px;">
                        Mais do que uma profissão: seu resultado mostra quais áreas combinam com você, o quanto cada uma se destaca e por onde começar.
                    </p>
                </div>

                <div class="row g-4">
                    <div class="col-md-6 col-lg-4" v-for="item in discoveries" :key="item.title">
                        <div class="card card-hover h-100 border-1 shadow-sm">
                            <div class="card-body p-4">
                                <div class="icon-circle icon-circle-sm mb-3">
                                    <span class="fs-4">{{ item.icon }}</span>
                                </div>
                                <h5 class="fw-semibold mb-2">{{ item.title }}</h5>
                                <p class="text-secondary small mb-0">{{ item.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ============ AS 8 ÁREAS ============ -->
            <section id="areas" class="py-5 border-top border-light-subtle">
                <div class="text-center mb-5">
                    <p class="text-uppercase small fw-semibold mb-2 text-brand" style="letter-spacing: 1.5px;">
                        As 8 áreas
                    </p>
                    <h2 class="fw-bold mb-3">Explore cada área do conhecimento</h2>
                    <p class="text-secondary mx-auto" style="max-width: 640px;">
                        O teste analisa sua afinidade com cada uma dessas áreas para revelar onde você se destaca.
                    </p>
                </div>

                <div class="row g-4">
                    <div class="col-sm-6 col-lg-3" v-for="area in areaList" :key="area.key">
                        <div class="card card-hover h-100 border-1 shadow-sm text-center">
                            <div class="card-body p-4">
                                <div class="icon-circle mb-3">
                                    <span class="fs-2">{{ area.icon }}</span>
                                </div>
                                <h6 class="fw-semibold mb-2">{{ area.name }}</h6>
                                <p class="text-secondary small mb-0">{{ area.tagline }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ============ CTA FINAL ============ -->
            <section class="py-5 border-top border-light-subtle text-center">
                <h3 class="fw-bold mb-2">Pronto para descobrir seu perfil?</h3>
                <p class="text-secondary mb-4">
                    São apenas <strong class="text-brand">10 perguntas</strong>. Resultado na hora.
                </p>
                <router-link to="/form" class="btn btn-brand btn-lg px-5">
                    <i class="bi bi-play-circle me-2"></i> Começar o teste
                </router-link>
            </section>

        </div>
    `,
}