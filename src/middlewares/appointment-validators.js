import { body, param } from "express-validator";
import { validarCampos } from "./validate-fields.js";
import { handleErrors } from "./handle-errors.js";

export const createAppointmentValidator = [
    body("date").notEmpty().withMessage("La fecha es requerida"),
    body("pet").notEmpty().withMessage("La mascota es requerida"),
    body("pet").isMongoId().withMessage("No es un ID válido de MongoDB"),
    validarCampos,
    handleErrors
];

export const cancelAppointmentValidator = [
    param("uid").isMongoId().withMessage("No es un ID válido de MongoDB"),
    validarCampos,
    handleErrors
]

export const updateAppointmentValidator = [
    param("uid").isMongoId().withMessage("No es un ID válido de MongoDB"),
    validarCampos,
    handleErrors
]