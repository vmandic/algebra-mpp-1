# 11. Module 2 Assessment

Consider the following code for the next 5 questions:

```JavaScript
//action creators

const actionCreator1 = (val) => {
  return {
    type: 'ACTION_1',
    val: val
  }
}

const actionCreator2 = (name,id) => {
  return {
    type: 'ACTION_2',
    options: {name:name,id:id}
  }
}

const actionCreator3 = (letter) => {
  return {
    type: 'ACTION_3',
    letter:letter
  }
}

//reducers
const options = (state = {name:null,id:null}, action ) => {
  switch(action.type){
    case 'ACTION_2':
      return action.options
    default:
      return state
  }  
}

const values = (state = ['a','b','c'], action ) => {
  switch(action.type){
    case 'ACTION_1':
      return [action.val, ...state]
    case 'ACTION_3':
      return state.map( (val) => val.toUpperCase())
    default:
      return state
  }  
}

const reducer = combineReducers({options,values})


//store
var store = createStore(reducer)
```

11.a Consider the following code for an action creator for ACTION_4:

```JavaScript
const actionCreator4 = (index,replace) => {
  return {
    type: 'ACTION_4',
    payload: {index:index, replace:replace}
  }
}
```

What should be added to the values reducer so that ACTION_4 will update the targeted index with the value of replace. See choices above.

Choice A:

```JavaScript
    case 'ACTION_4':
      state[action.payload.index] = action.payload.replace
      return state
```

Choice B:

```JavaScript
    case 'ACTION_4':
      var stateCopy = state.slice()
      stateCopy[action.payload.index] = action.payload.replace
      return stateCopy
```

Choice C:

```JavaScript
    case 'ACTION_4':
      return [...state.slice(0,action.payload.index),action.payload.replace,...state.slice(action.payload.index + 1)]
```

Choice D:

```JavaScript
    case 'ACTION_4':
      return [state.slice(action.payload.index),action.payload.replace,state.slice(action.payload.index + 1)]
```

What should be added to the values reducer so that ACTION_4 will update the targeted index with the value of replace. See choices above.

11bNew reducer code for ACTION_3:

```JavaScript
    //look up the filter function if you are unfamiliar with it
    case 'ACTION_3':
      return state.filter( (val) => val =! action.letter)
```

Assuming the program was just launched, what happens if we dispatch store.dispatch(actionCreator3('b') with the modified reducer code above?

Choice A:

```JavaScript
{
  options: { name:null, id:null},
  values: ['A','B','C']
}
```

Choice B:

```JavaScript
{
  options: { name:null, id:null},
  values: ['b','a','b','c']
}
```

Choice C:

```JavaScript
{
  options: { name:null, id:null},
  values: ['b']
}
```

Choice D:

```JavaScript
{
  options: { name:null, id:null},
  values: ['a','c']
}
```