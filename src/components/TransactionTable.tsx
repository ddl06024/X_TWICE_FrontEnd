import React, { useState } from "react";
import { Button, Table, Container } from "react-bootstrap";
//d
const TransactionTable: React.FC<{}> = () => {
  const [Transactions, setTransactions] = useState(8);
  const loadMoreTransactions = () => {
    setTransactions(Transactions + 8);
  };
  return (
    <Container style={{ height: "100%" }}>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            {Array.from({ length: 8 }).map((_, index) => (
              <th key={index}>Table heading</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: Transactions }).map((_, index) => (
            <tr key={index}>
              <td key={index}>{index}</td>
              {Array.from({ length: 8 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={loadMoreTransactions}>더보기</Button>
      </div>
    </Container>
  );
};

export default TransactionTable;
