"use client";

import styled from "styled-components";

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  appearance: none;
  background-color: #fff;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
  &::after {
    content: "\25BC";
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }
`;

export const GenerateFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  background-color: #000000;
  padding: 30px;
  width: 500px;
  height: 500px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background: #191919;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 265px;
  background: linear-gradient(135deg, #183d3d, black, #183d3d);
`;

export const Button = styled.button`
  font-family: lato, sans-serif;
  font-weight: bold;
  font-size: 1em;
  letter-spacing: 0.1em;
  text-decoration: none;
  color: #ffffff;
  background-color: #191919;
  display: inline-block;
  padding: 10px 40px;
  position: relative;
  border: 2px solid #ffffff;
  width: 200px;
  cursor: pointer;
  &:hover {
    color: #000000;
    background-color: #ffffff;
  }
`;
export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  /* border-radius: 5px; */
`;

export const CountriesInput = styled.input`
  width: 70%;
  padding: 10px;
  border: 1px solid #ccc;
  /* border-radius: 5px; */
`;

export const SliderInput = styled.input`
  width: 150px;
  border: 1px solid #ccc;
  margin: 0 10px 0 10px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UsersDiv = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; */
  padding-top: 50px;
  width: 100%;
  max-width: 1700px;
  margin: 0 auto;
  @media (max-width: 900px) {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }
`;

export const CSVcontainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const GeneralDiv = styled.div`
  width: 100%;
`