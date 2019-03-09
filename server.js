const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.use(express.static('public'));
app.set("views", "views");
app.set("view engine", "ejs");

app.get('/calc', () => console.log('Received request for rps page'));
app.get('/compute', handleCompute);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

function handleCompute(request, response) {

    console.log("Computing Prices....");

    const type = request.query.type;
    console.log("Type of mail " + type);

    const weight = request.query.weight;

    var sum = 0;

    if(type == "Letter (Metered)") {
    	if (weight <= 1) {
          sum = "0.55";
    	}
    	else if (weight <= 2 && weight > 1) {
          sum = "0.70";
    	}
    	else if (weight <= 3 && weight > 2) {
          sum = "0.85";
    	}
    	else if (weight <= 3.5 && weight > 3) {
          sum = "1";
    	}

    	else{
    		sum = -1;
    	}
    }

    else if(type == "Letter (Stamped)") {
    	if (weight <= 1) {
    		sum = "0.50";
    	}
    	else if (weight <= 2 && weight > 1) {
    		sum = "0.65";
    	}
    	else if (weight <= 3 && weight > 2) {
    		sum = "0.80";
    	}
    	else if (weight <= 3.5 && weight > 3) {
    		sum = "0.95";
    	}

    	else{
    		sum = -1;
    	}
    }

    else if(type == "Large Envelope (Flat)") {
    	if (weight <= 1) {
    	   sum = "1";
    	}
    	else if (weight <= 2 && weight > 1) {
           sum = "1.15";
    	}
    	else if (weight <= 3 && weight > 2) {
    	   sum = "1.30";
    	}
    	else if (weight <= 4 && weight > 3) {
    		sum = "1.45";
    	}
    	else if (weight <= 5 && weight > 4) {
    		sum = "1.60";
    	}
    	else if (weight <= 6 && weight > 5) {
    		sum = "1.75";
    	}
    	else if (weight <= 7 && weight > 6) {
    		sum = "1.90";
    	}
    	else if (weight <= 8 && weight > 7) {
    		sum = "2.05";
    	}
    	else if (weight <= 9 && weight > 8) {
    		sum = "2.20";
    	}
    	else if (weight <= 10 && weight > 9) {
    		sum = "2.35";
    	}
    	else if (weight <= 11 && weight > 10) {
    		sum = "2.50";
    	}
    	else if (weight <= 12 && weight > 11) {
    		sum = "2.65";
    	}
    	else if (weight <= 13 && weight > 12) {
    		sum = "2.80";
    	}
    	else{
    		sum = -1;
    	}
    }

    else {
    	if (weight <= 1) {
    	   sum = "4.06";
    	}
    	else if (weight <= 2 && weight > 1) {
           sum = "4.06";
    	}
    	else if (weight <= 3 && weight > 2) {
    	   sum = "4.06";
    	}
    	else if (weight <= 4 && weight > 3) {
    		sum = "4.06";
    	}
    	else if (weight <= 5 && weight > 4) {
    		sum = "4.81";
    	}
    	else if (weight <= 6 && weight > 5) {
    		sum = "4.81";
    	}
    	else if (weight <= 7 && weight > 6) {
    		sum = "4.81";
    	}
    	else if (weight <= 8 && weight > 7) {
    		sum = "4.81";
    	}
    	else if (weight <= 9 && weight > 8) {
    		sum = "5.66";
    	}
    	else if (weight <= 10 && weight > 9) {
    		sum = "5.66";
    	}
    	else if (weight <= 11 && weight > 10) {
    		sum = "5.66";
    	}
    	else if (weight <= 12 && weight > 11) {
    		sum = "5.66";
    	}
    	else if (weight <=13 && weight > 12) {
    		sum = "6.27";
    	}

    	else{
    		sum = -1;
    	}
    }
    if (sum != -1) {
       const params = {type : type, weight: weight, sum: sum};
	   response.render("results", params);
	}

	else {
		const params = {weight : weight};
	    response.render("fail", params);
	}
}