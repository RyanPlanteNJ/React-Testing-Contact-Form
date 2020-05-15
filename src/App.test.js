import React from "react";
import { render, fireEvent} from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test("fill form", async () => {
  
  const fillform = {firstName: "Ryan", lastName: "Plante", email: "ryanm.plante@gmail.com", message: ""};
  const { getByText, getByTestId } = render(<App />)
  const print = getByTestId('print')

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

    const button = getByTestId('submit');
      fireEvent.click(button);
    
    print = await getByTestId('print');

    expect(print.textContent).toBe(`firstName:${fillform.firstName}, lastName: ${fillform.lastName}, email: ${fillform.email}, message: ${fillform.mesage}`);
 });