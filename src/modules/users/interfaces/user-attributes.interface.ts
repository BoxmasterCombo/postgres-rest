import { BaseAttributes } from '../../_shared/interfaces/base.interface';

export interface UserAttributes extends BaseAttributes {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  password: string;
}
