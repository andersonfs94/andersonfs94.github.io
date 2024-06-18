// Quando o usuário rolar 20 pixels para baixo da parte superior do documento, mostrar o botão
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnTopo").style.display = "block";
    } else {
        document.getElementById("btnTopo").style.display = "none";
    }
}

// Função para voltar ao topo da página
function topFunction() {
    document.body.scrollTop = 0; // Para navegadores Chrome, Firefox, IE e Opera
    document.documentElement.scrollTop = 0; // Para Safari
}