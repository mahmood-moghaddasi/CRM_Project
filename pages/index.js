import connectDB from "../utils/ConnectDB";
import Customer from "../models/Customer";
import HomePage from "../components/templates/HomePage";
export default function Index({ customers }) {
  console.log(customers);
  return <HomePage customers={customers} />;
}

export async function getServerSideProps(params) {
  try {
    await connectDB();
    const customers = await Customer.find();
    return {
      props: { customers: JSON.parse(JSON.stringify(customers)) },
    };
  } catch (error) {
    return { notFound: true };
  }
}
