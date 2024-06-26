import React from "react";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { Column } from "@ant-design/plots";
import { useDispatch, useSelector } from "react-redux";
import { Space, Table, Tag } from 'antd';
import { useState } from "react";
import { useEffect } from "react";
import {
  getMonthlyData,
  getProductOrders,
  getYearlyData,
} from "../features/auth/authSlice";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Total Price ",
    dataIndex: "dprice",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];


const Dashboard = () => {
  const dispatch = useDispatch();
  const monthlyDataState = useSelector((state) => state?.auth?.monthlyData);
  const yearlyDataState = useSelector((state) => state?.auth?.yearlyData);
  const orderState = useSelector((state) => state?.auth?.Orders);
  const [dataMonthly, setDataMonthly] = useState([]);
  const [dataMonthlySales, setDataMonthlySales] = useState([]);
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    dispatch(getMonthlyData());
    dispatch(getYearlyData());
    dispatch(getProductOrders());
  }, [dispatch]);
  useEffect(() => {
    let monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let data = [];
    let monthlyOrderCount = [];
    for (let index = 0; index < monthlyDataState?.length; index++) {
      const element = monthlyDataState[index];
      data.push({
        type: monthNames[element?._id?.month],
        income: element?.count,
      });
      monthlyOrderCount.push({
        type: monthNames[element?._id?.month],
        sales: element?.count,
      });
    }
    setDataMonthly(data);
    setDataMonthlySales(monthlyOrderCount);
  });

  const config = {
    data: dataMonthly,
    xField: "type",
    yField: "income",
    color: ({ type }) => {
      return "#ffd333";
    },
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Month",
      },
      sales: {
        alias: "Income",
      },
    },
  };

  const config2 = {
    data: dataMonthlySales,
    xField: "type",
    yField: "sales",
    color: ({ type }) => {
      return "#ffd333";
    },
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Month",
      },
      sales: {
        alias: "Sales",
      },
    },
  };

  const data1 = orderState?.map((order, index) => ({
    key: index + 1,
    name: `${order?.user?.firstname} ${order?.user?.lastname}`,
    product: order?.orderItems.map(item => item?.product?.title).join(", "), 
    price: order?.orderItems[0]?.price, 
    dprice: order?.totalPrice,
    status: order?.orderStatus === "Processed" ? <p className="text-primary  border border-primary rounded-3">{order?.orderStatus}</p> : order?.orderStatus === "Shipped"? <p className="text-success text-center border border-success rounded-3">{order?.orderStatus}</p> : order?.orderStatus === "Delivery" ? <p className="text-warning border text-center border-warning rounded-3">{order?.orderStatus}</p> : <p className="text-danger border border-danger text-center rounded-3">{order?.orderStatus}</p>,
    }));

  return (
    <div>
      <h3 className="mb-4 title">Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-light p-3 rounded-3">
          <div>
            <p className="desc">Total</p>
            <h4 className="mb-0 sub-title">{yearlyDataState?.[0]?.amount} frw</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="red">
              <BsArrowDownRight /> 32%
            </h6>
            <p className="mb-0  desc">Yearly Total Income</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-success p-3 rounded-3">
          <div>
            <p className="desc text-white">Total</p>
            <h4 className="mb-0 sub-title">{yearlyDataState?.[0]?.count}</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="green">
              <BsArrowDownRight /> 32%
            </h6>
            <p className="mb-0 desc text-white">Yearly Total Sales</p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between gap-3">
        <div className="mt-4 flex-grow-1 w-50">
          <h3 className="mb-5 title">Income Statics</h3>
          <div>
            <Column {...config} />
          </div>
        </div>
        <div className="mt-4 flex-grow-1 w-50">
          <h3 className="mb-5 title">Sales Statics</h3>
          <div>
            <Column {...config2} />
          </div>
        </div>
      </div>
      <div className="mt-4 ">
        <h3 className="mb-5 title">Recent Orders</h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
