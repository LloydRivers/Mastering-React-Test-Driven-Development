type AppointmentType = {
  firstName: string;
  lastName: string;
};

export const Appointment = ({ customer }: { customer: AppointmentType }) => {
  return (
    <div>
      {customer.firstName} {customer.lastName}
    </div>
  );
};
