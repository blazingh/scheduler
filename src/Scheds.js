import { useEffect, useState } from "react";

const Scheds = () => {
	const [schedules, setSchedules] = useState([]);
	const handleNewSched = () => {
		const schedId = schedules.length + 1;
		setSchedules((current) => [
			...current,
			{ id: schedId, name: `New Schedule ${schedId}`, events: [] },
		]);
	};

	useEffect(() => {
		if (schedules.length > 0) {
			localStorage.setItem("data", JSON.stringify(schedules));
		}
	}, [schedules]);
	useEffect(() => {
		setSchedules(JSON.parse(localStorage.getItem("data")));
	}, []);
	return (
		<div className="flex flex-col justify-center items-center text-light">
			<div className="w-full bg-dark flex justify-center items-center py-3">
				<label className="text-xl font-semibold">Schedules</label>
			</div>
			<div className="flex flex-col justify-center items-center w-full max-w-md px-3">
				{schedules.map((sched) => (
					<div className="sched-container" key={sched.id}>
						<label className=" col-span-2 text-center mb-3 text-lg font-semibold ">
							{sched.name}
						</label>
						<label className=" text-center font-semibold">
							Today's Events{" "}
							<label className=" text-primary-100">{sched.events.length}</label>
						</label>
						<label className=" text-center font-semibold ">
							<label className=" text-primary-100">{sched.events.length}</label>{" "}
							Total Events
						</label>
					</div>
				))}
				<div className="sched-container">
					<input
						type="checkbox"
						id="add-button"
						className=" peer hidden"
					></input>
					<div className=" peer-checked:hidden text-xl font-semibold cursor-pointer col-span-2 row-span-2 flex justify-center items-center">
						<label className="button-style" htmlFor="add-button">
							New
						</label>
					</div>
					<div className="peer-checked:flex hidden items-center col-span-2 row-span-2 justify-around ">
						<label className="button-style" onClick={handleNewSched}>
							New Schedule
						</label>
						<div className="flex relative">
							<label
								htmlFor="list"
								className="button-style peer-checked:rounded-b-none"
							>
								Duplicate
							</label>
							<input type="checkbox" className=" peer hidden" id="list" />
							<div className="bg-secondary-100 absolute peer-checked:flex hidden z-10 right-0 top-7 w-40  text-white rounded flex-col justify-center items-center rounded-tr-none">
								{schedules.map((sched) => (
									<label
										key={sched.id}
										className="py-1 cursor-pointer hover:bg-secondary-200 w-full text-center"
									>
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
