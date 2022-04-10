const { body, validationResult } = require('express-validator');

exports.SignupValidation = [
    body('email').isEmail().withMessage("you must enter valid email"),
    body('name').notEmpty().withMessage("name is required").isLength({ min: 4 }).withMessage("name must be more than 4"),
    body('role').notEmpty(),
    body('password').isLength({ min: 5 }).withMessage("password must be more than 5"),

(req,res)=>{

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
}

]