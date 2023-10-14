import dynamic from "next/dynamic";
import Image from "next/image";
import {
  Td,
  Tr,
  CustomImage,
} from "./table-body.module";

const TableBody = ({ user, index }) => {
  return (
    <tbody>
      <Tr>
        <Td data-cell="ID">{index}</Td>
        <Td data-cell="Picture">
          <CustomImage
            width={200}
            height={200}
            src={user.picture.medium}
            alt="Profile Picture"
          />
        </Td>
        <Td data-cell="Gender">{user.gender}</Td>
        <Td data-cell="Title">{user.name.title}</Td>
        <Td data-cell="First Name">{user.name.first}</Td>
        <Td data-cell="Last Name">{user.name.last}</Td>
        <Td data-cell="Phone">{user.phone}</Td>
        <Td data-cell="Cell-Phone">{user.cell}</Td>
        <Td data-cell="Country">{user.location.country}</Td>
        <Td data-cell="Street Number">{user.location.street.number}</Td>
        <Td data-cell="Street Name">{user.location.street.name}</Td>
        <Td data-cell="Postcode">{user.location.postcode}</Td>
        <Td data-cell="Offset">{user.location.timezone.offset}</Td>
        <Td data-cell="Timezone">{user.location.timezone.description}</Td>
      </Tr>
    </tbody>
  );
};

export default dynamic(() => Promise.resolve(TableBody), { ssr: false });

// divide the table on 2 parts head and body
