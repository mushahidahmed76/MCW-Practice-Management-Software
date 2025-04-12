"use client";

import { MoreHorizontal } from "lucide-react";
import { Button, Badge } from "@mcw/ui";
import DataTable from "@/components/table/DataTable";

const rows = [
  {
    id: 1,
    date: "02/26/2025",
    time: "11:14 AM (EST)",
    event: "created an appointment on 02/27/2025 at 9:15 am for client ",
    user_id: '3710EEAB-D152-486C-82F7-6CA98AB5769D',
    username: 'John Doe',
    client_name: 'Shawaiz Sarfraz',

  },
  {
    id: 2,
    date: "02/26/2025",
    time: "11:14 AM (EST)",
    event: "created an appointment on 02/27/2025 at 9:15 am for client ",
    user_id: '3710EEAB-D152-486C-82F7-6CA98AB5769D',
    username: 'John Doe',
    client_name: 'Shawaiz Sarfraz',
  },
  {
    id: 3,
    date: "02/26/2025",
    time: "11:14 AM (EST)",
    event: "created an appointment on 02/27/2025 at 9:15 am for client ",
    user_id: '3710EEAB-D152-486C-82F7-6CA98AB5769D',
    username: 'John Doe',
    client_name: 'Shawaiz Sarfraz',
  },
  {
    id: 4,
    date: "02/26/2025",
    time: "11:14 AM (EST)",
    event: "created an appointment on 02/27/2025 at 9:15 am for client ",
    user_id: '3710EEAB-D152-486C-82F7-6CA98AB5769D',
    username: 'John Doe',
    client_name: 'Shawaiz Sarfraz',
  },
];

// TODO: Add right type
const HistoryTable = (props: { onRowClick: (id: string) => void }) => {
  const columns = [
    {
      key: "date",
      label: "Date",
    },
    {
      key: "time",
      label: "Time",
    },
    {
      key: "event",
      label: "Event",
      formatter: (row: typeof rows[number]) =>
        `You ${row.event}${row.client_name}`,
      // TODO: Replace "You" with sign in user logic
    },
  ];

  return (
    // TODO: Add right type
    // @ts-expect-error - TODO: Add right type
    <DataTable columns={columns} rows={rows} onRowClick={props.onRowClick} />
  );
};

export default HistoryTable;
