import React from 'react';
import formatGroupLabel from './new/formatGroupLabel';
import Select from 'react-select'

const FilterSelector = ({selectedEvents, events, setEvents}) => {
    const PDAOEvents = events.map(e => {
        return {value: e, label: e}
    })


    return (
        <Select
            isMulti
            defaultValue={selectedEvents}
            options={PDAOEvents}
            formatGroupLabel={formatGroupLabel}
            onChange = {setEvents}
        />
    )
}

export default FilterSelector