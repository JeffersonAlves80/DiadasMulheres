function openNewPage() {
    location.href = 'mes/mensagem.html';
}


document.querySelector('.heart').addEventListener('click', openNewPage);

function goBack() {
    window.history.back();
}
