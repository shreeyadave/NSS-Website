import { faker } from "@faker-js/faker";

const generateAlumniData = (num) => {
  const data = [];
  for (let i = 0; i < num; i++) {
    data.push({
      image: faker.image.avatarLegacy(),
      name: faker.person.fullName(),
      position: faker.person.jobType(),
      linkedin: faker.internet.url(),
      github: faker.internet.url(),
    });
  }
  return data;
};

const alumni2019 = generateAlumniData(10);
const alumni2018 = generateAlumniData(10);

export { alumni2019, alumni2018 };
