import { useEffect, useState } from "react";
import SchedEditor from "./items/SchedEditor";
import SchedContainer from "./items/SchedContainer";
import NewSchedContainer from "./items/NewSchedContainer";

const Schedules = () => {
	const [schedules, setSchedules] = useState([]);
	const [editing, setEditing] = useState();
	const handleNewSched = (dup) => {
		let newId = 1;
		while (schedules.findIndex((sched) => sched.id === newId) != -1) {
			newId++;
		}
		if (dup) {
			console.log(dup);
			let dupSched = { ...dup };
			dupSched.name += " duplicate";
			dupSched.id = newId;
			setSchedules((current) => [...current, dupSched]);
			return;
		}
		setSchedules((current) => [
			...current,
			{ id: newId, name: `New Schedule ${newId}`, events: [] },
		]);
	};
	const handleEdit = (id) => {
		setEditing(schedules.find((sched) => sched.id === id));
	};
	const handleCancelEdit = () => {
		setEditing();
	};
	const handleSaveEdit = (newSched) => {
		let newArray = [...schedules];
		const index = schedules.findIndex((sched) => sched.id === newSched.id);
		newArray[index] = newSched;
		setSchedules(newArray);
		setEditing();
	};
	const handleDelEdit = (id) => {
		let newArray = [...schedules];
		const index = schedules.findIndex((sched) => sched.id === id);
		newArray.splice(index, 1);
		if (newArray.length === 0) {
			localStorage.removeItem("data");
		}
		setSchedules(newArray);
	};

	useEffect(() => {
		if (schedules.length > 0) {
			console.log(schedules);
			localStorage.setItem("data", JSON.stringify(schedules));
		}
	}, [schedules]);
	useEffect(() => {
		const data = localStorage.getItem("data");
		data ? setSchedules(JSON.parse(data)) : setSchedules([]);
	}, []);
	return editing ? (
		<SchedEditor
			sched={editing}
			cancelEdit={handleCancelEdit}
			saveEdit={handleSaveEdit}
		/>
	) : (
		<div className="flex flex-col justify-center items-center text-light">
			<div className="w-full bg-dark flex justify-center items-center py-3">
				<label className="text-xl font-semibold">Schedules</label>
			</div>
			<div className="flex flex-col justify-center items-center w-full max-w-md px-3">
				{schedules.map((sched) => (
					<SchedContainer
						sched={sched}
						edit={handleEdit}
						delSched={handleDelEdit}
						key={sched.id}
					/>
				))}
				<NewSchedContainer schedules={schedules} newSchedule={handleNewSched} />
			</div>
		</div>
	);
};

export default Schedules;
