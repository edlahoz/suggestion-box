import { User } from "@/types";
import { utilGenerateUUID } from "@/utils";
import { faker } from "@faker-js/faker";

export const users: User[] = [
  {
    id: utilGenerateUUID(),
    nameFirst: faker.name.firstName(),
    nameLast: faker.name.lastName(),
    email: faker.internet.email(),
  },
  {
    id: utilGenerateUUID(),
    nameFirst: faker.name.firstName(),
    nameLast: faker.name.lastName(),
    email: faker.internet.email(),
  },
  {
    id: utilGenerateUUID(),
    nameFirst: faker.name.firstName(),
    nameLast: faker.name.lastName(),
    email: faker.internet.email(),
  },
];
