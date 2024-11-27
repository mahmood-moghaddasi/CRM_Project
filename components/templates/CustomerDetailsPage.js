import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function CustomerDetailsPage({ data }) {
  const router = useRouter();
  const deleteHandler = async () => {
    const res = await fetch(`/api/delete/${data._id}`, {
      method: "DELETE",
    });
    const newRes = await res.json();
    if (newRes.status === "success") router.push("/");
    console.log(newRes);
  };
  return (
    <div className="customer-detail">
      <h4>Customer's Details</h4>
      <div className="customer-detail__main">
        <div className="customer-detail__item">
          <span>Name: </span>
          <p>{data.name}</p>
        </div>
        <div className="customer-detail__item">
          <span>Last Name: </span>
          <p>{data.lastName}</p>
        </div>
        <div className="customer-detail__item">
          <span>Email: </span>
          <p>{data.email}</p>
        </div>
        <div className="customer-detail__item">
          <span>Phone: </span>
          <p>{data.Phone}</p>
        </div>

        <div className="customer-detail__item">
          <span>Postal Code: </span>
          <p>{data.postalCode}</p>
        </div>
        <div className="customer-detail__item">
          <span>Address: </span>
          <p>{data.address}</p>
        </div>
        <div className="customer-detail__item">
          <span>Date: </span>
          <p>{moment(data.date).utc().format("YYYY-MM-DD")}</p>
        </div>
      </div>
      <div className="customer-detail__products">
        <span>Name</span>
        <span>Price</span>
        <span>Qty</span>
        {data.products.map((product, index) => (
          <React.Fragment key={index}>
            {product.name}
            {product.price}
            {product.qty}
          </React.Fragment>
        ))}
      </div>
      <div className="customer-detail__buttons">
        <p>Edit or Delete</p>
        <button onClick={deleteHandler}>Delete</button>
        <Link href={`/edit/${data._id}`}>Edit</Link>
      </div>
    </div>
  );
}

export default CustomerDetailsPage;
