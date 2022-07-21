const SchedContainer = ({ sched, edit }) => {
	const today = new Date();
	const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
	return (
		<div
			className="sched-container"
			key={sched.id}
			onClick={() => {
				edit(sched.id);
			}}
		>
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
		</div>
	);
};

export default SchedContainer;
