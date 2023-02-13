// import { add, hello } from "./utils";
import "./style.css";
import "./header.css";
import logo1 from "./images/karina.jpeg";
// import logo2 from "./images/karina2.jpeg";
import List from "./List";

// const text = hello("<h1>나는 유영빈!!</h1>");
// const num = add(1, 2);
const img = `<img src="${logo1}" alt="karina">`;
// const img2 = `<img src="${logo2}" alt="karina2">`;

const users = [
	{
		id: 1,
		name: "카리나",
	},
	{
		id: 2,
		name: "민지",
	},
	{
		id: 3,
		name: "안유진",
	},
	{
		id: 4,
		name: "장원영",
	},
	{
		id: 5,
		name: "윈터",
	},
];

document.getElementById("root").appendChild(List({ userList: users }));
