import { Table } from "antd";
import { Button } from 'antd';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Dashboard() {
  const [company, setCompany] = useState([]);
  useEffect(() => {
    fetch("https://northwind.vercel.app/api/suppliers")
      .then((res) => res.json())
      .then((data) => {
        setCompany(data)
      });
  }, [setCompany]);


  const columns = [
      {
        title: "ID",
        dataIndex: "id",
        sorter: (a, b) => a.id - b.id,
        key: "id",
      },
      {
        title: "Company Name",
        dataIndex: "companyName",
        sorter: (a, b) => a.companyName < b.companyName,
        key: "companyName",
      },
      {
        title: "Company Country",
        dataIndex: ["address","country"],
        key: "country",
      },
      {
        title: "Total Price",
        dataIndex:["address","postalCode"],
        key: "postalCode",
      },
      {
        title: 'Action',
        render: () => <Link to={`/company/${company.id}`}><Button type="primary">detail</Button></Link>,
      },
  ];
  return <div>
     <Table
      style={{
        width: "70%",
        margin: "0 auto",
        marginTop: "50px"
      }}
      dataSource={company}
      columns={columns}
    />
  </div>;
}

export default Dashboard;
