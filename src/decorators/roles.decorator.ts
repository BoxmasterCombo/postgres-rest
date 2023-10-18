import { SetMetadata } from '@nestjs/common';

import { ROLES as RolesEnum } from '@Modules/_shared/enums/roles.enum';

export const ROLES_KEY = 'role';
export const Roles = (...roles: RolesEnum[]) => SetMetadata(ROLES_KEY, roles);
