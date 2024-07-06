document.getElementById('red-button').addEventListener('click', function() {
    const colorBox = document.getElementById('color');
    const root = document.documentElement;

    if (colorBox.classList.contains('bg-warning') || colorBox.classList.contains('bg-primary') || colorBox.classList.contains('bg-success')) {
        colorBox.classList.remove('bg-warning', 'bg-primary', 'bg-success');
        colorBox.classList.add('bg-danger');
        root.style.setProperty('--primary-color', '#dc3545');    } else {
        colorBox.classList.add('bg-danger');
        root.style.setProperty('--primary-color', '#dc3545');    }
});

document.getElementById('yellow-button').addEventListener('click', function() {
    const colorBox = document.getElementById('color');
    const root = document.documentElement;

    if (colorBox.classList.contains('bg-danger') || colorBox.classList.contains('bg-primary') || colorBox.classList.contains('bg-success')) {
        colorBox.classList.remove('bg-danger', 'bg-primary', 'bg-success');
        colorBox.classList.add('bg-warning');
        root.style.setProperty('--primary-color', '#ffc107')
    } else {
        colorBox.classList.add('bg-warning');
        root.style.setProperty('--primary-color', '#ffc107')    }
});

document.getElementById('blue-button').addEventListener('click', function() {
    const colorBox = document.getElementById('color');
    const root = document.documentElement;
    if (colorBox.classList.contains('bg-danger') || colorBox.classList.contains('bg-warning') || colorBox.classList.contains('bg-success')) {
        colorBox.classList.remove('bg-danger', 'bg-warning', 'bg-success');
        colorBox.classList.add('bg-primary');
        root.style.setProperty('--primary-color', '#0d6efd');
    } else {
        colorBox.classList.add('bg-primary');
        root.style.setProperty('--primary-color', '#0d6efd');    }
});

document.getElementById('green-button').addEventListener('click', function() {
    const colorBox = document.getElementById('color');
    const root = document.documentElement;
    if (colorBox.classList.contains('bg-danger') || colorBox.classList.contains('bg-warning') || colorBox.classList.contains('bg-primary')) {
        colorBox.classList.remove('bg-danger', 'bg-warning', 'bg-primary');
        colorBox.classList.add('bg-success');
        root.style.setProperty('--primary-color', '#198754');
    } else {
        colorBox.classList.add('bg-success');
        root.style.setProperty('--primary-color', '#198754');
    }
});

