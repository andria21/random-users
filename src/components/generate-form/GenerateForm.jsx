"use client";

import {
  Select,
  GenerateFormContainer,
  Title,
  Button,
  Label,
  Input,
  SliderInput,
  Container,
  UsersDiv,
  CSVcontainer,
  GeneralDiv,
} from "./generate-form.module";
import { useEffect, useRef, useState } from "react";

import axios from "axios";
import TableBody from "../table-body/TableBody";
import TableHead from "../table-head/TableHead";
import Papa from "papaparse";

export default function GenerateForm() {
  const [errorCount, setErrorCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [seed, setSeed] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("CH");
  const [page, setPage] = useState(1);
  const [uniqueUserIds, setUniqueUserIds] = useState([]);
  const seedValue = useRef();

  const exportToCSV = () => {
    const exportData = users.map((user, index) => {
      return {
        ID: index + 1,
        Picture: user.picture.medium,
        Gender: user.gender,
        Title: user.name.title,
        FirstName: user.name.first,
        LastName: user.name.last,
        Phone: user.phone,
        CellPhone: user.cell,
        Country: user.location.country,
        StreetNumber: user.location.street.number,
        StreetName: user.location.street.name,
        PostCode: user.location.postcode,
        Offset: user.location.timezone.offset,
        Timezone: user.location.timezone.description,
      };
    });

    const csv = Papa.unparse(exportData);
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "user_data.csv";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      if (windowHeight + scrollTop >= documentHeight && !loading) {
        generateUsers();
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, selectedCountry, users]);

  const generateUsers = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const countryToFetch = selectedCountry;
      const response = await axios.get(
        `https://randomuser.me/api/?nat=${countryToFetch}&results=10&page=${
          page + 1
        }&seed=${seed}`
      );
      const randomUsers = response.data.results;
      const usersWithErrors = randomUsers.map((user) => {
        return introduceErrors(user, errorCount);
      });
      const uniqueUsers = usersWithErrors.filter(
        (user) => !uniqueUserIds.includes(user.login.uuid)
      );
      setUsers([...users, ...uniqueUsers]);
      const newUniqueIds = uniqueUsers.map((user) => user.login.uuid);
      setUniqueUserIds([...uniqueUserIds, ...newUniqueIds]);
      setPage(page + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const introduceErrors = (user, errorCount) => {
    const randomNumber = Math.random();

    if (randomNumber < errorCount) {
      const insertIndex = Math.floor(Math.random() * errorCount);
      const randomCharacter = String.fromCharCode(
        65 + Math.floor(Math.random() * 26)
      );
      user.phone =
        user.phone.slice(0, insertIndex) +
        randomCharacter +
        user.phone.slice(insertIndex);
      user.name.first =
        user.name.first.slice(0, insertIndex) +
        randomCharacter +
        user.name.first.slice(insertIndex);
      user.name.last =
        user.name.last.slice(0, insertIndex) +
        randomCharacter +
        user.name.last.slice(insertIndex);
      const swapIndex1 = Math.floor(Math.random() * errorCount);
      const swapIndex2 = Math.floor(Math.random() * errorCount);
      const countryArray = user.location.country.split("");
      [countryArray[swapIndex1], countryArray[swapIndex2]] = [
        countryArray[swapIndex2],
        countryArray[swapIndex1],
      ];
      user.location.country = countryArray.join("");
    }

    return user;
  };

  const loadUsers = async () => {
    let randomSeed;
    if (seed) {
      randomSeed = seed;
    } else {
      randomSeed = Math.floor(Math.random() * 1000);
      seedValue.current = randomSeed;
    }
    try {
      const response = await axios.get(
        `https://randomuser.me/api/?nat=${selectedCountry}&results=20&seed=${randomSeed}`
      );
      const randomUsers = response.data.results;
      const usersWithErrors = randomUsers.map((user) => {
        return introduceErrors(user, errorCount);
      });
      setUsers(usersWithErrors);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GeneralDiv>
      <CSVcontainer>
        <Button type="button" onClick={exportToCSV}>
          Export to CSV
        </Button>
      </CSVcontainer>

      <Container>
        <GenerateFormContainer>
          <Title>Generate Users</Title>
          <Select
            name="countries"
            id="countries"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option value="CH">Switzerland</option>
            <option value="AU">Australia</option>
            <option value="US">Usa</option>
            <option value="CA">Canada</option>
            <option value="BR">Brazil</option>
            <option value="FR">France</option>
            <option value="MX">Mexico</option>
            <option value="UA">Ukraine</option>
            <option value="TR">Turkey</option>
          </Select>
          <Label>
            Errors (0 to 10):
            <SliderInput
              type="range"
              min="0"
              max="10"
              step="0.5"
              value={errorCount}
              onChange={(e) => setErrorCount(parseFloat(e.target.value))}
            />
            {errorCount <=10 ? errorCount : 10}
          </Label>

          <br />

          <Label>
            Errors (up to 1000):
            <Input
              type="number"
              min="0"
              max="1000"
              step="any"
              value={errorCount}
              onChange={(e) => {
                const newValue = parseInt(e.target.value, 10);
                if (!isNaN(newValue) && newValue <= 1000) {
                  setErrorCount(newValue);
                }
              }}
            />
          </Label>
          <Label>
            Seed
            <Input
              type="text"
              value={seed}
              placeholder={seedValue.current}
              onChange={(e) => setSeed(e.target.value)}
            />
          </Label>
          <Button type="button" onClick={() => loadUsers()}>
            Generate
          </Button>
        </GenerateFormContainer>
      </Container>
      <UsersDiv>
        {users.length > 0 && (
          <TableHead>
            {users.map((user, index) => (
              <TableBody key={index} user={user} index={index + 1} />
            ))}
          </TableHead>
        )}
      </UsersDiv>
    </GeneralDiv>
  );
}
