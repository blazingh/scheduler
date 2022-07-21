import { useEffect, useState } from "react";
import Editor from "./items/SchedEditor";
import SchedContainer from "./items/SchedContainer";
import SchedNew from "./items/SchedNew";

const Scheds = () => {
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
	const handleDelEdit = (delSched) => {
		let newArray = [...schedules];
		const index = schedules.findIndex((sched) => sched.id === delSched.id);
		newArray.splice(index, 1);
		if (newArray.length === 0) {
			localStorage.removeItem("data");
		}
		setSchedules(newArray);
		setEditing();
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
		<Editor
			sched={editing}
			cancelEdit={handleCancelEdit}
			saveEdit={handleSaveEdit}
			delEdit={handleDelEdit}
		/>
	) : (
		<div className="flex flex-col justify-center items-center text-light">
			<div className="w-full bg-dark flex justify-center items-center py-3">
				<label className="text-xl font-semibold">Schedules</label>
			</div>
			<div className="flex flex-col justify-center items-center w-full max-w-md px-3">
				{schedules.map((sched) => (
					<SchedContainer sched={sched} edit={handleEdit} key={sched.id} />
				))}
				<SchedNew schedules={schedules} newSchedule={handleNewSched} />
			</div>
		</div>
	);
};

export default Scheds;
