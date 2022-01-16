import Joi from "joi";
export const teacherVal = Joi.object().keys({
  email: Joi.string().email({ minDomainSegments: 2 }),
  password: Joi.string().required().min(4),
  firstname: Joi.string(),
  lastname: Joi.string(),
  schoolname: Joi.string(),
});

export const studentVal = Joi.object().keys({
  email: Joi.string().email({ minDomainSegments: 2 }),
  password: Joi.string().required().min(4),
  firstname: Joi.string(),
  lastname: Joi.string(),
  schoolname: Joi.string(),
});
