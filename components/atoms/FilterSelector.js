import React from "react";
import formatGroupLabel from "../../pages/new/formatGroupLabel";
import Select from "react-select";

const customStyles = {
	valueContainer: (provided, state) => ({
		...provided,
		color: "white",
		backgroundColor: "#303134",
		// fontSize: "larger",
	}),
	container: (provided, state) => ({
		...provided,
		fontSize: "larger",
	}),
	indicatorsContainer: (provided, state) => ({
		...provided,
		backgroundColor: "#303134",
		// fontSize: "larger",
	}),
	multiValue: (provided, state) => ({
		...provided,
		color: "light grey",
		backgroundColor: "grey",
		padding: "2px 5px",
		// margin: "5px, 10px",
		// fontSize: "larger",
	}),
	multiValueLabel: (provided, state) => ({
		...provided,
		color: "white",
	}),
	menuList: (provided, state) => ({
		...provided,
		backgroundColor: state.isSelected ? "gray" : "#303134",
		color: "gray",
	}),
};

const FilterSelector = ({
	AllEvents,
	selectedEvents,
	events,
	setEvents,
	searchQuery,
	setSearchQuery,
}) => {
	return (
		<div className="filter-selector">
			<input
				type="text"
				placeholder="Search..."
				onChange={e => setSearchQuery(e.target.value)}
				value={searchQuery}
			/>

			<Select
				className=" tablet:flex hidden "
				instanceId={1}
				isMulti
				defaultValue={selectedEvents}
				options={AllEvents}
				formatGroupLabel={formatGroupLabel}
				onChange={setEvents}
				styles={customStyles}
			/>
		</div>
	);
};

export default FilterSelector;
