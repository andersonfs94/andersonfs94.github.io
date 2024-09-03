// Quando o usuário rolar 20 pixels para baixo da parte superior do documento, mostrar o botão
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (window.scrollY > 20) {
        document.getElementById("btnTopo").style.display = "block";
    } else {
        document.getElementById("btnTopo").style.display = "none";
    }
}

// Função para voltar ao topo da página
function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}