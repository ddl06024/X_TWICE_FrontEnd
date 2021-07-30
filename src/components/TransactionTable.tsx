import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
//d
const TransactionTable: React.FC<{}> = () => {
  const [Transactions, setTransactions] = useState(8);
  const loadMoreTransactions = () => {
    setTransactions(Transactions + 8);
  };
  return (
    <div style={{ width: "100%", margin: "2rem auto" }}>
      <div style={{ width: "85%", margin: "1rem auto" }}>
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
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={loadMoreTransactions}>더보기</Button>
      </div>
    </div>
  );
};

export default TransactionTable;
