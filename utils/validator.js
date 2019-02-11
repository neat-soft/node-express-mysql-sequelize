exports.isValidEmail = function (email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const ValidateEmail = (mail) => {
    if (re.test(mail)) {
      return true;
    }
    return (false);
  };
  if (!email) {
    return ({
      valid: false,
      reason: 'Please fill email field'
    });
  } else if (email === '') {
    return ({
      valid: false,
      reason: 'Please insert email address'
    });
  } else if (!ValidateEmail(email)) {
    return ({
      valid: false,
      reason: 'Invalid email format.'
    });
  }
  return ({
    valid: true
  });
};

exports.isValidPassword = function (password) {
  if (!password) {
    return ({
      valid: false,
      reason: 'Please fill password field.'
    });
  } else if (password === '') {
    return ({
      valid: false,
      reason: 'Please input password.'
    });
  } else if (password.length < 8) {
    return ({
      valid: false,
      reason: 'Password length must be more than 8 characters.'
    });
  }
  return ({
    valid: true
  });
};
