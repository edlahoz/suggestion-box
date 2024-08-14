import { User } from "@/types";
import { utilGenerateUUID } from "@/utils";
import { faker } from "@faker-js/faker";

const generateMockUsers = (count: number): User[] => {
  return Array.from({ length: count }, () => ({
    id: utilGenerateUUID(),
    nameFirst: faker.person.firstName(),
    nameLast: faker.person.lastName(),
    email: faker.internet.email(),
  }));
};

export const users: User[] = generateMockUsers(20);
