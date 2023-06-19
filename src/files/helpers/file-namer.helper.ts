import { v4 as uuid } from 'uuid';

interface CallbackFunction {
  (error: Error, fileName: string): void;
}

export const fileNamer = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: CallbackFunction,
) => {
  if (!file) return callback(new Error('File is empty'), 'hola');

  const fileExtension = file.mimetype.split('/')[1];

  callback(null, `${uuid()}.${fileExtension}`);
};
