import {
  IsEnum,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class EnvironmentVariables {
  @IsEnum(['development', 'production', 'test', 'provision'])
  @IsNotEmpty()
  NODE_ENV: string;

  @IsNumber()
  @IsOptional()
  PORT: number;

  @IsString()
  @IsNotEmpty()
  API_URL: string;

  @IsString()
  @IsNotEmpty()
  APP_URL: string;

  @IsString()
  @IsNotEmpty()
  PG_HOST: string;

  @IsNumber()
  @IsIn([5432])
  PG_PORT: number;

  @IsString()
  @IsNotEmpty()
  PG_USER: string;

  @IsString()
  @IsOptional()
  PG_PASSWORD: string;

  @IsString()
  @IsNotEmpty()
  PG_DATABASE: string;

  @IsString()
  @IsNotEmpty()
  REDIS_HOST: string;

  @IsString()
  @IsNotEmpty()
  REDIS_PORT: string;

  @IsString()
  @IsNotEmpty()
  AWS_STORAGE_URL: string;

  @IsString()
  @IsNotEmpty()
  AWS_BUCKET_NAME: string;

  @IsString()
  @IsNotEmpty()
  AWS_BUCKET_REGION: string;

  @IsString()
  @IsNotEmpty()
  AWS_ACCESS_KEY_ID: string;

  @IsString()
  @IsNotEmpty()
  AWS_SECRET_KEY: string;

  @IsString()
  @IsNotEmpty()
  AWS_SES_ACCESS_KEY_ID: string;

  @IsString()
  @IsNotEmpty()
  AWS_SES_SECRET: string;

  @IsString()
  @IsNotEmpty()
  AWS_SES_REGION: string;

  @IsString()
  @IsNotEmpty()
  TWILIO_ACCOUNT_SID: string;

  @IsString()
  @IsNotEmpty()
  TWILIO_AUTH_TOKEN: string;

  @IsString()
  @IsNotEmpty()
  TWILIO_SENDER_PHONE_NUMBER: string;

  @IsString()
  @IsNotEmpty()
  JWT_GLOBAL_SECRET: string;
}
