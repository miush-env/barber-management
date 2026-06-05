import { services } from "./services";

export const getProfitToday = (appointments) => {
  let total = 0;

  appointments.forEach((appointment) => {
    const service = services[appointment.eventTypeId];

    if (service) {
      total += service.price;
    }
  });
  return total;
};
