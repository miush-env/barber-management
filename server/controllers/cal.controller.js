export const getCalEndPoint = async (req, res) => {
  try {
    res.json({
      mensaje: "ruta principal de cal"
    });
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    res.status(500).json({ error: "Error en la ruta" });
  }
}

export const webHookCal = async (req, res) => {
  const bookingData = req.body;

  if (!bookingData || !bookingData.payload) {
      console.log("Webhook sin payload:", bookingData);
      return res.status(200).json({ received: true });
    }

	const getPriceFromDescription = (description) => {
		const match = description.match(/\$(\d+)/);
		return match ? Number(match[1]) : null;
  };
  const userAppointment = {
    id: bookingData.payload.bookingId,
    startTime: bookingData.payload.startTime,
    status: bookingData.payload.status,
    service: bookingData.payload.eventTitle,
    price: getPriceFromDescription(bookingData.payload.eventDescription) 
  }

  try {  
      // console.log(bookingData);
    console.log(JSON.stringify(bookingData, null, 2));
    // console.log(bookingData);
    console.log(userAppointment);
    res.status(200).json({ received: true });

  } catch (error) {
    console.error("Error al recibir el webhook:", error);
    return res.status(500).json({ error: "Algo salió mal" });
  }
}
