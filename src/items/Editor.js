import { useState } from "react";

const Editor = ({ sched, cancelEdit, saveEdit, delEdit }) => {
	const [edit, setEdit] = useState(sched);
	const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
	const [selectedDay, setSelectedDay] = useState("Mon");
	const handleNameChange = (newName) => {
		let newSched = { ...edit };
		newSched.name = newName;
		setEdit(newSched);
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
						saveEdit(edit);
					}}
				>
					save
				</label>
				<label
					className=" absolute right-20"
					onClick={() => {
						delEdit(edit);
					}}
				>
					delete
				</label>
				<input
					className="text-xl font-semibold text-center bg-dark"
					defaultValue={edit.name}
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
							setSelectedDay(day);
						}}
					>
						{day}
					</label>
				))}
			</div>

			<div className="w-full z-20 bg-light2 flex flex-col justify-center items-center px-4">
				<div className="w-full h-20 flex justify-center items-center bg-dark rounded-md my-1">
					add
				</div>
			</div>
		</div>
	);
};

export default Editor;
