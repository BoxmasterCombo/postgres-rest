import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

import { TemplateNamesEnum } from '@Modules/aws/ses/enums/template-names-enum';

export class CreateOrUpdateTemplateDto {
  @IsNotEmpty()
  @IsEnum(TemplateNamesEnum)
  TemplateName: TemplateNamesEnum;

  @IsNotEmpty()
  @IsString()
  SubjectPart: string;

  @IsNotEmpty()
  @IsString()
  HtmlPart: string;

  @IsOptional()
  @IsString()
  TextPart?: string;
}
