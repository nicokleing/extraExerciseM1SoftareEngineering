const superCarsData = {
    "dealerships": [
      {
        "employees": [
          {
            "name": "John Doe",
            "jobTitle": "Sales Manager",
            "salary": 60000
          },
          {
            "name": "Jane Smith",
            "jobTitle": "Finance Specialist",
            "salary": 55000
          }
        ],
        "cars": [
          {
            "modelName": "911",
            "manufacturerName": "Porsche",
            "modelYear": 2022,
            "price": 143000
          },
          {
            "modelName": "Model S",
            "manufacturerName": "Tesla",
            "modelYear": 2022,
            "price": 79990
          },
          {
            "modelName": "F-Type",
            "manufacturerName": "Jaguar",
            "modelYear": 2021,
            "price": 61600
          }
        ]
      },
      {
        "employees": [
          {
            "name": "Michael Scott",
            "jobTitle": "Branch Manager",
            "salary": 65000
          },
          {
            "name": "Pam Beesly",
            "jobTitle": "Receptionist",
            "salary": 45000
          }
        ],
        "cars": [
          {
            "modelName": "Mustang",
            "manufacturerName": "Ford",
            "modelYear": 2021,
            "price": 27000
          },
          {
            "modelName": "Camaro",
            "manufacturerName": "Chevrolet",
            "modelYear": 2022,
            "price": 25000
          },
          {
            "modelName": "Corvette",
            "manufacturerName": "Chevrolet",
            "modelYear": 2022,
            "price": 60000
          }
        ]
      }
    ]
  };
  
  console.log("1st Dealership's 2nd Employee: ", superCarsData.dealerships[0].employees[1]);
  console.log("2nd Dealership's 1st Car: ", superCarsData.dealerships[1].cars[0]);
  