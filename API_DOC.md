# Pipdroid API document

> prefix: /api

# Auth apis

[User Signup](#user-signup)  
[User Login](#user-login)  
[Forgot Password](#forgot-password)  
[Validate Reset Password Token ](#validate-reset-password-token)  
[Reset Password](#reset-password)  
[Change Password](#change-password)  
[Resend Verification Email](#resend-verification-email)  
[Email Verify](#email-verify)  

***

# Auth apis details

## User Signup
_User signup, send verification mail._  

```
 POST /auth/signup
```

### QUERY PARAMS

Name | Type | Mandatory | Description
------------ | ------------ | ------------ | ------------
email | String | YES | User email
password | String | YES | User password. (min 8 chars, strong password)

### RETURN

* **Success Result**  
    `status code:` 200

    ```javascript
    {
        "result": "ok",
        "data": {
            
        }
    }
    ```

* **Failed Result**  
`status code:` 400

    ```javascript
    {
        "result:": "error",
        "message": error_string
    }
    ```

## User Login
_User login._  

```
 POST /auth/login
```

### QUERY PARAMS

Name | Type | Mandatory | Description
------------ | ------------ | ------------ | ------------
email | String | YES | User email
password | String | YES | User password. (min 8 chars, strong password)

### RETURN

* **Success Result**  
    `status code:` 200

    ```javascript
    {
        "result": "ok",
        "data": {
        }
    }
    ```

* **Failed Result**  
`status code:` 400

    ```javascript
    {
        "result:": "error",
        "message": error_string
    }
    ```

## Forgot Password
_Forgot User Password. Receive rest password token into Email_  

```
 POST /auth/forgot-password
```

### QUERY PARAMS

Name | Type | Mandatory | Description
------------ | ------------ | ------------ | ------------
email | String | YES | User email

### RETURN

* **Success Result**  
    `status code:` 200

    ```javascript
    {
        "result": "ok",
        "data": "We sent reset password token to your email"
    }
    ```

* **Failed Result**  
`status code:` 400

    ```javascript
    {
        "result:": "error",
        "message": error_string
    }
    ```

## Validate Rest Password Token
_Check if reset password token is valid._  

```
 POST /auth/validate-reset-password
```

### QUERY PARAMS

Name | Type | Mandatory | Description
------------ | ------------ | ------------ | ------------
email | String | YES | User email
resetPasswordToken | String | YES | resetPassword token received in email

### RETURN

* **Success Result**  
    `status code:` 200

    ```javascript
    {
        "result": "ok",
    }
    ```

* **Failed Result**  
`status code:` 400

    ```javascript
    {
        "result:": "error",
        "message": error_string
    }
    ```

## Reset Password
_Update User Password._  

```
 POST /auth/reset-password
```

### QUERY PARAMS

Name | Type | Mandatory | Description
------------ | ------------ | ------------ | ------------
email | String | YES | User email
resetPasswordToken | String | YES | resetPassword token received in email
newPassword | String | YES | User new password

### RETURN

* **Success Result**  
    `status code:` 200

    ```javascript
    {
        "result": "ok",
        "data": "Your new password has been set successfully"
    }
    ```

* **Failed Result**  
`status code:` 400

    ```javascript
    {
        "result:": "error",
        "message": error_string
    }
    ```

## Change Password
Change User Password._  

```
 POST /auth/change-password
```

### BODY PARAMS

Name | Type | Mandatory | Description
------------ | ------------ | ------------ | ------------
newPassword | String | YES | User new password

### RETURN

* **Success Result**  
    `status code:` 200

    ```javascript
    {
        "result": "ok",
        "data": "Your new password has been set successfully"
    }
    ```

* **Failed Result**  
`status code:` 400

    ```javascript
    {
        "result:": "error",
        "message": error_string
    }
    ```

## Resend Verification Email
_Resend Verification Email._  

```
 POST /auth/verificatio-nemail
```

### QUERY PARAMS

Name | Type | Mandatory | Description
------------ | ------------ | ------------ | ------------
email | String | YES | User email

### RETURN

* **Success Result**  
    `status code:` 200

    ```javascript
    {
        "result": "ok",
        "message": "Verification email sent"
    }
    ```

* **Failed Result**  
`status code:` 400

    ```javascript
    {
        "result:": "error",
        "message": error_string
    }
    ```

## Email Verify
_Email Verify._  

```
 GET /auth/confirm-email
```

### QUERY PARAMS

Name | Type | Mandatory | Description
------------ | ------------ | ------------ | ------------
token | String | YES | Email verification token received in email

### RETURN

* **Success Result**  
    `status code:` 200

    ```javascript
    {
        "result": "ok",
        "message": "Email verified. Your account is active now"
    }
    ```

* **Failed Result**  
`status code:` 400

    ```javascript
    {
        "result:": "error",
        "message": error_string
    }
    ```