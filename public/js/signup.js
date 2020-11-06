$('#form').on('submit', e => {
    e.preventDefault();

    ['emailHelp', 'usernameHelp', 'passwordHelp', 'passwordConfirmHelp']
        .forEach(val => $(`#${val}`).text(''));

    const email = $('#email').val().trim();
    const username = $('#username').val().trim();
    const password = $('#password').val().trim();
    const passwordConfirm = $('#password-confirm').val().trim();

    if (!email)
        $('#emailHelp').text('A valid email address is required');

    if (!username)
        $('#usernameHelp').text('A username must be provided');

    if (!password) 
        $('#passwordHelp').text('Password is required');
    
    if (!passwordConfirm)
        $('#passwordConfirmHelp').text('Confirm password is required');

    if ([email, username, password, passwordConfirm].some(val => !val))
        return;

    if (password !== passwordConfirm) {
        $('#passwordConfirmHelp').text('Passwords must match');
        return;
    }

    $.post('/api/users', { email, username, password })
        .then(res => window.location.replace('/home'));
});