const path = require("path");
const fs = require("fs");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "product.json",
);

const fetchingAllData = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    } else {
      return cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor({ title, imageUrl, description, price }) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  // Add / Save
  save() {
    fetchingAllData((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  // Delete
  static deleteDataByName(name) {
    fetchingAllData((data) => {
      const filterData = data.filter((items) => items.title !== name);
      fs.writeFile(p, JSON.stringify(filterData), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }

  // Fetch All
  static fetchAll(cb) {
    fetchingAllData(cb);
  }
};
