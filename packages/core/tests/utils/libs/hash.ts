import * as bcrypt from 'bcrypt';

export const getTextHashed = async (text: string): Promise<string> => {
  return bcrypt.hash(text, 10);
};
