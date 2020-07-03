import jwt from 'jsonwebtoken';

export const parseError = (err) => {
  if (err.isJoi) return err.details[0].message;
  return err.message;
};

//Verify JWT token
export const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(
      token,
      process.env.TOKEN_SECRET ||
      "hvhfv_7bhg8fvhvy-jkh28hk n_BGYGB!(^@%(ikhi_l",
      (err, user) => {
        if (err) {
          return res.json({
            status: 403,
            error: "Your Token has Expired",
          });
        }
        req.user = user;
        next();
      }
    );
  } else {
    res.json({ "status": 401, "error": "Unauthorized" });
  }
};

//Create JWT token
export const generateAccessToken = (user) => {
  return jwt.sign(
    {
      userId: user._id,
      firstName: user.firstName,
      secondName: user.secondName,
      username: user.username,
      email: user.email,
      admin: user.admin,
      status: user.status,
    },
    process.env.TOKEN_SECRET ||
    "hvhfv_7bhg8fvhvy-jkh28hk n_BGYGB!(^@%(ikhi_l",
    { expiresIn: "24h" }
  );
};
