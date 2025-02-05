type AppointmentType = {
  firstName: string;
};

export const Appointment = ({ customer }: { customer: AppointmentType }) => {
  return <div>{customer.firstName}</div>;
};
