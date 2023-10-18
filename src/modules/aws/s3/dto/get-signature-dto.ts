import { IsNotEmpty, IsString } from 'class-validator';

export default class GetSignatureDto {
  @IsString({ message: 'datetime must be string' })
  @IsNotEmpty({ message: 'datetime is required' })
  datetime: string;

  @IsString({ message: 'to_sign must be string' })
  @IsNotEmpty({ message: 'to_sign is required' })
  to_sign: string;
}
