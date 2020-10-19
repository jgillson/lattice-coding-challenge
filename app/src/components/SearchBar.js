import React, {useState} from 'react'

import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Search from '@material-ui/icons/Search'

const SearchBar = (props) => {
    let [searchValue, setSearchValue] = useState("")

    return (
        <div>
            <TextField
                style={{width: 500}}
                label='Search'
                onChange={event => {
                    event.preventDefault()
                    searchValue = event.target.value
                    setSearchValue(searchValue)
                    props.onSearch(searchValue)
                }}
                value={searchValue}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search/>
                        </InputAdornment>
                    ),
                    root: {
                        '.MuiInputAdornment-root': {
                            color: 'white'
                        }
                    }
                }}
            />
        </div>
    )
}

export default SearchBar
