const form = document.getElementById('form');

$('#form').on('submit', e => {
    e.preventDefault();

    ['emailHelp', 'passwordHelp', 'loginHelp']
        .forEach(val => $(`#${val}`).text(''));

    const email = $('#email').val().trim();
    const password = $('#password').val().trim();

    if (!email) 
        $('#emailHelp').text('Your email address is required');
    
    if (!password)
        $('#passwordHelp').text('Your password is required');
    
    if ([email, password].some(val => !val))
        return;

    $.post('/api/login', { email, password })
        .then(() => window.location.replace('/home'))
        .catch(err => {
            console.error(err);
            if (err.status === 401)
                $('#loginHelp').text('Incorrect username or password');
            else
                $('#loginHelp').text('Error processing your request');
        });
});