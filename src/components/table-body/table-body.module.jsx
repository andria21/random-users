import styled from "styled-components";
import Image from "next/image";

export const Td = styled.td`
  padding: 12px;
  border: 1px solid #191919;
  text-align: center;

  @media (max-width: 1000px) {
    display: block;
    &::before {
      content: attr(data-cell) ": ";
      font-weight: 700;
    }

    &:last-child {
      margin-bottom: 3rem;
    }
  }
  /* @media (max-width: 1360px) {
    display: block;
    &::before {
      content: attr(data-cell) ": ";
      font-weight: 700;
    }

    &:last-child {
      margin-bottom: 3rem;
    }
  } */
`;
export const Th = styled.th`
  padding: 12px;
  border: 1px solid #191919;
  @media (max-width: 1000px) {
    display: none;
  }
  /* @media (max-width: 1360px) {
    display: none;
  } */
`;

export const Tr = styled.tr`
  border: 1px solid #191919;
  border-collapse: collapse;
  border-radius: 10px;
`;

export const TableContainer = styled.table`
  border: 1px solid #191919;
  border-collapse: collapse;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 200px;
  @media (max-width: 1400px) {
    word-break: break-all;
  }
`;

export const BlockButton = styled.a`
  display: inline-block;
  padding: 0.6em 1.7em;
  border: 0.1em solid #191919;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    color: #000000;
    background-color: #ffffff;
  }
`;


export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem;
  width: 100%;
`;

export const CustomImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 900px) {
    width: 100%;
    object-fit: fill;
  }
`;

export const Caption = styled.caption`
font-size: 32px;
font-weight: 700;
margin-bottom: 20px;
`
