import { Router } from "express";
import { saveAppointment, getAppointment, updateAppointment, cancelAppointment} from "./appointment.controller.js";
import { createAppointmentValidator , updateAppointmentValidator, cancelAppointmentValidator} from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);

//Listar Citas
router.get("/", getAppointment)

//Actualizar Cita
router.put("/updateAppointment/:uid", updateAppointmentValidator, updateAppointment)

//Cancelar Cita
router.delete("/cancelAppointment/:uid", cancelAppointmentValidator, cancelAppointment)

export default router;