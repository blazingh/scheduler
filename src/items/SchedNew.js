const SchedNew = ({ schedules, newSchedule }) => {
	return (
		<div className="sched-container">
			<input type="checkbox" id="add-button" className=" peer hidden" />
			<div className=" peer-checked:hidden text-xl font-semibold cursor-pointer col-span-2 row-span-2 flex justify-center items-center">
				<label className="button-style" htmlFor="add-button">
					New
				</label>
			</div>
			<div className="peer-checked:flex hidden items-center col-span-2 row-span-2 justify-around ">
				<label className="button-style" onClick={newSchedule}>
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
	);
};

export default SchedNew;
