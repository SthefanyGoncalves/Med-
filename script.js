document.addEventListener('DOMContentLoaded', function() {
    const appContainer = document.getElementById('app-container');
    const landingPage = document.getElementById('landing-page');
    const userDashboard = document.getElementById('user-dashboard');
    const agendamentoPage = document.getElementById('agendamento-page');
    const rapidServicePage = document.getElementById('rapid-service-page');
    const loginForm = document.querySelector('.login-form');
    const logoutBtn = document.getElementById('logoutBtn');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const specialtyCards = document.querySelectorAll('.specialty-card');
    const specialtyNameElement = document.getElementById('specialty-name');
    const specialtyDescriptionElement = document.getElementById('specialty-description');
    const rapidButton = document.querySelector('.rapid-button');
    const closeRapidServiceBtn = document.getElementById('close-rapid-service');
    const canaisAtendimentoBtn = document.getElementById('canais-atendimento-btn');
    const dashboardUsername = document.getElementById('dashboard-username');

    const SPECIALTY_DATA = {
        "Cardiologista": "O cardiologista é o especialista em doenças do coração e do sistema circulatório, como hipertensão, arritmias e insuficiência cardíaca.",
        "Clínico Geral": "O clínico geral atua no diagnóstico e tratamento de uma ampla gama de condições médicas, servindo como o primeiro contato para a maioria dos problemas de saúde.",
        "Ginecologista": "O ginecologista cuida da saúde do aparelho reprodutor feminino, incluindo exames de rotina, prevenção de doenças e acompanhamento hormonal.",
        "Oftalmologista": "O oftalmologista é o médico responsável pela saúde dos olhos, tratando de problemas de visão, como miopia e astigmatismo, e doenças oculares.",
        "Alergologista": "O alergologista trata de alergias, incluindo asma, rinite alérgica e alergias alimentares, identificando a causa e indicando o tratamento adequado.",
        "Medicina Preventiva": "A medicina preventiva foca na prevenção de doenças e na promoção da saúde através de hábitos saudáveis, vacinação e exames de rotina."
    };

    function showScreen(screenId) {
        landingPage.classList.add('hidden');
        userDashboard.classList.add('hidden');
        agendamentoPage.classList.add('hidden');
        rapidServicePage.classList.add('hidden');
        
        document.getElementById(screenId).classList.remove('hidden');
    }

    if (togglePassword) {
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.classList.toggle('fa-eye-slash');
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = usernameInput.value;
            const password = passwordInput.value;

            if (username === 'Sprint3Teste' && password === 'EniacSprint') {
                showScreen('user-dashboard');
                dashboardUsername.textContent = username;
                logoutBtn.style.display = 'block';
                // Mostra Canais de Atendimento para o usuário de suporte
                canaisAtendimentoBtn.style.display = 'flex';
                alert('Login bem-sucedido! Bem-vindo, Sprint3Teste.');
            } else {
                alert('Usuário ou senha incorretos.');
            }
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            showScreen('landing-page');
            logoutBtn.style.display = 'none';
            canaisAtendimentoBtn.style.display = 'none';
            alert('Você saiu da sua conta.');
        });
    }

    specialtyCards.forEach(card => {
        card.addEventListener('click', function() {
            const specialty = this.dataset.specialty;
            specialtyNameElement.textContent = specialty;
            specialtyDescriptionElement.textContent = SPECIALTY_DATA[specialty];
            showScreen('agendamento-page');
        });
    });

    if (rapidButton) {
        rapidButton.addEventListener('click', function() {
            showScreen('rapid-service-page');
        });
    }

    if (closeRapidServiceBtn) {
        closeRapidServiceBtn.addEventListener('click', function() {
            // Volta para a tela principal (ou para o dashboard, se logado)
            if (logoutBtn.style.display === 'block') {
                showScreen('user-dashboard');
            } else {
                showScreen('landing-page');
            }
        });
    }

    const confirmAgendamentoBtn = document.getElementById('confirm-agendamento');
    if (confirmAgendamentoBtn) {
        confirmAgendamentoBtn.addEventListener('click', function() {
            alert('Agendamento confirmado!');
            // Volta para a tela principal
            showScreen('landing-page');
        });
    }
});