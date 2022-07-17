let sheds = document.getElementById("form");
let shed_a = 0;
let shed_b = 0;
let shed_c = 0;
let shed_d = 0;
let total = 0;
let price = 45;

// An object to hold months of an year and their days.

const months = [
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
];

// Functions.
const handleShedsFormSubmit = (event) => {
	// To prevent refreshing the page whenever the button is clicked.
	event.preventDefault();
	// Get the values from the form.
	// shed a.
	shed_a = parseInt(document.getElementById("shed_a").value);
	// shed b.
	shed_b = parseInt(document.getElementById("shed_b").value);
	// shed c.
	shed_c = parseInt(document.getElementById("shed_c").value);
	// shed d.
	shed_d = parseInt(document.getElementById("shed_d").value);

	// error handling.
	// checking if value of each shed is set.
	// if (!shed_a) {
	// 	document.getElementById("shed_a_error").innerHTML =
	// 		"Value for Shed A required";
	// 	return;
	// } else {
	// 	document.getElementById("shed_a_error").innerHTML = "";
	// }

	// if (!shed_b) {
	// 	document.getElementById("shed_b_error").innerHTML =
	// 		"Value for Shed B required";
	// 	return;
	// } else {
	// 	document.getElementById("shed_b_error").innerHTML = "";
	// }

	// if (!shed_c) {
	// 	document.getElementById("shed_c_error").innerHTML =
	// 		"Value for Shed C required";
	// 	return;
	// } else {
	// 	document.getElementById("shed_c_error").innerHTML = "";
	// }

	// if (!shed_d) {
	// 	document.getElementById("shed_d_error").innerHTML =
	// 		"Value for Shed D required";
	// 	return;
	// } else {
	// 	document.getElementById("shed_d_error").innerHTML = "";
	// }

	// getting the totals.
	total = shed_a + shed_b + shed_c + shed_d;

	// reset the values.
	document.getElementById("shed_a").value = "";
	document.getElementById("shed_b").value = "";
	document.getElementById("shed_c").value = "";
	document.getElementById("shed_d").value = "";

	// hide the form.
	document.getElementById("form").style.display = "none";

	// show the user the report.
	document.getElementById(
		"shed_a_report"
	).innerText = `Value for Shed A is ${shed_a}`;
	document.getElementById(
		"shed_b_report"
	).innerText = `Value for Shed B is ${shed_b}`;
	document.getElementById(
		"shed_c_report"
	).innerText = `Value for Shed C is ${shed_c}`;
	document.getElementById(
		"shed_d_report"
	).innerText = `Value for Shed D is ${shed_d}`;

	document.getElementById(
		"total_shed_report"
	).innerText = `The total number of litres is ${total}`;

	// show the income report actions.
	document.getElementById("income-reports-actions").style.display = "block";
};

function totalIncome(price, time) {
	// total income in time...changed to string
	let result = (total * time * price).toLocaleString();
	return result;
}

// Event listeners.

// When form is clicked.
sheds.addEventListener("submit", handleShedsFormSubmit);

// report action buttons.
const get_weekly_income = document.getElementById("get_weekly_income");
const get_total_yearly_income = document.getElementById(
	"get_total_yearly_income"
);
const get_yearly_income = document.getElementById("get_yearly_income");

// When weekly button is clicked.
get_weekly_income.addEventListener("click", () => {
	let result = totalIncome(price, 7);
	document.getElementById("list-monthly-incomes").innerHTML = ""; // remove any monthly incomes listed.
	return (document.getElementById(
		"income-report"
	).innerText = `Your weekly income is KES ${result}`);
});

// when total yearly button is clicked.
get_total_yearly_income.addEventListener("click", () => {
	let result = totalIncome(price, 366);
	document.getElementById("list-monthly-incomes").innerHTML = ""; // remove any monthly incomes listed.
	return (document.getElementById(
		"income-report"
	).innerText = `Your annual income is KES ${result}`);
});

// when yearly button is clicked.
get_yearly_income.addEventListener("click", () => {
	document.getElementById("income-report").innerHTML = ""; // remove any income listed
	// get the unordered list item.
	let parent_list_element = document.getElementById("list-monthly-incomes");
	// we loop through the months.
	for (let month of months) {
		let result = totalIncome(price, month.days);
		let list_item = document.createElement("li");
		list_item.innerHTML = `Your ${month.name} income is KES ${result}`;
		parent_list_element.append(list_item);
	}
	return;
});

function changePrice(newPrice) {
	price = newPrice;
}
