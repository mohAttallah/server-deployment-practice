"use strict";


const supertest = require("supertest");

const { app } = require("../server");

const req = supertest(app);

describe("Server test", () => {
  it("Handle not found pages", async () => {
    const res = await req.get("/items");
    expect(res.status).toEqual(404);
  });
  it("handle the root home page", async () => {
    const res = await req.get("/");

    expect(res.status).toEqual(200);
    expect(res.body.message).toEqual("welcome to Home Page");
  });
    
    
     it("Handle error", async () => {
       const res = await req.get("/bad");
       expect(res.status).toEqual(500);
     });
});
