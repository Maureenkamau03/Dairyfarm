// variables, arrays and objects declaration
let shed_a = 0;
let shed_b = 0;
let shed_c = 0;
let shed_d = 0;
let total = 0;
let price = 45;

let months = [
	{
		name: "January",
		days: 31,
	},
	{
		name: "February",
		days: 29,
	},
	{
		name: "March",
		days: 31,
	},
	{
		name: "April",
		days: 30,
	},
	{
		name: "May",
		days: 31,
	},
	{
		name: "June",
		days: 30,
	},
	{
		name: "July",
		days: 31,
	},
	{
		name: "August",
		days: 31,
	},
	{
		name: "September",
		days: 30,
	},
	{
		name: "October",
		days: 31,
	},
	{
		name: "November",
		days: 30,
	},
	{
		name: "December",
		days: 31,
	},
	{
		name: "July",
		days: 31,
	},
];

// functions
// total productions function which is called upon clickicking the form to display production per shed resets the values hides the form afterwards
const totalproduction = (event) => {
	shed_a = parseInt(document.getElementById("shed_a").value);
	shed_b = parseInt(document.getElementById("shed_b").value);
	shed_c = parseInt(document.getElementById("shed_c").value);
	shed_d = parseInt(document.getElementById("shed_d").value);

	// getting the totals.
	total = shed_a + shed_b + shed_c + shed_d;
	// after getting the inputs we need to reset the values
	document.getElementById(shed_a).value = "";
	document.getElementById(shed_a).value = "";
	document.getElementById(shed_a).value = "";
	document.getElementById(shed_a).value = "";

	// Hiding the form to display reports
	document.getElementById("shed_form").style.display = "none";

	// show daily report
	document.getElementById(
		"shed_a_report"
	).innerText = `Your production in Shed A is ${shed_a}`;
	document.getElementById(
		"shed_b_report"
	).innerText = `Your production in Shed B is ${shed_b}`;
	document.getElementById(
		"shed_c_report"
	).innerText = `Your production in Shed C is ${shed_c}`;
	document.getElementById(
		"shed_D_report"
	).innerText = `Your production in Shed D is ${shed_d}`;
};
