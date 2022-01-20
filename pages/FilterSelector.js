import React from 'react';
import formatGroupLabel from './new/formatGroupLabel';
import Select from 'react-select'

const FilterSelector = ({AllEvents, selectedEvents, events, setEvents, searchQuery, setSearchQuery}) => {
    return (
        <div className = "filter-selector">
            <input 
                placeholder = "Search..."
                onChange = {e => setSearchQuery(e.target.value)}
                value = {searchQuery}/>

            <Select
                instanceId={1}
                isMulti
                defaultValue={selectedEvents}
                options={AllEvents}
                formatGroupLabel={formatGroupLabel}
                onChange = {setEvents}/>

        </div>

    )
}

export default FilterSelector