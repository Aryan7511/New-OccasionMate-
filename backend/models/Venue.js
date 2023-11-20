import mongoose from "mongoose";

const venueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your venue name!"],
  },
  description: {
    type: String,
    required: [true, "Please enter description about your venue!"],
  },
  images: [
    {
      type: String,
    },
  ],
  proprietorEmail: {
    type: String,
    lowercase: true,
    unique: true,
    trim: true,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", //User here targets only Dean but Dean stored in User model so We write User
      },
      rating: {
        type: Number,
      },
      comment: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  Address: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  capacity: {
    minCapacity: {
      type: Number,
      required: [true, "Please enter minimum capacity!"],
    },
    maxCapacity: {
      type: Number,
      required: [true, "Please enter maximum capacity!"],
    },
  },
  numberOfRooms: {
    type: Number,
    required: [true, "Please enter the number of rooms!"],
  },
  fullDayRentalPrice: {
    type: Number,
    required: [true, "Please enter the full day rental price!"],
  },
  vegMeal: {
    originalPricePerPlate: {
      type: Number,
    },
    discountPricePerPlate: {
      type: Number,
    },
  },
  nonVegMeal: {
    originalPricePerPlate: {
      type: Number,
    },
    discountPricePerPlate: {
      type: Number,
    },
  },

  ratings: {
    type: Number,
    default: 0, // Default value for ratings when a venue is created
  },
  occasions: {
    type: [
      {
        type: String,
      },
    ],
    validate: {
      validator: arrayMinLengthValidator,
      message: "Select at least one occasion",
    },
    required: true,
  },
  spaceTypes: {
    type: [
      {
        type: String,
      },
    ],
    validate: {
      validator: arrayMinLengthValidator,
      message: "Select at least one space type",
    },
    required: true,
  },
  cuisines: {
    type: [
      {
        type: String,
      },
    ],
    validate: {
      validator: arrayMinLengthValidator,
      message: "Select at least one cuisine",
    },
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

function arrayMinLengthValidator(val) {
  return val && val.length > 0;
}

const Venue = mongoose.model("Venue", venueSchema);
export default Venue;
