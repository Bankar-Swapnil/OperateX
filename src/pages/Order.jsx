import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
} from "@mui/material";
import Navbar from "../component/Navbar";
import Sidebar from "../component/sidebar";
import Box from "@mui/material/Box";

const orders = [
  {
    id: 21,
    orderId: "ORD021",
    customerName: "Aarav Patel",
    orderDate: "2024-03-19",
    status: "Pending",
  },
  {
    id: 22,
    orderId: "ORD022",
    customerName: "Aaradhya Sharma",
    orderDate: "2024-03-18",
    status: "Delivered",
  },
  {
    id: 23,
    orderId: "ORD023",
    customerName: "Aarav Singh",
    orderDate: "2024-03-17",
    status: "Processing",
  },
  {
    id: 24,
    orderId: "ORD024",
    customerName: "Advika Gupta",
    orderDate: "2024-03-16",
    status: "Pending",
  },
  {
    id: 25,
    orderId: "ORD025",
    customerName: "Anaya Kumar",
    orderDate: "2024-03-15",
    status: "Delivered",
  },
  {
    id: 26,
    orderId: "ORD026",
    customerName: "Aarush Mishra",
    orderDate: "2024-03-14",
    status: "Cancelled",
  },
  {
    id: 27,
    orderId: "ORD027",
    customerName: "Aadhya Reddy",
    orderDate: "2024-03-13",
    status: "Processing",
  },
  {
    id: 28,
    orderId: "ORD028",
    customerName: "Advait Sharma",
    orderDate: "2024-03-12",
    status: "Pending",
  },
  {
    id: 29,
    orderId: "ORD029",
    customerName: "Aanya Patel",
    orderDate: "2024-03-11",
    status: "Processing",
  },
  {
    id: 30,
    orderId: "ORD030",
    customerName: "Aahana Gupta",
    orderDate: "2024-03-10",
    status: "Delivered",
  },
  {
    id: 21,
    orderId: "ORD021",
    customerName: "Aditi Desai",
    orderDate: "2024-03-19",
    status: "Pending",
  },
  {
    id: 22,
    orderId: "ORD022",
    customerName: "Amit Shah",
    orderDate: "2024-03-18",
    status: "Delivered",
  },
  {
    id: 23,
    orderId: "ORD023",
    customerName: "Arjun Gupta",
    orderDate: "2024-03-17",
    status: "Processing",
  },
  {
    id: 24,
    orderId: "ORD024",
    customerName: "Anjali Singh",
    orderDate: "2024-03-16",
    status: "Pending",
  },
  {
    id: 25,
    orderId: "ORD025",
    customerName: "Ayush Patel",
    orderDate: "2024-03-15",
    status: "Delivered",
  },
  {
    id: 26,
    orderId: "ORD026",
    customerName: "Bhavna Sharma",
    orderDate: "2024-03-14",
    status: "Cancelled",
  },
  {
    id: 27,
    orderId: "ORD027",
    customerName: "Chirag Reddy",
    orderDate: "2024-03-13",
    status: "Processing",
  },
  {
    id: 28,
    orderId: "ORD028",
    customerName: "Deepika Sharma",
    orderDate: "2024-03-12",
    status: "Pending",
  },
  {
    id: 29,
    orderId: "ORD029",
    customerName: "Divya Patel",
    orderDate: "2024-03-11",
    status: "Processing",
  },
  {
    id: 30,
    orderId: "ORD030",
    customerName: "Dhruv Gupta",
    orderDate: "2024-03-10",
    status: "Delivered",
  }
];

const EditDeleteOrder = ({ order, onUpdateStatus, onDelete }) => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(order.status);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdateStatus = () => {
    onUpdateStatus({ ...order, status });
    handleClose();
  };

  const handleDelete = () => {
    onDelete(order.id);
    handleClose();
  };

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Edit/Delete
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit or Delete Order</DialogTitle>
        <DialogContent>
          <Select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            fullWidth
            margin="normal"
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Processing">Processing</MenuItem>
            <MenuItem value="Delivered">Delivered</MenuItem>
            <MenuItem value="Cancelled">Cancelled</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateStatus} color="primary">
            Update Status
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Delete
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const OrdersManagement = () => {
  const [data, setData] = useState(orders);

  const columns = [
    {
      name: "orderId",
      label: "Order ID",
    },
    {
      name: "customerName",
      label: "Customer Name",
    },
    {
      name: "orderDate",
      label: "Order Date",
    },
    {
      name: "status",
      label: "Status",
    },
    {
      name: "actions",
      label: "Actions",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          const order = data[tableMeta.rowIndex];
          return (
            <EditDeleteOrder
              order={order}
              onUpdateStatus={handleUpdateOrderStatus}
              onDelete={handleDeleteOrder}
            />
          );
        },
      },
    },
  ];

  const options = {
    filter: true,
    sort: true,
    selectableRows: "none",
  };

  const handleUpdateOrderStatus = (updatedOrder) => {
    setData(
      data.map((order) => (order.id === updatedOrder.id ? updatedOrder : order))
    );
  };

  const handleDeleteOrder = (id) => {
    setData(data.filter((order) => order.id !== id));
  };

  return (
    <div style={{ background: "#11171B", height: "100vh" }}>
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <MUIDataTable
            title="Orders"
            data={data}
            columns={columns}
            options={options}
          />
        </Box>
      </Box>
    </div>
  );
};

export default OrdersManagement;
