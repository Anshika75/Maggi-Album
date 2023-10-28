#!/bin/bash

# Function to calculate simple interest
calculate_simple_interest() {
  principal="$1"
  rate="$2"
  time="$3"

  # Calculate simple interest
  interest=$(echo "scale=2; $principal * $rate * $time / 100" | bc)

  echo "Principal amount: $principal"
  echo "Interest rate: $rate%"
  echo "Time period (in years): $time"
  echo "Simple Interest: $interest"
}

# Get user input
read -p "Enter the principal amount: " principal
read -p "Enter the annual interest rate (in percentage): " rate
read -p "Enter the time period (in years): " time

# Call the function to calculate and display simple interest
calculate_simple_interest "$principal" "$rate" "$time"
