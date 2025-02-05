import { render } from "@testing-library/react";
import { Appointment } from "../src/components/Appointment";

describe("Appointment", () => {
  it("renders the customer first name", () => {
    const customer = { firstName: "Ashley" };

    const component = <Appointment customer={customer} />;
    const { container } = render(component);

    expect(container.textContent).toMatch("Ashley");
  });
  it("renders the customer first name", () => {
    const customer = { firstName: "Jordan" };

    const component = <Appointment customer={customer} />;
    const { container } = render(component);

    expect(container.textContent).toMatch("Jordan");
  });
});
