exports.helloWorld = function helloWorld (req, res) {
  console.log("Running Test");
  res.status(200).send("Hello World");
};
