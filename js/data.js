export const areas = {
    health: {
        name: 'Saúde',
        description: 'Você demonstra interesse pelo cuidado com as pessoas, pela promoção da saúde e por atividades que exigem atenção, responsabilidade e empatia.',
        secondaryNote: 'Seu perfil também revela afinidade com o cuidado, a prevenção e a promoção do bem-estar.',
        courses: ['Biomedicina', 'Farmácia', 'Fisioterapia', 'Nutrição', 'Fonoaudiologia', 'Terapia Ocupacional', 'Enfermagem'],
    },
    engineering: {
        name: 'Engenharias',
        description: 'Você se interessa por resolver desafios técnicos, projetar soluções e compreender como as coisas funcionam.',
        secondaryNote: 'Seu perfil também demonstra afinidade com raciocínio técnico, matemática e resolução de problemas.',
        courses: ['Engenharia Civil', 'Engenharia de Produção', 'Engenharia Elétrica', 'Engenharia Mecânica', 'Engenharia de Software', 'Arquitetura'],
    },
    sales: {
        name: 'Comércio e Vendas',
        description: 'Você gosta de negociar, atender pessoas e enxergar oportunidades comerciais.',
        secondaryNote: 'Seu perfil também indica facilidade com pessoas, negociação e conquista de resultados.',
        courses: ['Marketing', 'Administração', 'Comércio Exterior', 'Gestão Comercial', 'Logística'],
    },
    management: {
        name: 'Gestão e Negócios',
        description: 'Você se interessa por liderar, organizar e fazer negócios crescerem.',
        secondaryNote: 'Seu perfil também apresenta afinidade com liderança, organização e visão estratégica.',
        courses: ['Administração', 'Gestão de RH', 'Ciências Contábeis', 'Processos Gerenciais', 'Gestão Financeira'],
    },
    teaching: {
        name: 'Licenciaturas',
        description: 'Você demonstra afinidade com a aprendizagem, a comunicação de conhecimentos e o desenvolvimento de outras pessoas.',
        secondaryNote: 'Seu perfil também apresenta afinidade com a aprendizagem, a comunicação de conhecimentos e o desenvolvimento de outras pessoas.',
        courses: ['Pedagogia', 'Letras', 'História', 'Matemática', 'Biologia', 'Geografia'],
    },
    aesthetics: {
        name: 'Estética e Cosmética',
        description: 'Você se interessa por beleza, bem-estar e cuidados pessoais que elevam a autoestima.',
        secondaryNote: 'Seu perfil também mostra afinidade com estética, cosméticos e experiências de cuidado pessoal.',
        courses: ['Estética e Cosmética', 'Cosmetologia', 'Design de Beleza', 'Terapias Integrativas'],
    },
    tech: {
        name: 'Tecnologia da Informação',
        description: 'Você se interessa por criar soluções digitais, programar e trabalhar com tecnologia.',
        secondaryNote: 'Seu perfil também indica afinidade com lógica, programação e inovação digital.',
        courses: ['Ciência da Computação', 'Análise e Desenvolvimento de Sistemas', 'Engenharia de Software', 'Sistemas de Informação', 'Data Science', 'Segurança da Informação'],
    },
    marketing: {
        name: 'Comunicação e Marketing',
        description: 'Você se interessa por criar campanhas, comunicar ideias e conectar marcas a pessoas.',
        secondaryNote: 'Seu perfil também demonstra afinidade com criatividade, comunicação e marketing digital.',
        courses: ['Publicidade e Propaganda', 'Marketing Digital', 'Jornalismo', 'Relações Públicas', 'Design Gráfico'],
    },
}

