function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Defina as credenciais corretas
    const correctUsername = "Rodrigo";
    const correctPassword = "2502";

    // Verifique se as credenciais estão corretas
    if (username === correctUsername && password === correctPassword) {
        // Redireciona para a página do cardápio
        window.location.href = "Rodrigo_food";
        return false; // Evita o envio do formulário
    } else {
        // Mostra uma mensagem de erro
        errorMessage.textContent = "Usuário ou senha incorretos.";
        return false; // Evita o envio do formulário
    }
}