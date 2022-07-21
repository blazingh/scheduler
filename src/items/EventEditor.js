import arrowUp from "../media/up.png";
import arrowDown from "../media/down.png";
const EventEditor = ({ eventEditing, eventChange, eventSave, eventDel }) => {
	const changeHour = (delta) => {
		let newTime = { ...eventEditing.time };
		let newHour = parseInt(newTime.hour);
		newHour += delta;
		if (newHour >= 24) {
			newHour = 0;
		}
		if (newHour <= -1) {
			newHour = 23;
		}
		newHour = newHour.toString();
		newHour.length === 1 && (newHour = "0" + newHour);
		newTime.hour = newHour;
		eventChange("time", newTime);
	};

	const changeMin = (delta) => {
		let newTime = { ...eventEditing.time };
		let newMin = parseInt(newTime.min);
		newMin += delta * 5;
		if (newMin >= 59) {
			newMin = 0;
		}
		if (newMin <= -1) {
			newMin = 55;
		}
		newMin = newMin.toString();
		newMin.length === 1 && (newMin = "0" + newMin);
		newTime.min = newMin;
		eventChange("time", newTime);
	};
	return (
		<div className="flex items-center justify-between w-full flex-wrap">
			<div className="flex flex-col w-1/2">
				<input
					defaultValue={eventEditing?.name}
					placeholder="event name"
					className=" bg-transparent px-1 w-full text-xl mb-4"
					onChange={(e) => {
						eventChange("name", e.target.value);
					}}
				/>
				<input
					defaultValue={eventEditing?.note}
					placeholder="short note"
					className=" bg-transparent px-1 text-base"
					onChange={(e) => {
						eventChange("note", e.target.value);
					}}
				/>
			</div>
			<div className="flex flex-col justify-center items-center ">
				<div className=" flex justify-center items-center">
					<img
						src={arrowUp}
						className="time-button"
						onClick={() => {
							changeHour(1);
						}}
					/>
					<img
						src={arrowUp}
						className="time-button"
						onClick={() => {
							changeMin(1);
						}}
					/>
				</div>
				<label className="text-xl col-span-2flex justify-center items-center">
					{eventEditing?.time.hour} : {eventEditing?.time.min}
				</label>
				<div className=" flex justify-center items-center">
					<img
						src={arrowDown}
						className="time-button"
						onClick={() => {
							changeHour(-1);
						}}
					/>
					<img
						src={arrowDown}
						className="time-button"
						onClick={() => {
							changeMin(-1);
						}}
					/>
				</div>
			</div>
			<div className="w-full flex items-center justify-between mt-4 text-secondary-100">
				<label className=" hover:underline" onClick={eventDel}>
					delete
				</label>
				<label className=" hover:underline" onClick={eventSave}>
					save
				</label>
			</div>
		</div>
	);
};

export default EventEditor;
