import { PartialType } from "@nestjs/mapped-types";
import { CreateCaracteristicasDto } from "./create-caracteristica.dto";

export class UpdateCaracteristicaDto extends PartialType (CreateCaracteristicasDto){}