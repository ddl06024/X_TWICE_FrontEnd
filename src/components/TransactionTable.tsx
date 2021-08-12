import React, { useState } from "react";
import { Button, Table, Container, Spinner } from "react-bootstrap";
//d
const TransactionTable: React.FC<any> = (props) => {
  const { errors, count, pictures, loading, paginationBasic } = props.value;
  console.log(count);
  const errorsComp =
    count == 0 ? (
      <p>검색하신 결과가 없습니다.</p>
    ) : (
      errors && (
        <p>
          {errors.name} {errors.status}{" "}
        </p>
      )
    );
  const loadingComp = (
    <Spinner animation="border" role="status" style={{ margin: "auto" }}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
  console.log(pictures);
  const tableHeadArray = [
    "트랜잭션 번호",
    "거래시간",
    "사진 제목",
    "From",
    "==>",
    "To",
    "거래 금액",
  ];

  return (
    <Container style={{ height: "100%", borderColor: "green" }}>
      <Table responsive className="shadow p-3 mb-5 bg-white rounded">
        <thead>
          <tr>
            {Array.from(tableHeadArray).map((x, index) => (
              <th key={index}>{x}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading
            ? loadingComp
            : errors
            ? errorsComp
            : Array.from(pictures).map((x: any, index: any) => (
                <tr key={index}>
                  <td>{x.history_num}</td>
                  <td>{x.createdAt}</td>
                  <td>{x.picture_title}</td>
                  <td>{x.user1?.user_id}</td>
                  <td>{"==>"}</td>
                  <td>{x.user2?.user_id}</td>
                  <td>{x.picture_price}</td>
                </tr>
              ))}
        </tbody>
      </Table>
      {paginationBasic}
    </Container>
  );
};

export default TransactionTable;
