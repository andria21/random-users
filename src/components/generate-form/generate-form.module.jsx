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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 40px;
  padding: 40px;
  width: 100%;
  max-width: 1400px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background: #191919;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  /* background: linear-gradient(135deg, #183d3d, black, #183d3d); */
  background-color: #183d3d;

  @media (max-width: 1000px) {
    flex-direction: column;
    width: 300px;
    height: 400px;
    padding: 30px;
    gap: 10px;
  }
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
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  overflow-x: auto;
  max-height: 800px;
  margin-bottom: 200px;
  @media (max-width: 1000px) {
    width: 100%;
    max-width: 460px;
    margin: 0 auto;
  }
`;

export const CSVcontainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const GeneralDiv = styled.div`
  width: 100%;

  @media (max-width: 1000px) {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
