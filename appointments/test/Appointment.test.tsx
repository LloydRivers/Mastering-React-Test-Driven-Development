import { render } from "@testing-library/react";
import { Appointment } from "../src/components/Appointment";
type CustomerType = {
  firstName: string;
};
describe("Appointment", () => {
  let container: HTMLElement;
  let customer: CustomerType;

  it("renders the customer first name (Ashley)", () => {
    customer = { firstName: "Ashley" };
    container = render(<Appointment customer={customer} />).container;
    expect(container.textContent).toMatch("Ashley");
  });

  it("renders the customer first name (Jordan)", () => {
    customer = { firstName: "Jordan" };
    container = render(<Appointment customer={customer} />).container;
    expect(container.textContent).toMatch("Jordan");
  });
});
