export const test =("/test",(req, res) => {
    res.json({ message: "API is Working" });
  });

export const signout = (req, res, next) => {
  try {
    res.clearCookie('access_token').status(200).json("User has been signed out");
  } catch (error) {
    next(error);
  }
};


