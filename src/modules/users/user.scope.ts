export const UserScope = () => ({
  unverified: {
    attributes: ['id', 'email'],
    where: { isVerified: false },
  },
});

export enum UserScopeEnum {
  unverified = 'unverified',
}