export const questions = [
    {
        question: 'Em um dia de trabalho ideal, o que você gostaria de fazer?',
        options: [
            { text: 'Ajudar pessoas a cuidar da saúde',       area: 'health' },
            { text: 'Ensinar e orientar pessoas',             area: 'teaching' },
            { text: 'Resolver desafios técnicos',             area: 'engineering' },
            { text: 'Trabalhar com beleza e autoestima',      area: 'aesthetics' },
            { text: 'Negociar e atender clientes',            area: 'sales' },
            { text: 'Criar soluções digitais',                area: 'tech' },
        ],
    },
    {
        question: 'Qual atividade parece mais interessante?',
        options: [
            { text: 'Investigar questões de saúde',           area: 'health' },
            { text: 'Preparar uma atividade educativa',       area: 'teaching' },
            { text: 'Projetar ou melhorar um equipamento',    area: 'engineering' },
            { text: 'Criar um tratamento estético',           area: 'aesthetics' },
            { text: 'Organizar uma estratégia de vendas',     area: 'sales' },
            { text: 'Desenvolver um aplicativo',              area: 'tech' },
        ],
    },
    {
        question: 'Em um trabalho em equipe, você prefere:',
        options: [
            { text: 'Cuidar das necessidades das pessoas',    area: 'health' },
            { text: 'Explicar ideias e orientar colegas',     area: 'teaching' },
            { text: 'Analisar problemas e soluções',          area: 'engineering' },
            { text: 'Cuidar da apresentação e dos detalhes',  area: 'aesthetics' },
            { text: 'Convencer e negociar propostas',         area: 'sales' },
            { text: 'Organizar tarefas e liderar resultados', area: 'management' },
        ],
    },
    {
        question: 'Qual assunto desperta mais sua curiosidade?',
        options: [
            { text: 'Corpo humano e qualidade de vida',       area: 'health' },
            { text: 'Educação e aprendizagem',                area: 'teaching' },
            { text: 'Máquinas, estruturas e energia',         area: 'engineering' },
            { text: 'Cosméticos e cuidados pessoais',         area: 'aesthetics' },
            { text: 'Empreendedorismo e negócios',            area: 'management' },
            { text: 'Inteligência artificial e tecnologia',   area: 'tech' },
        ],
    },
    {
        question: 'Se pudesse criar um projeto, qual escolheria?',
        options: [
            { text: 'Campanha de prevenção à saúde',          area: 'health' },
            { text: 'Programa de reforço escolar',            area: 'teaching' },
            { text: 'Solução para economizar energia',        area: 'engineering' },
            { text: 'Espaço de estética e bem-estar',         area: 'aesthetics' },
            { text: 'Loja com experiência diferenciada',      area: 'sales' },
            { text: 'Campanha criativa para redes sociais',   area: 'marketing' },
        ],
    },
    {
        question: 'Qual habilidade você gostaria de desenvolver?',
        options: [
            { text: 'Cuidado e atenção clínica',              area: 'health' },
            { text: 'Didática e comunicação educativa',       area: 'teaching' },
            { text: 'Raciocínio técnico e matemático',        area: 'engineering' },
            { text: 'Técnicas estéticas',                     area: 'aesthetics' },
            { text: 'Negociação e persuasão',                 area: 'sales' },
            { text: 'Programação e análise de dados',         area: 'tech' },
        ],
    },
    {
        question: 'Que tipo de resultado traria mais satisfação?',
        options: [
            { text: 'Melhorar a qualidade de vida de alguém', area: 'health' },
            { text: 'Ver uma pessoa aprender algo novo',      area: 'teaching' },
            { text: 'Ver um projeto técnico funcionar',       area: 'engineering' },
            { text: 'Aumentar a autoestima de alguém',        area: 'aesthetics' },
            { text: 'Superar uma meta comercial',             area: 'sales' },
            { text: 'Fazer uma empresa crescer',              area: 'management' },
        ],
    },
    {
        question: 'Qual ambiente de trabalho mais combina com você?',
        options: [
            { text: 'Clínica ou laboratório',                 area: 'health' },
            { text: 'Escola ou ambiente educativo',           area: 'teaching' },
            { text: 'Indústria ou escritório de projetos',    area: 'engineering' },
            { text: 'Clínica estética ou salão especializado', area: 'aesthetics' },
            { text: 'Loja ou equipe comercial',               area: 'sales' },
            { text: 'Empresa de tecnologia',                  area: 'tech' },
        ],
    },
    {
        question: 'Se você abrisse um negócio, seria:',
        options: [
            { text: 'Um serviço de saúde e bem-estar',        area: 'health' },
            { text: 'Uma escola ou espaço de cursos',         area: 'teaching' },
            { text: 'Uma empresa de projetos técnicos',       area: 'engineering' },
            { text: 'Um estúdio de estética',                 area: 'aesthetics' },
            { text: 'Uma loja física ou virtual',             area: 'sales' },
            { text: 'Uma agência de marketing digital',       area: 'marketing' },
        ],
    },
    {
        question: 'Qual desafio você gostaria de enfrentar?',
        options: [
            { text: 'Encontrar formas de prevenir doenças',   area: 'health' },
            { text: 'Tornar um conteúdo difícil mais fácil',  area: 'teaching' },
            { text: 'Desenvolver soluções sustentáveis',      area: 'engineering' },
            { text: 'Criar experiências de beleza personalizadas', area: 'aesthetics' },
            { text: 'Conquistar e fidelizar clientes',        area: 'sales' },
            { text: 'Criar uma plataforma digital inovadora', area: 'tech' },
        ],
    },
]