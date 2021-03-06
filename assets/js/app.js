// variables, arrays and objects declaration
let shed_a = 0;
let shed_b = 0;
let shed_c = 0;
let shed_d = 0;
let total = 0;
let price = 45;
const sheds = document.getElementById("form");

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
const handleShedsFormSubmit = (event) => {
	// To prevent refreshing the page whenever the button is clicked.
	event.preventDefault();

	shed_a = parseInt(document.getElementById("shed_a").value);
	shed_b = parseInt(document.getElementById("shed_b").value);
	shed_c = parseInt(document.getElementById("shed_c").value);
	shed_d = parseInt(document.getElementById("shed_d").value);

	// error handling.
	// checking if value of each shed is set.
	if (!shed_a) {
		document.getElementById("shed_a_error").innerHTML =
			"Value for Shed A required";
		return;
	}
	// else {
	// 	document.getElementById("shed_a_error").innerHTML = "";
	// }

	if (!shed_b) {
		document.getElementById("shed_b_error").innerHTML =
			"Value for Shed B required";
		return;
	}
	// else {
	// 	document.getElementById("shed_b_error").innerHTML = "";
	// }

	if (!shed_c) {
		document.getElementById("shed_c_error").innerHTML =
			"Value for Shed C required";
		return;
	}
	//  else {
	// 	document.getElementById("shed_c_error").innerHTML = "";
	// }

	if (!shed_d) {
		document.getElementById("shed_d_error").innerHTML =
			"Value for Shed D required";
		return;
	}
	// else {
	// 	document.getElementById("shed_d_error").innerHTML = "";
	// }

	total = shed_a + shed_b + shed_c + shed_d;
	// after getting the inputs we need to reset the values
	document.getElementById(shed_a).value = "";
	document.getElementById(shed_a).value = "";
	document.getElementById(shed_a).value = "";
	document.getElementById(shed_a).value = "";

	// Hiding the form to display reports
	document.getElementById("form").style.display = "none";

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

	document.getElementById(
		"total_shed_report"
	).innerText = `The total number of litres is ${total}`;

	// show the income report actions.
	document.getElementById("income-reports-actions").style.display = "block";
};

function totalIncome(price, time) {
	let result = (total * time * price).toLocaleString();
	return result;
}

// Event listeners.

// When form is clicked.

sheds.addEventListener("submit", handleShedsFormSubmit);

// report action buttons
const get_weekly_income = document.getElementById("get_weekly_income");
const get_total_yearly_income = document.getElementById(
	"get_total_yearly_income"
);
const get_yearly_income = document.getElementById("get_yearly_income");

// another event listener
// when the total yearly button is clicked
get_total_yearly_income.addEventListener("click", () => {
	let result = totalIncome(price, 366);
	return (document.getElementById(
		"income-report"
	).innerText = `Your annual income is KES ${result}`);
});

// when the yearly button is clicked
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
