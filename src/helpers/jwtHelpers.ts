import jwt, { JwtPayload, Secret } from 'jsonwebtoken';

const createToken = <T extends Record<string, unknown>>(
  payload: T,
  secret: Secret,
  expireTime: string
): string => {
  return jwt.sign(payload, secret, {
    expiresIn: expireTime,
  });
};

const createResetToken = <T extends Record<string, unknown>>(
  payload: T,
  secret: Secret,
  expireTime: string
): string => {
  return jwt.sign(payload, secret, {
    algorithm: 'HS256',
    expiresIn: expireTime,
  });
};

const verifyToken = (token: string, secret: Secret): JwtPayload => {
  return jwt.verify(token, secret) as JwtPayload;
};

export const jwtHelpers = {
  createToken,
  verifyToken,
  createResetToken,
};
