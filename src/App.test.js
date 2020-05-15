import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test("fill form", async () => {

  const fillform = {
    firstName: "Ryan",
    lastName: "Plante",
    email: "ryanm.plante@gmail.com",
    message: "MegLee"
  };
  const {
    getByText,
    getBytestID
  } = render( < App / > )

  const firstName = getByText("First Name*");
  firstName.value = fillform.firstName;
  expect(firstName.value).toBe("Ryan");

  const lastName = getByText("Last Name*");
  lastName.value = fillform.lastName;
  expect(lastName.value).toBe("Plante");

  const email = getByText("Email*");
  email.value = fillform.email;
  expect(email.value).toBe("ryanm.plante@gmail.com");

  const message = getByText("Message");
  message.value = fillform.message;
  expect(message.value).toBe(fillform.message);

})