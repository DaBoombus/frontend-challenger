"use strict";
const express = require("express");
const server = express();

let recipients = {
  "records": [
    {
      "email": "recipient1@example.com",
      "name": "Recipient One",
      "type": "individual",
      "status": "active",
      "timeZone": "UTC",
      "language": "en",
      "updatedAt": "2016-03-07T18:59:06.879Z",
      "createdAt": "2016-03-07T18:59:06.879Z",
      "id": "123456",
      "gravatarUrl": "//www.gravatar.com/avatar/8312e4b5f4789b0d94ba0bd7c434cbc2",
      "payoutAccount": {
        "type": "paypal",
        "email": "recipient1@example.com"
      },
      "compliance": {
        "status": "pending",
        "checkedAt": null
      },
      "address": {
        "street1": "rue des lila",
        "street2": null,
        "city": "Montreal",
        "postalCode": "G7J-O9H",
        "phone": "(514) 999-9999",
        "country": "CA",
        "region": "QC"
      },
      "balances": {
        "USD": {
          "primary": true,
          "amount": 0,
          "pending": 0
        }
      }
    },
    {
      "email": "recipient2@example.com",
      "name": "Payment rails",
      "type": "business",
      "status": "active",
      "timeZone": "UTC",
      "language": "en",
      "updatedAt": "2016-03-08T18:32:06.354Z",
      "createdAt": "2016-03-08T18:32:06.354Z",
      "id": "12455",
      "gravatarUrl": "//www.gravatar.com/avatar/85e62dc1a3e9cb9377d32b2a2373634e",
      "payoutAccount": {
        "type": "bitcoin"
      },
      "compliance": {
        "status": "pending",
        "checkedAt": null
      },
      "address": {
        "street1": "Awesome street",
        "street2": null,
        "city": "Montreal",
        "postalCode": "B9L-0O0",
        "phone": "(514) 111-1111",
        "country": "CA",
        "region": "QC"
      },
      "balances": {
        "USD": {
          "primary": true,
          "amount": 0,
          "pending": 0
        }
      }
    },
    {
      "email": "recipient3@example.com",
      "name": "Recipient Three",
      "type": "individual",
      "status": "active",
      "timeZone": "UTC",
      "language": "en",
      "updatedAt": "2016-03-08T18:33:10.740Z",
      "createdAt": "2016-03-08T18:33:10.740Z",
      "id": "7",
      "gravatarUrl": "//www.gravatar.com/avatar/55502f40dc8b7c769880b10874abc9d0",
      "payoutAccount": {
        "type": "western-union"
      },
      "compliance": {
        "status": "pending",
        "checkedAt": null
      },
      "address": {
        "street1": "5823 av meh",
        "street2": null,
        "city": "Montreal",
        "postalCode": "H3S-2C8",
        "phone": "(514) 333-4444",
        "country": "CA",
        "region": "QC"
      },
      "balances": {
        "USD": {
          "primary": true,
          "amount": 0,
          "pending": 0
        }
      }
    }
  ],
  "meta": {
    "page": 1,
    "pages": 1,
    "records": 3
  }
};

server.get("/api/recipients/:id", (request, response) => {
  response.status(200).json(
    recipients.records.reduce(
      (carry, recipient) => {
        if (recipient.id == request.params.id) {
          carry = recipient;
        }
        return carry;
      },
      {}
    ))
});

server.get("/api/recipients", (request, response) => {
  response.status(200).json(recipients);
});

server.use(express.static("www"));

server.listen(3000);
