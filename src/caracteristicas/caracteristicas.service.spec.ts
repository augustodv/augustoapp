import { Test, TestingModule } from '@nestjs/testing';
import { CaracteristicasService } from './caracteristicas.service';
import { Repository } from 'typeorm';
import { Caracteristica } from './entities/caracteristica.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

export type MockType<T> = {
  [P in keyof T]?: jest.Mock<{}>;
};

// @ts-ignore 
export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(() => ({
  findOne: jest.fn(entity => entity),
  // ...
}));

describe('CaracteristicasService', () => {
  
  let repositoryMock: MockType<Repository<Caracteristica>>;
  let service: CaracteristicasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CaracteristicasService, { provide: getRepositoryToken(Caracteristica), useFactory: repositoryMockFactory }],
    }).compile();
    repositoryMock = module.get(getRepositoryToken(Caracteristica));
    service = module.get<CaracteristicasService>(CaracteristicasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
