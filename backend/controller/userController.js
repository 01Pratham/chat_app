const generateToken = require("../config/generateTokens");
const User = require("../model/userModel");

const registerUser = async (req, res) => {
  if (req.body === "undefined") {
    console.log(req);
  }
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    // throw new Error("Please fill required fields");
    console.log(name, email, password, pic, req.body);
    return res
      .status(201)
      .json({ message: "Please fill all required inputs", status: false });
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res
      .status(201)
      .json({ message: "User already exist", status: false });
  }
  const finalPic = pic ?? process.env.DAFAULT_IMG;
  const createUser = await User.create({
    name,
    email,
    password,
    finalPic,
  });

  if (createUser) {
    res.status(201).json({
      token: generateToken(createUser._id),
      message: "User Created successfully...!",
      status: true,
      data: {
        _id: createUser._id,
        name: createUser.name,
        email: createUser.email,
        pic: createUser.pic,
      },
    });
  } else {
    res.status(201).json({ message: "User cannot be created", status: false });
  }
};

const authUser = async (req, res) => {
  if (req.body.email && req.body.password) {
    const { email, password } = req.body;

    const findUser = await User.findOne({ email });

    if (findUser && (await findUser.matchPassword(password))) {
      res.status(201).json({
        message: "Authentication succeed",
        status: true,
        data: {
          _id: findUser._id,
          name: findUser.name,
          email: findUser.email,
        },
      });
    } else {
      res
        .status(201)
        .json({ message: "Invalid email or password", status: false });
    }
  } else {
    res
      .status(201)
      .json({ message: "Please provide email and password", status: false });
  }
};

module.exports = {
  registerUser,
  authUser,
};
