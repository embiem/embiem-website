module.exports = () => {
  const walkSync = function(dir, filelist) {
    var fs = fs || require("fs"),
      files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function(file) {
      if (fs.statSync(dir + file).isDirectory()) {
        filelist = walkSync(dir + file + "/", filelist);
      } else {
        filelist.push(dir + file);
      }
    });
    return filelist;
  };

  let files = [];
  walkSync("pages/", files);

  const fileObj = {};
  files.forEach(file => {
    const fileExtIdx = file.lastIndexOf(".");
    const cleanFileName = file.substr(0, fileExtIdx).replace("pages/", "");
    fileObj[`/${cleanFileName}`] = { page: `/${cleanFileName}` };
  });

  return fileObj;
};
