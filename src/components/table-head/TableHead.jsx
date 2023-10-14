import {
  TableContainer,
  Th,
  Tr,
  Caption,
} from "../table-body/table-body.module";

export default function TableHead({ children }) {
  //       <Caption>Generated Users</Caption>
  return (
    <TableContainer>
      <thead>
        <Tr>
          <Th>ID</Th>
          <Th>Picture</Th>
          <Th>Gender</Th>
          <Th>Title</Th>
          <Th>First Name</Th>
          <Th>Last Name</Th>
          <Th>Phone</Th>
          <Th>Cell Phone</Th>
          <Th>Country</Th>
          <Th>Street Number</Th>
          <Th>Street Name</Th>
          <Th>Postcode</Th>
          <Th>Offset</Th>
          <Th>Timezone</Th>
        </Tr>
      </thead>
      {children}
    </TableContainer>
  );
}
