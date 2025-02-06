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

  it("renders the customer first name (Ashley)", () => {
    customer.firstName = "Ashley";
    const { container } = render(<Appointment customer={customer} />);
    expect(container.textContent).toMatch("Ashley");
  });

  it("renders the customer first name (Jordan)", () => {
    customer.firstName = "Jordan";
    const { container } = render(<Appointment customer={customer} />);
    expect(container.textContent).toMatch("Jordan");
  });
});
