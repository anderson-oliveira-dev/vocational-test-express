export const areas = {
    saude:         'Saúde',
    engenharias:   'Engenharias',
    comercio:      'Comércio e Vendas',
    gestao:        'Gestão e Negócios',
    licenciaturas: 'Licenciaturas',
    estetica:      'Estética e Cosmética',
    ti:            'Tecnologia da Informação',
    comunicacao:   'Comunicação e Marketing',
}

export const questions = [
    {
        question: 'Em um dia de trabalho ideal, o que você gostaria de fazer?',
        options: [
            { text: 'Ajudar pessoas a cuidar da saúde',       area: 'saude' },
            { text: 'Ensinar e orientar pessoas',             area: 'licenciaturas' },
            { text: 'Resolver desafios técnicos',             area: 'engenharias' },
            { text: 'Trabalhar com beleza e autoestima',      area: 'estetica' },
            { text: 'Negociar e atender clientes',            area: 'comercio' },
            { text: 'Criar soluções digitais',                area: 'ti' },
        ],
    },
    {
        question: 'Qual atividade parece mais interessante?',
        options: [
            { text: 'Investigar questões de saúde',           area: 'saude' },
            { text: 'Preparar uma atividade educativa',       area: 'licenciaturas' },
            { text: 'Projetar ou melhorar um equipamento',    area: 'engenharias' },
            { text: 'Criar um tratamento estético',           area: 'estetica' },
            { text: 'Organizar uma estratégia de vendas',     area: 'comercio' },
            { text: 'Desenvolver um aplicativo',              area: 'ti' },
        ],
    },
    {
        question: 'Em um trabalho em equipe, você prefere:',
        options: [
            { text: 'Cuidar das necessidades das pessoas',    area: 'saude' },
            { text: 'Explicar ideias e orientar colegas',     area: 'licenciaturas' },
            { text: 'Analisar problemas e soluções',          area: 'engenharias' },
            { text: 'Cuidar da apresentação e dos detalhes',  area: 'estetica' },
            { text: 'Convencer e negociar propostas',         area: 'comercio' },
            { text: 'Organizar tarefas e liderar resultados', area: 'gestao' },
        ],
    },
    {
        question: 'Qual assunto desperta mais sua curiosidade?',
        options: [
            { text: 'Corpo humano e qualidade de vida',       area: 'saude' },
            { text: 'Educação e aprendizagem',                area: 'licenciaturas' },
            { text: 'Máquinas, estruturas e energia',         area: 'engenharias' },
            { text: 'Cosméticos e cuidados pessoais',         area: 'estetica' },
            { text: 'Empreendedorismo e negócios',            area: 'gestao' },
            { text: 'Inteligência artificial e tecnologia',   area: 'ti' },
        ],
    },
    {
        question: 'Se pudesse criar um projeto, qual escolheria?',
        options: [
            { text: 'Campanha de prevenção à saúde',          area: 'saude' },
            { text: 'Programa de reforço escolar',            area: 'licenciaturas' },
            { text: 'Solução para economizar energia',        area: 'engenharias' },
            { text: 'Espaço de estética e bem-estar',         area: 'estetica' },
            { text: 'Loja com experiência diferenciada',      area: 'comercio' },
            { text: 'Campanha criativa para redes sociais',   area: 'comunicacao' },
        ],
    },
    {
        question: 'Qual habilidade você gostaria de desenvolver?',
        options: [
            { text: 'Cuidado e atenção clínica',              area: 'saude' },
            { text: 'Didática e comunicação educativa',       area: 'licenciaturas' },
            { text: 'Raciocínio técnico e matemático',        area: 'engenharias' },
            { text: 'Técnicas estéticas',                     area: 'estetica' },
            { text: 'Negociação e persuasão',                 area: 'comercio' },
            { text: 'Programação e análise de dados',         area: 'ti' },
        ],
    },
    {
        question: 'Que tipo de resultado traria mais satisfação?',
        options: [
            { text: 'Melhorar a qualidade de vida de alguém', area: 'saude' },
            { text: 'Ver uma pessoa aprender algo novo',      area: 'licenciaturas' },
            { text: 'Ver um projeto técnico funcionar',       area: 'engenharias' },
            { text: 'Aumentar a autoestima de alguém',        area: 'estetica' },
            { text: 'Superar uma meta comercial',             area: 'comercio' },
            { text: 'Fazer uma empresa crescer',              area: 'gestao' },
        ],
    },
    {
        question: 'Qual ambiente de trabalho mais combina com você?',
        options: [
            { text: 'Clínica ou laboratório',                 area: 'saude' },
            { text: 'Escola ou ambiente educativo',           area: 'licenciaturas' },
            { text: 'Indústria ou escritório de projetos',    area: 'engenharias' },
            { text: 'Clínica estética ou salão especializado', area: 'estetica' },
            { text: 'Loja ou equipe comercial',               area: 'comercio' },
            { text: 'Empresa de tecnologia',                  area: 'ti' },
        ],
    },
    {
        question: 'Se você abrisse um negócio, seria:',
        options: [
            { text: 'Um serviço de saúde e bem-estar',        area: 'saude' },
            { text: 'Uma escola ou espaço de cursos',         area: 'licenciaturas' },
            { text: 'Uma empresa de projetos técnicos',       area: 'engenharias' },
            { text: 'Um estúdio de estética',                 area: 'estetica' },
            { text: 'Uma loja física ou virtual',             area: 'comercio' },
            { text: 'Uma agência de marketing digital',       area: 'comunicacao' },
        ],
    },
    {
        question: 'Qual desafio você gostaria de enfrentar?',
        options: [
            { text: 'Encontrar formas de prevenir doenças',   area: 'saude' },
            { text: 'Tornar um conteúdo difícil mais fácil',  area: 'licenciaturas' },
            { text: 'Desenvolver soluções sustentáveis',      area: 'engenharias' },
            { text: 'Criar experiências de beleza personalizadas', area: 'estetica' },
            { text: 'Conquistar e fidelizar clientes',        area: 'comercio' },
            { text: 'Criar uma plataforma digital inovadora', area: 'ti' },
        ],
    },
]