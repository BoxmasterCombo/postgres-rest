import { SequelizeModule } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';

import { MyTestModule } from '../_tests/test.module';
import { CreateUserDto } from './dto/create-user.dto';
import { UserModel } from './user.model';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeAll(async () => {
    const UserServiceProvider = {
      provide: UserService,
      useFactory: () => ({
        findAll: jest.fn(() => []).mockReturnThis(),
        create: jest.fn(() => {}).mockReturnThis(),
      }),
    };
    const module: TestingModule = await Test.createTestingModule({
      imports: [MyTestModule, SequelizeModule.forFeature([UserModel])],
      providers: [UserService, UserServiceProvider],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should contain method', () => {
      service.findAll();
      expect(service.findAll).toHaveBeenCalled();
    });

    it('should return an array of users', async () => {
      const result: UserModel[] = [];
      jest.spyOn(service, 'findAll').mockImplementation(async () => result);

      expect(await service.findAll()).toBe(result);
    });
  });

  describe('create', () => {
    it('should create user WITH phone number', async () => {
      // Arrange
      const validaPayload1: CreateUserDto = {
        firstName: 'LeBron',
        lastName: 'LeBron',
        email: 'harden213@gmail.com',
        password: 'MVP2023!',
      };

      // Act
      const user = await service.create(validaPayload1);

      console.log(user, ' user1');
      // Assert
      expect(service.create).toHaveBeenCalled();
      expect(user).toContainEqual(validaPayload1);
    });

    //   it('should create user WITHOUT phone number', async () => {
    //     // Arrange
    //     const validaPayload2: CreateUserDto = {
    //       firstName: 'LeBron',
    //       lastName: 'LeBron',
    //       email: 'harden213@gmail.com',
    //       password: 'MVP2023!',
    //       phoneNumber: '102',
    //     };
    //
    //     // Act
    //     const user = await service.create(validaPayload2);
    //
    //     // Assert
    //     expect(user).toContainEqual(validaPayload2);
    //   });
    //
    //   it('should prevent users created which has no firstName', async () => {
    //     // Arrange
    //     const payload: Omit<CreateUserDto, 'firstName'> = {
    //       lastName: 'LeBron',
    //       email: 'harden213@gmail.com',
    //       password: 'MVP2023!',
    //     };
    //
    //     // Act
    //     const user = await service.create(payload as CreateUserDto);
    //
    //     // Assert
    //     expect(user).toThrowError();
    //   });
  });
});
