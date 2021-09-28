import Joi from 'joi'
import { Request, Response, NextFunction } from 'express'

export const createDeckSchema = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const schemaRules = {
    type: Joi.string().valid('SHORT', 'FULL'),
    shuffled: Joi.boolean().optional(),
  }
  const schema = Joi.object(schemaRules)
  const { error, value } = schema.validate(request.body)

  if (error) {
    console.log(error)
    next(`Validation error: ${error.details.map((x) => x.message).join(', ')}`)
  } else {
    request.body = value
    next()
  }
}
