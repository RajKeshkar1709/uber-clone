const express = require("express");
const captainModel = require("../models/captain.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const captainRegister = async (req, res) => {
  try {
    const { fullName, email, password, vehicle } = req.body;

  if (
    !fullName?.firstName ||
    !email ||
    !password ||
    !vehicle?.color ||
    !vehicle?.model ||
    !vehicle?.plate ||
    !vehicle?.capacity ||
    !vehicle?.vehicleType
  ) {
    res.status(404).json({
      message: "all fields required",
    });
  }
  const exisitingUser = await captainModel.findOne({ email });

  if (exisitingUser) {
    res.status(404).json({
      message: "Captain already registered",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const captain = await captainModel.create({
    fullName: {
      firstName: fullName.firstName,
      lastName: fullName.lastName,
    },
    email,
    password: hashedPassword,
    vehicle: {
      color: vehicle.color,
      plate: vehicle.plate,
      model: vehicle.model,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    },
  });
  const token = jwt.sign({ id: captain._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  return res.status(201).json({
    message: "Captain registered Successfully",
    token,
    captain: {
      id: captain._id,
      fullName: captain.fullName,
      email: captain.email,
      vehicle: captain.vehicle,
    },
  });
    
  } catch (error) {
    console.log(error)
    res.status(404).json({
        message:'error:',error
    })
    
  }
};

//Login captain

const loginCaptain = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Validate fields
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    // 2. Find captain
    const captain = await captainModel.findOne({
      email: email.toLowerCase().trim(),
    });

    if (!captain) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // 3. Compare password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      captain.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // 4. Generate JWT
    const token = jwt.sign(
      {
        id: captain._id,
        role: "captain",
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    // 5. Send response
    return res.status(200).json({
      message: "Captain login successful",
      token,
      captain: {
        id: captain._id,
        fullName: captain.fullName,
        email: captain.email,
        vehicle: captain.vehicle,
      },
    });

  } catch (error) {
    console.log("Captain Login Error:", error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};


// CAPTAIN PROFILE
const getCaptainProfile = async (req, res) => {
  try {
    const captain = await captainModel.findById(req.user.id).select("-password");

    if (!captain) {
      return res.status(404).json({
        message: "Captain not found",
      });
    }

    return res.status(200).json({
      message: "Captain profile fetched successfully",
      captain,
    });

  } catch (error) {
    console.log("Captain Profile Error:", error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = {captainRegister,loginCaptain,getCaptainProfile};
