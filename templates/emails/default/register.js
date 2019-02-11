exports.render = data => {
  return `Hello
    <br>
    Thanks for your joining ${data.project}!
    <br>
    Please confirm your email by clicking here ${data.link}\n\n
    <br>
    <br>
    - The ${data.project} Team`;
};
