import { Request, Response } from "express"

export const getUsers = async (req: Request, res: Response) => {
  return res.status(200).send({
    message: "Success",
    data: [{ id: 1, name: "Andi" }, { id: 2, name: "Budi" }]
  })
}

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params
  return res.status(200).send({
    message: "Success",
    data: { id, name: "Example User" }
  })
}

export const createUser = async (req: Request, res: Response) => {
  const { name } = req.body
  return res.status(201).send({
    message: "Success",
    data: { id: Date.now(), name }
  })
}
