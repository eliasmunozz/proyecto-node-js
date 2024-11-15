
document.getElementById('activationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional
    var modal = new bootstrap.Modal(document.getElementById('activationModal'));
    modal.show(); // Muestra el modal
});
    