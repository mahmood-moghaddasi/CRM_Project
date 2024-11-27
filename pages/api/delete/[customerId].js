import Customer from "../../../models/Customer";
import connectDB from "../../../utils/ConnectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ status: "failed", message: "error in connecting to DB" });
    return;
  }
  if (req.method === "DELETE") {
    const id = req.req.customerId;
    try {
      await Customer.deleteOne({ _id: id });
      res.status(200).json({ status: "success", message: "Customer deleted" });
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ status: "failed", message: "error in deleting data from DB" });
      return;
    }
  }
}
