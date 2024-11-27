const mongoose = require("mongoose");
const shortUrlSchema = new mongoose.Schema(
  {
    originalUrl: {
      type: String,
      required: [true, "Original URL is required"],
      trim: true,
      validate: {
        validator: function (value) {
            
          // Simple URL regex for more lenient validation
          return /^(https?:\/\/)?([\w-]+(\.[a-zA-Z]{2,})+)(\/[\w\-]*)*(\?[\w\=&]*)?(#\w*)?$/.test(
            value
          );
        },
        message: "Please enter a valid URL",
      },
    },
    shortUrl: {
      type: String,
      required: [true, "Short URL is required"],
      unique: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// Creating and exporting the model
const ShortURL = mongoose.model("ShortURL", shortUrlSchema);

module.exports = ShortURL;
