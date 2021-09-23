import {Card, Table, TableToolbar} from "wix-style-react";
import type {VFC} from "react";

const TableExample:VFC = () => {
  const records = [
    { item: 'Item 1' },
    { item: 'Item 2' },
    { item: 'Item 3' },
    { item: 'Item 4' },
  ];

  const columns = Array(4).fill({
    title: 'Column Name',
    render: (row: { item: never; }) => row.item,
  });

  return (
    <Card>
      <Table data={records} columns={columns}>
        <TableToolbar>
          <TableToolbar.Title>Toolbar</TableToolbar.Title>
        </TableToolbar>
        <Table.SubToolbar>Sub Toolbar</Table.SubToolbar>
        <Table.Content />
      </Table>
    </Card>
  );
}

export default TableExample