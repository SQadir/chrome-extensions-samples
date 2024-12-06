document.addEventListener('DOMContentLoaded', function() {
    const usernameField = document.getElementById('uName');
    const btn = document.getElementById('btn');
    btn.addEventListener('click', function() {
        const username = usernameField.value;
        alert('Hello ' + username);
    });
});
