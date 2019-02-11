const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth');
const reduceUserData = require('../utils/reduceUserData');
const validator = require('../utils/validator');
const passport = require('passport');

router.post('/signup', (req, res, next) => {
  const { email, password } = req.body;
  const emailValidation = validator.isValidEmail(email);
  if (!emailValidation.valid) {
    return res.status(400).send({
      result: 'error',
      message: emailValidation.reason
    });
  }
  const passwordValidation = validator.isValidPassword(password);
  if (!passwordValidation.valid) {
    return res.status(400).send({
      result: 'error',
      message: passwordValidation.reason
    });
  }
  passport.authenticate('local-signup', (err, user, info) => {
    if (err) { return next(err); }
    if (!user) { return res.status(400).json({ result: 'error', message: info.message }); }
    return res.json({ result: 'ok', data: `Confirmation link has been sent to ${email}` });
  })(req, res, next);
});

router.post('/login', (req, res, next) => {
  const { email, password } = req.body;
  const emailValidation = validator.isValidEmail(email);
  if (!emailValidation.valid) {
    return res.status(400).send({
      result: 'error',
      message: emailValidation.reason
    });
  }
  const passwordValidation = validator.isValidPassword(password);
  if (!passwordValidation.valid) {
    return res.status(400).send({
      result: 'error',
      message: passwordValidation.reason
    });
  }
  passport.authenticate('local-signin', (err, user, info) => {
    if (err) { return next(err); }
    if (!user) {
      return res.status(400).json({ result: 'error', message: info.message });
    }
    return req.logIn(user, (errLogin) => {
      if (err) { return next(errLogin); }
      return res.status(200).json({ result: 'ok', data: reduceUserData(user) });
    });
  })(req, res, next);
});
router.get('/logout', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send({ result: 'error', message: 'Not authorized' });
  }
  return req.session.destroy(() => res.redirect('/'));
});

// apis
// router.get(
//   '/confirm-email/deeplink',
//   deeplink({
//     fallback: 'https://snowball.money',
//     android_package_name: 'com.snowball.money',
//     ios_store_link:
//       'https://snowball.money'
//   })
// );

router.post('/verification-email', auth.verificationEmail);
router.get('/confirm-email', auth.confirmEmail);
router.post('/forgot-password', auth.forgotPassword);
router.post('/reset-password', auth.resetPassword);
router.post('/change-password', auth.changePassword);
router.post('/validate-reset-password', auth.validateResetPassword);
router.post('/refresh-session', auth.refreshSession);
module.exports = router;
