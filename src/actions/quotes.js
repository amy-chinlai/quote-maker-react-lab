// TODO: Create action creators as defined in tests
export const addQuote = quote => {
    return {
      type: 'ADD_QUOTE',
      quoteID: ''
    }
  }
  
  export const removeQuote = quoteID => {
    return {
      type: 'REMOVE_QUOTE',
      quoteID: ''
    }
  }
  
  export const upvoteQuote = quoteID => {
    return {
      type: 'UPVOTE_QUOTE',
      quoteID: ''
    }
  }
  
  export const downvoteQuote = quoteID => {
    return {
      type: 'DOWNVOTE_QUOTE',
      quoteID: ''
    }
  }