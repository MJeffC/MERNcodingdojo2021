const express = require("express");
const app = express();
const faker = require("faker");
const port = 8000;

app.get("/api", (req, res) => {
    res.json({message: "Our express API server is sending this over"});
  });
  
app.listen(port, () =>
    console.log(`Server is locked and loaded on port ${port}!`)
  );

const createUser = () => {
    const newFake = {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }
    return newFake;
}

const createCompany = () => {
    const newFakeCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.stateAbbr(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return newFakeCompany;
}

app.get("/api/users/new", (req, res) => {
    res.json(createUser());
})

app.get("/api/companies/new", (req, res) => {
    res.json(createCompany());
})

app.get("/api/user/company", (req, res) => {
    // res.json(createUser() + createCompany());
    // res.json([{createUser()},{createCompany()}]);
    const userCompany = {
        user: createUser(),
        company: createCompany()
    }
    res.json(userCompany);
})