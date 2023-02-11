const birth = Date.parse(new Date('21 May 1995 09:00 GMT').toString());

const msSinceBirth = Date.parse(Date()) - birth;

export const age = msSinceBirth / 1000 / 60 / 60 / 24 / 365;
