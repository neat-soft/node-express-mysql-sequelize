exports.render = data => {
  return `Hello,
    \n
    <br>
    \nWe saw you forgot password! Here is your reset-password token: ${data.code}
    <br>
    \nThanks
    <br>
    <br>
    \n- The ${data.project} Team`;
};
