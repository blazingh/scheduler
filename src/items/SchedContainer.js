const SchedContainer = ({ sched, edit }) => {
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
				<label className=" text-primary-100">{sched.events.length}</label>
			</label>
			<label className=" text-center font-semibold ">
				<label className=" text-primary-100">{sched.events.length}</label> Total
				Events
			</label>
		</div>
	);
};

export default SchedContainer;
