function openTab(evt, recipeId) {
    var i, content, tablinks;

    // Esconde todo o conteúdo das receitas
    content = document.getElementsByClassName("recipe-content");
    for (i = 0; i < content.length; i++) {
        content[i].classList.remove("active");
    }

    // Remove o destaque (classe active) de todos os botões
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Exibe a receita selecionada e destaca o botão clicado
    document.getElementById(recipeId).classList.add("active");
    evt.currentTarget.classList.add("active");
}
