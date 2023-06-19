interface CallbackFunction {
  (error: Error, acceptFile: boolean): void;
}

export const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: CallbackFunction,
) => {
  if (!file) return callback(new Error('File is empty'), false);

  const fileExptension = file.mimetype.split('/')[1];
  const validExtension = ['jpg', 'jpeg', 'png', 'gif'];

  if (validExtension.includes(fileExptension)) {
    return callback(null, true);
  }

  callback(null, false);
};
