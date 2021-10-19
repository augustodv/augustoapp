import { CreateDispositivoDto } from "./create-dispositivo.dto";
import { PartialType } from '@nestjs/mapped-types';

export class UpdateDispositivoDto extends PartialType(CreateDispositivoDto){}