import { useEffect, useState } from "react";
import EventEditor from "./EventEditor";

const Editor = ({ sched, cancelEdit, saveEdit, delEdit }) => {
	const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
	const [selectedDay, setSelectedDay] = useState("Mon");
	const [SchedEditing, setSchedEditing] = useState(sched);
	const [eventEditing, setEventEditing] = useState();

	const handleNameChange = (newName) => {
		let newSched = { ...SchedEditing };
		newSched.name = newName;
		setSchedEditing(newSched);
	};

	const handleNewEvent = () => {
		let newId = 1;
		while (SchedEditing.events.findIndex((event) => event.id === newId) != -1) {
			newId++;
		}
		setEventEditing({
			id: newId,
			day: selectedDay,
			name: "",
			note: "",
			time: { hour: "10", min: "30" },
		});
	};

	const handleEventChange = (item, value) => {
		let newObj = { ...eventEditing };
		newObj[item] = value;
		setEventEditing(newObj);
	};

	const handleEventDel = () => {
		let newObj = { ...SchedEditing };
		const index = newObj.events.findIndex(
			(event) => event.id === eventEditing.id,
		);
		newObj.events.splice(index, 1);
		setSchedEditing(newObj);
		setEventEditing();
	};

	const handleEventSave = async () => {
		let newObj = { ...SchedEditing };
		const index = newObj.events.findIndex(
			(event) => event.id === eventEditing.id,
		);
		index === -1
			? newObj.events.push(eventEditing)
			: (newObj.events[index] = eventEditing);
		await newObj.events.sort((a, b) =>
			parseInt(a.time.hour + a.time.min) > parseInt(b.time.hour + b.time.min)
				? 1
				: -1,
		);
		setSchedEditing(newObj);
		setEventEditing();
	};

	return (
		<div className="flex flex-col justify-center items-center text-light">
			<div className="w-full bg-dark flex justify-center items-center py-3 z-20">
				<label className=" absolute left-5" onClick={cancelEdit}>
					cancel
				</label>
				<label
					className=" absolute right-5"
					onClick={() => {
						saveEdit(SchedEditing);
					}}
				>
					save
				</label>
				<label
					className=" absolute right-20"
					onClick={() => {
						delEdit(SchedEditing);
					}}
				>
					delete
				</label>
				<input
					className="text-xl font-semibold text-center bg-dark"
					defaultValue={SchedEditing.name}
					onChange={(e) => {
						handleNameChange(e.target.value);
					}}
				/>
			</div>
			<div className="flex justify-around w-full">
				{days.map((day) => (
					<label
						key={day}
						className={`peer w-full text-center py-2 select-none ${
							selectedDay === day
								? " bg-secondary-100 px-5 out-inline-shadow z-10"
								: " bg-middle in-b-shadow"
						}`}
						onClick={() => {
							setEventEditing();
							setSelectedDay(day);
						}}
					>
						{day}
					</label>
				))}
			</div>

			<div className="w-full z-20 bg-light2 flex flex-col justify-center items-center px-4 pt-2">
				{SchedEditing.events.map((event) =>
					eventEditing?.id === event.id
						? eventEditing.day === selectedDay && (
								<div className="w-full p-4 flex justify-center items-center bg-dark rounded-md my-1  max-w-md">
									<EventEditor
										key={event.id}
										eventEditing={eventEditing}
										eventChange={handleEventChange}
										eventSave={handleEventSave}
										eventDel={handleEventDel}
									/>
								</div>
						  )
						: event.day === selectedDay && (
								<div
									key={event.id}
									className="w-full p-4 flex justify-center items-center bg-dark rounded-md my-1 max-w-md"
									onClick={() => {
										console.log(event.id);
										setEventEditing(event);
									}}
								>
									<div className="flex items-center justify-between w-full flex-wrap">
										<div className="flex flex-col">
											<label className=" font-medium text-xl">
												{event.name}
											</label>
											<label className="  text-sm text-gray-400">
												{event.note}
											</label>
										</div>
										<div>
											{event.time.hour}:{event.time.min}
										</div>
									</div>
								</div>
						  ),
				)}
				<div className="w-full p-4 flex justify-center items-center bg-dark rounded-md my-1  max-w-md">
					{eventEditing ? (
						SchedEditing.events.findIndex(
							(event) => event.id === eventEditing.id,
						) === -1 ? (
							<EventEditor
								eventEditing={eventEditing}
								eventChange={handleEventChange}
								eventSave={handleEventSave}
								eventDel={handleEventDel}
							/>
						) : (
							<label>finish editing before adding a new event</label>
						)
					) : (
						<label className="button-style" onClick={handleNewEvent}>
							add
						</label>
					)}
				</div>
			</div>
		</div>
	);
};

export default Editor;
