const sql = require('mssql/msnodesqlv8');
const express = require('express');
const { request } = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded());

var config = {
  database: 'PleinAir_Booking',
  server: 'LAPTOP-F1DLTNIK\\SQLEXPRESS',
  driver: 'msnodesqlv8',
  options: {
    trustedConnection: true,
  },
};

const getCaravans = async () => {
  try {
    let pool = await sql.connect(config);
    let Caravans = pool.request().query('SELECT * FROM Caravans');
    console.log(Caravans);
    return Caravans;
  } catch (error) {
    console.log(error);
  }
};
getCaravans().then((res) => {
  console.log(res.recordset);
});

const createCaravans = async (caravan) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool
      .request()
      .query(
        `INSERT INTO Caravans VALUES (${caravan.CaravanID},'${caravan.Name}','${caravan.Description}','${caravan.Type}','${caravan.Manager}',${caravan.AccommodationCount},'${caravan.AdditionalExtension}')`
      );
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

class caravan {
  constructor(
    CaravanID,
    Name,
    Description,
    Type,
    Manager,
    AccommodationCount,
    AdditionalExtension
  ) {
    this.CaravanID = CaravanID;
    this.Name = Name;
    this.Type = Type;
    this.Description = Description;
    this.Manager = Manager;
    this.AccommodationCount = AccommodationCount;
    this.AdditionalExtension = AdditionalExtension;
  }
}

let pam = new caravan(
  6,
  'caravan F',
  'Basic caravan with no frills',
  'Economy',
  'Ahmed Ali',
  6,
  0
);

getCaravans().then((res) => {
  console.log(res.recordset);
});

createCaravans(pam);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
