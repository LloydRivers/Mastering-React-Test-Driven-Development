import { render } from "@testing-library/react";
import { Appointment } from "../src/components/Appointment";

type CustomerType = {
  firstName: string;
  lastName: string;
};

describe("Appointment", () => {
  let customer: CustomerType;

  beforeEach(() => {
    customer = { firstName: "", lastName: "" };
  });

  /*
  Commenting here as documentation on the commit:
  signature: it.each(testCases)(testName, testFunction);

  parameter %s: string

  docs: https://vitest.dev/api/#test-each
  */

  it.each([["Ashley", "Doe"]])(
    "renders the customers' full name (%s, %s)",
    (firstName, lastName) => {
      customer.firstName = firstName;
      customer.lastName = lastName;
      const { container } = render(<Appointment customer={customer} />);
      expect(container.textContent).toMatch(`${firstName} ${lastName}`);
    }
  );
});
