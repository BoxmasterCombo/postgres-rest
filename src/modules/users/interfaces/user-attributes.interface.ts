import { BaseAttributes } from '../../_shared/base.interface';

export interface UserAttributes extends BaseAttributes {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  password: string;
}
