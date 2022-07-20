import { useState } from "react";

const Scheds = () => {
	const scheds = [
		{ id: 1, name: "summer schedule", today: "4", all: "20" },
		{ id: 2, name: "teacher schedule", today: "6", all: "29" },
		{ id: 3, name: "coach schedule", today: "3", all: "15" },
	];
	return (
		<div className="flex flex-col justify-center items-center text-light">
			<div className="w-full bg-dark flex justify-center items-center py-3">
				<label className="text-xl font-semibold">Schedules</label>
			</div>
			<div className="flex flex-col justify-center items-center w-full max-w-md px-3">
				{scheds.map((sched) => (
					<div
						className=" grid grid-cols-2 grid-rows-2 mt-3 py-3 w-full bg-dark  rounded h-28"
						key={sched.id}
					>
						<label className=" col-span-2 text-center mb-3 text-lg font-semibold ">
							{sched.name}
						</label>
						<label className=" text-center font-semibold">
							Today's Events{" "}
							<label className=" text-primary-100"> {sched.today}</label>
						</label>
						<label className=" text-center font-semibold ">
							<label className=" text-primary-100"> {sched.all}</label> Total
							Events
						</label>
					</div>
				))}
				<div className="flex flex-col justify-center items-center h-28 mt-3 py-3 w-full text-slate-800 rounded bg-dark">
					<input
						type="checkbox"
						id="add-button"
						className=" peer hidden"
					></input>
					<label
						className=" peer-checked:hidden text-secondary-100 text-xl font-semibold cursor-pointer"
						htmlFor="add-button"
					>
						New
					</label>
					<div className="peer-checked:flex hidden items-center w-full justify-around ">
						<button className=" bg-secondary-100 hover:bg-secondary-200 px-3 py-2 text-white bg-blue-700 font-medium rounded-lg text-sm">
							New Schedule
						</button>
						<div className="relative">
							<input type="checkbox" className=" peer hidden" id="list"></input>
							<label
								htmlFor="list"
								className=" bg-secondary-100 hover:bg-secondary-200 select-none px-3 py-2 text-white bg-blue-700 font-medium  text-sm rounded-t-md rounded-b-md peer-checked:rounded-b-none"
							>
								Duplicate
							</label>
							<div className="bg-secondary-100 absolute peer-checked:flex hidden z-10 right-0 w-40  text-white rounded flex-col justify-center items-center rounded-tr-none">
								{scheds.map((sched) => (
									<label className="py-1 cursor-pointer hover:bg-secondary-200 w-full text-center">
										{sched.name}
									</label>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Scheds;
