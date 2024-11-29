import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { jsPDF } from "jspdf"; // Import jsPDF
import logo from "../images/logo.jpg"; // Import logo
import Swal from "sweetalert2";

const AdminPage = () => {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState("All");

  // Fetch orders on component mount
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("https://shion-green-backend.vercel.app/api/orders");
        const data = await response.json();
        console.log(data); // Log fetched orders to ensure they are fetched correctly
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  // Handle filter change
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Filtered orders based on the selected filter
  const filteredOrders =
    filter === "All"
      ? orders
      : orders.filter((order) => order.product === filter);

  // Function to generate a PDF report for a single order
  const generateOrderReport = (order) => {
    const doc = new jsPDF();

    // Add logo to the PDF
    const logoSize = 40;
    const logoX = (doc.internal.pageSize.width - logoSize) / 2;
    const logoY = 10;
    doc.addImage(
      logo,
      "JPG",
      logoX,
      logoY,
      logoSize,
      logoSize,
      undefined,
      "FAST"
    );

    // Title - centered
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text(
      "Order Report",
      doc.internal.pageSize.width / 2,
      60,
      null,
      null,
      "center"
    );

    // Order details
    doc.setFontSize(12);
    doc.text(`Order ID: #${order._id}`, 20, 80);
    doc.text(`Customer Name: ${order.name}`, 20, 90);
    doc.text(`Customer Type: ${order.customerType}`, 20, 100);
    doc.text(`Product: ${order.product}`, 20, 110);
    doc.text(`Quantity: ${order.quantity}`, 20, 120);
    doc.text(`Phone: ${order.phone}`, 20, 130);
    doc.text(`Address: ${order.address}`, 20, 140);
    doc.text(`Description: ${order.description}`, 20, 150);
    doc.text(`Email: ${order.email}`, 20, 160);
    doc.text(`Status: ${order.status}`, 20, 170);
    doc.text(
      `Order Placed At: ${new Date(order.createdAt).toLocaleString()}`,
      20,
      180
    );

    // Timestamp at the bottom
    const timestamp = new Date().toLocaleString();
    doc.setFontSize(8);
    doc.text(
      `Report generated on: ${timestamp}`,
      doc.internal.pageSize.width / 2,
      290,
      null,
      null,
      "center"
    );

    // Save the PDF
    doc.save(`Order_Report_${order._id}.pdf`);
  };

  // Function to generate a PDF report for all orders
  const generateAllOrdersReport = () => {
    console.log("Generating All Orders Report...");
    const doc = new jsPDF();

    // Add logo to the PDF
    const logoSize = 40;
    const logoX = (doc.internal.pageSize.width - logoSize) / 2;
    const logoY = 10;
    doc.addImage(
      logo,
      "JPG",
      logoX,
      logoY,
      logoSize,
      logoSize,
      undefined,
      "FAST"
    );

    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text(
      "Orders Report",
      doc.internal.pageSize.width / 2,
      60,
      null,
      null,
      "center"
    );

    let yOffset = 80;

    orders.forEach((order) => {
      doc.setFontSize(12);
      doc.text(`Order ID: #${order._id}`, 10, yOffset);
      doc.text(`Customer Name: ${order.name}`, 10, yOffset + 10);
      doc.text(`Customer Type: ${order.customerType}`, 10, yOffset + 20);
      doc.text(`Product: ${order.product}`, 10, yOffset + 30);
      doc.text(`Quantity: ${order.quantity}`, 10, yOffset + 40);
      doc.text(`Phone: ${order.phone}`, 10, yOffset + 50);
      doc.text(`Address: ${order.address}`, 10, yOffset + 60);
      doc.text(`Description: ${order.description}`, 10, yOffset + 70);
      doc.text(`Email: ${order.email}`, 10, yOffset + 80);
      doc.text(`Status: ${order.status}`, 10, yOffset + 90);
      doc.text(
        `Order Placed At: ${new Date(order.createdAt).toLocaleString()}`,
        10,
        yOffset + 100
      );

      // Add a line after each order
      doc.setLineWidth(0.5);
      doc.line(
        10,
        yOffset + 110,
        doc.internal.pageSize.width - 10,
        yOffset + 110
      );

      yOffset += 120;

      // Check if the yOffset exceeds the page height and add a new page if necessary
      if (yOffset > 250) {
        doc.addPage();
        yOffset = 10;
      }
    });

    // Timestamp at the bottom
    const timestamp = new Date().toLocaleString();
    doc.setFontSize(8);
    doc.text(
      `Report generated on: ${timestamp}`,
      doc.internal.pageSize.width / 2,
      280,
      null,
      null,
      "center"
    );

    // Save the PDF
    doc.save("All_Orders_Report.pdf");
  };

  // Function to delete an order
  const deleteOrder = async (orderId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(
          `http://localhost:5000/api/orders/${orderId}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          setOrders((prevOrders) =>
            prevOrders.filter((order) => order._id !== orderId)
          );
          Swal.fire("Deleted!", "Order has been deleted.", "success");
        } else {
          Swal.fire("Error!", "Failed to delete the order.", "error");
        }
      } catch (error) {
        Swal.fire("Error!", "Failed to delete the order.", "error");
      }
    }
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between mb-4">
        {/* Filter dropdown */}
        <div className="form-group d-flex align-items-center">
          <label htmlFor="filter" className="me-2">
            Filter by Product:
          </label>
          <select
            id="filter"
            className="form-select"
            value={filter}
            onChange={handleFilterChange}
            style={{ width: "auto" }}
          >
            <option value="All">All</option>
            <option value="Cinnamon">Cinnamon</option>
            <option value="Pepper">Pepper</option>
          </select>
        </div>
        {/* Button to generate the report for all orders - placed at the top of the cards */}
        <button
          className="btn"
          onClick={generateAllOrdersReport}
          style={{ backgroundColor: "#113805", color: "white" }}
        >
          Generate All Orders Report
        </button>
      </div>

      <div className="row mt-5">
        {filteredOrders.map((order) => (
          <div key={order._id} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Order ID: #{order._id}</h5>
                <p>
                  <strong>Customer Name:</strong> {order.name}
                </p>
                <p>
                  <strong>Customer Type:</strong> {order.customerType}
                </p>
                <p>
                  <strong>Product:</strong> {order.product}
                </p>
                <p>
                  <strong>Quantity:</strong> {order.quantity}
                </p>
                <p>
                  <strong>Phone:</strong> {order.phone}
                </p>
                <p>
                  <strong>Address:</strong> {order.address}
                </p>
                <p>
                  <strong>Description:</strong> {order.description}
                </p>
                <p>
                  <strong>Email:</strong> {order.email}
                </p>
                <p>
                  <strong>Status:</strong> {order.status}
                </p>
                <p>
                  <strong>Order Placed At:</strong>{" "}
                  {new Date(order.createdAt).toLocaleString()}
                </p>
                <button
                  className="btn btn-dark me-2"
                  onClick={() => generateOrderReport(order)}
                >
                  Generate Report
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteOrder(order._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
