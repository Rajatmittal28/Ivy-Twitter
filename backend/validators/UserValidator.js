import { body, validationResult } from 'express-validator';

export function SignUp(){
    return [
        
      
            body('email').isEmail(),
            body('password').isLength({min: 6}),
            body('username').isLength({min:5})
    ]
}
