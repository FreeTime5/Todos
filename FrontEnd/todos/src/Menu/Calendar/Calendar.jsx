import {
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Button,
  Heading,
  GridItem,
  Grid,
  Container,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { use } from "framer-motion/client";

const calendarBorder = "solid 2px #8b00ff";

const gridItemStyle = { textAlign: "center" };
const buttonStyle = { width: "100%", height: "100%", textAlign: "center" };

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function Calendar() {
  const [today, setToday] = useState(new Date());
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [dayOfTheWeek, setDay] = useState(today.getDay());

  const isAvailibleMonthButton = useMemo(() => {
    const currentDate = new Date();
    return month === currentDate.getMonth() &&
      year === currentDate.getFullYear()
      ? false
      : true;
  }, [month]);

  const nextMonth = useCallback(() => {
    if (month == 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  }, [month]);

  const previousMonth = useCallback(() => {
    if (month == 0) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
  }, [month]);

  const head = useMemo(() => {
    const columns = days.map(
      (d) => (
        <GridItem
          textAlign="center"
          colSpan={1}
          rowSpan={1}
          backgroundColor={d === "Sat" || d === "Sun" ? "#fec9c9" : "#ffffff"}
        >
          {d}
        </GridItem>
      ),
      []
    );
    return <Grid templateColumns="repeat(7, 14.28%)">{columns}</Grid>;
  }, [days]);

  const daysInMonth = useMemo(() => {
    return 32 - new Date(year, month, 32).getDate();
  }, [year, month]);

  const calendar = useMemo(() => {
    let date = 1;
    const firstDay = new Date(year, month, 1).getDay();
    let rows = [];
    for (let i = 0; i < 6; i++) {
      let columns = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDay) || date > daysInMonth) {
          columns.push(
            <GridItem
              colSpan={1}
              rowSpan={1}
              backgroundColor={j === 0 || j === 6 ? "#fec9c9" : "#ffffff"}
            ></GridItem>
          );
        } else {
          columns.push(
            <GridItem
              colSpan={1}
              rowSpan={1}
              backgroundColor={j === 0 || j === 6 ? "#fec9c9" : "#ffffff"}
            >
              <button style={buttonStyle}>{date}</button>
            </GridItem>
          );
          date++;
        }
      }
      rows.push(<Grid templateColumns="repeat(7, 14.28%)">{columns}</Grid>);
    }
    return rows;
  }, [year, month]);

  // const chosedCalenderPage = useMemo(() => {});

  return (
    <>
      <Grid templateColumns="1fr 2fr 3fr 1fr" gap={0}>
        <GridItem w="100%">
          <Button
            margin="5px 5px 5px 5px"
            className="previousMonth"
            onClick={previousMonth}
            isDisabled={!isAvailibleMonthButton}
          >
            <ArrowBackIcon />
          </Button>
        </GridItem>
        <GridItem w="100%">
          <Heading
            size={"md"}
            paddingTop="5px"
            margin="5px 5px 5px 5px"
            textAlign={"center"}
          >
            {year}
          </Heading>
        </GridItem>
        <GridItem w="100%">
          <Heading
            size={"md"}
            paddingTop="5px"
            margin="5px 5px 5px 5px"
            textAlign={"center"}
          >
            {months[month]}
          </Heading>
        </GridItem>

        <GridItem alignItems={"end"} w="100%" h="10">
          <Button float="right" margin="5px 5px 5px 5px" onClick={nextMonth}>
            <ArrowForwardIcon />
          </Button>
        </GridItem>
      </Grid>
      {head}
      {calendar}
    </>
  );
}

export default Calendar;
