import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from "@mui/material";

const WeeklyPlanner = () => {
  const getCurrentWeek = () => {
    const currentDate = new Date();
    const firstDayOfWeek = new Date(currentDate);
    firstDayOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
    const formattedDate = firstDayOfWeek.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
    return `Week of ${formattedDate}`;
  };

  const initialPlannerData = [
    { day: "Monday", breakfast: "", lunch: "", dinner: "" },
    { day: "Tuesday", breakfast: "", lunch: "", dinner: "" },
    { day: "Wednesday", breakfast: "", lunch: "", dinner: "" },
    { day: "Thursday", breakfast: "", lunch: "", dinner: "" },
    { day: "Friday", breakfast: "", lunch: "", dinner: "" },
    { day: "Saturday", breakfast: "", lunch: "", dinner: "" },
    { day: "Sunday", breakfast: "", lunch: "", dinner: "" },
  ];

  const [plannerData, setPlannerData] = useState(() => {
    const storedData = localStorage.getItem("plannerData");
    return storedData ? JSON.parse(storedData) : initialPlannerData;
  });

  useEffect(() => {
    localStorage.setItem("plannerData", JSON.stringify(plannerData));
  }, [plannerData]);

  const handleClearPlanner = () => {
    setPlannerData(initialPlannerData);
    console.log("Planner cleared!");
  };

  const handleMealChange = (dayIndex, mealType, value) => {
    setPlannerData((prevPlanner) => {
      const updatedPlanner = [...prevPlanner];
      updatedPlanner[dayIndex][mealType] = value;
      return updatedPlanner;
    });
  };

  return (
    <Container component="main" maxWidth="lg">
      <Box sx={{ mt: "8%", textAlign: "center", mb: "4%" }}>
        <Typography variant="h2" gutterBottom>
          Weekly Meal Planner
        </Typography>

        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
          {getCurrentWeek()}
        </Typography>

        {/* Weekly Meal Planner Table */}
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Day</TableCell>
                <TableCell>Breakfast</TableCell>
                <TableCell>Lunch</TableCell>
                <TableCell>Dinner</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {plannerData.map((item, dayIndex) => (
                <TableRow key={dayIndex}>
                  <TableCell>{item.day}</TableCell>
                  <TableCell>
                    <TextField
                      fullWidth
                      value={item.breakfast}
                      onChange={(e) =>
                        handleMealChange(dayIndex, "breakfast", e.target.value)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      fullWidth
                      value={item.lunch}
                      onChange={(e) =>
                        handleMealChange(dayIndex, "lunch", e.target.value)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      fullWidth
                      value={item.dinner}
                      onChange={(e) =>
                        handleMealChange(dayIndex, "dinner", e.target.value)
                      }
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Button to clear the planner */}
        <Button
          onClick={handleClearPlanner}
          fullWidth
          variant="outlined"
          sx={{ mt: 2 }}
        >
          Clear Planner
        </Button>
      </Box>
    </Container>
  );
};

export default WeeklyPlanner;
