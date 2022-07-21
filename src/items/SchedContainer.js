import { useState } from "react";

const SchedContainer = ({ sched, edit, delSched }) => {
	const today = new Date();
	const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
	const [confirmDel, setConfirmDel] = useState();
	return (
		<div className="sched-container group" key={sched.id}>
			<label className=" col-span-2 text-center mb-3 text-lg font-semibold ">
				{sched.name}
			</label>
			<label className=" text-center font-semibold">
				Today's Events{" "}
				<label className=" text-primary-100">
					{
						sched.events?.filter(
							(item) => item.day === days[today.getDay() - 1],
						).length
					}
				</label>
			</label>
			<label className=" text-center font-semibold ">
				<label className=" text-primary-100">{sched.events?.length}</label>{" "}
				Total Events
			</label>
			<label className=" hidden text-red-500 group-hover:block text-center">
				{!confirmDel ? (
					<label
						className=" text-red-500 hover:underline"
						onClick={() => {
							setConfirmDel(true);
						}}
					>
						delete
					</label>
				) : (
					<>
						<label
							className=" mr-2 text-middle hover:underline"
							onClick={() => {
								setConfirmDel(false);
							}}
						>
							cancel
						</label>
						<label
							className="text-red-500 hover:underline"
							onClick={() => {
								delSched(sched.id);
							}}
						>
							confirm
						</label>
					</>
				)}
			</label>
			<label
				className="hidden text-dark group-hover:text-primary-200 group-hover:block hover:underline text-center"
				onClick={() => {
					edit(sched.id);
				}}
			>
				edit
			</label>
		</div>
	);
};

export default SchedContainer;
