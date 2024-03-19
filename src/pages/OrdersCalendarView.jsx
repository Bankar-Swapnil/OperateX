import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Navbar from "../component/Navbar";
import Sidebar from "../component/sidebar";
import Box from "@mui/material/Box";
import MUIDataTable from "mui-datatables";
import "../style.css";

const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

const orders = [
  {
    id: 1,
    customer: "Aisha",
    product: "Notebook",
    deliveryDate: new Date(currentYear, currentMonth, 15),
  },
  {
    id: 2,
    customer: "Bhuvan",
    product: "Desktop",
    deliveryDate: new Date(currentYear, currentMonth, 18),
  },
  {
    id: 3,
    customer: "Chitra",
    product: "Sandals",
    deliveryDate: new Date(currentYear, currentMonth, 20),
  },
  {
    id: 4,
    customer: "Dev",
    product: "Wireless Earbuds",
    deliveryDate: new Date(currentYear, currentMonth, 22),
  },
  {
    id: 5,
    customer: "Eesha",
    product: "Wristwatch",
    deliveryDate: new Date(currentYear, currentMonth, 25),
  },
  {
    id: 6,
    customer: "Faiyaz",
    product: "Mirrorless Camera",
    deliveryDate: new Date(currentYear, currentMonth, 28),
  },
  {
    id: 7,
    customer: "Faiyaz",
    product: "Mirrorless Camera",
    deliveryDate: new Date(currentYear, currentMonth, 28),
  },
  {
    id: 8,
    customer: "Geeta",
    product: "Smartphone",
    deliveryDate: new Date(currentYear, currentMonth, 20),
  },
  {
    id: 9,
    customer: "Harish",
    product: "iPad",
    deliveryDate: new Date(currentYear, currentMonth, 20),
  },
  {
    id: 10,
    customer: "Ishaan",
    product: "Bluetooth Headphones",
    deliveryDate: new Date(currentYear, currentMonth, 20),
  },
  {
    id: 11,
    customer: "Jaya",
    product: "Fitness Tracker",
    deliveryDate: new Date(currentYear, currentMonth, 25),
  },
  {
    id: 12,
    customer: "Kamala",
    product: "Travel Backpack",
    deliveryDate: new Date(currentYear, currentMonth, 25),
  },
  {
    id: 13,
    customer: "Laksh",
    product: "DSLR Camera",
    deliveryDate: new Date(currentYear, currentMonth, 28),
  },
  {
    id: 14,
    customer: "Mira",
    product: "3D Printer",
    deliveryDate: new Date(currentYear, currentMonth, 28),
  },
];

const TileContent = ({ date, view }) => {
  if (view === "month") {
    const ordersByDate = orders.filter(
      (order) => order.deliveryDate.toDateString() === date.toDateString()
    );
    return (
      <div className="tile-content">
        {ordersByDate.length > 0 && <p>{ordersByDate.length} orders</p>}
      </div>
    );
  }
  return null;
};

const OrdersCalendarView = () => {
  const [date, setDate] = React.useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  const columns = [
    {
      name: "id",
      label: "ID",
    },
    {
      name: "customer",
      label: "Customer",
    },
    {
      name: "product",
      label: "Product",
    },
  ];

  const ordersByDate = orders.filter(
    (order) => order.deliveryDate.toDateString() === date.toDateString()
  );

  const data = ordersByDate.map((order) => ({
    id: order.id,
    customer: order.customer,
    product: order.product,
  }));

  const options = {
    filter: true,
    search: false,
    selectableRows: "none",
    print: false,
    download: false,
    viewColumns: false,
    setTableProps: () => ({
      style: {
        minWidth: "95vh", // Set the minimum width
        minHeight: "100px", // Set the minimum height
      },
    }),
  };

  return (
    <>
      <div className="bgcolor">
        <div className="bgcolor">
          <Navbar />
          <Box height={70} />
          <Box sx={{ display: "flex" }}>
            <Sidebar />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <div className="orders-calendar-view ">
                <Calendar
                  className="calander"
                  onChange={onChange}
                  value={date}
                  tileContent={TileContent}
                />
                <div className="orders-list-container">
                  <h3 style={{ color: "white" }}>
                    Orders for {date.toDateString()}
                  </h3>
                  <MUIDataTable
                    className="darkmode"
                    title={"Orders"}
                    data={data}
                    columns={columns}
                    options={options}
                  />
                </div>
              </div>
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
};

export default OrdersCalendarView;
