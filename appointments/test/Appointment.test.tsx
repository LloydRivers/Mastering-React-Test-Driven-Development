import { render } from "@testing-library/react";
import { Appointment } from "../src/components/Appointment";

type CustomerType = {
  firstName: string;
};

describe("Appointment", () => {
  let customer: CustomerType;

  beforeEach(() => {
    customer = { firstName: "" };
  });

  /*
  Commenting here as documentation on the commit:
  signature: it.each(testCases)(testName, testFunction);

  parameter %s: string

  docs: https://vitest.dev/api/#test-each
  */

  it.each(["Ashley", "Jordan", "Taylor"])(
    "renders the customer first name (%s)",
    (firstName) => {
      customer.firstName = firstName;
      const { container } = render(<Appointment customer={customer} />);
      expect(container.textContent).toMatch(firstName);
    }
  );
});
