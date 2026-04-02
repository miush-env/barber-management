import mongoose from "mongoose";

export const connectDB = async () => {
   try {
    await mongoose.connect(
      `mongodb+srv://multipurpose0509_db_user:${process.env.VITE_MONGO_PASSWORD}@barber-management.lwbg0t1.mongodb.net/barberDB`
    );
    console.log("🟢 MongoDB conectado funciona");
  } catch (error) {
    console.error("🔴 Error conectando MongoDB:", error);
      // eslint-disable-next-line no-undef
    process.exit(1);
  }
};