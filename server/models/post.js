const {Schema, model} = require("mongoose")
const {ObjecId} = Schema.Types

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  postedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

model("Post", postSchema);
