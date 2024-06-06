import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  // const onInputChange = (event) => {
  //   setTerm(event.target.value);
  // };

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
      <div className="search-bar ui segment" style={{backgroundColor: 'lightgray' }}>
        <form className="ui form" onSubmit={onSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              onChange={(event) => setTerm(event.target.value)}
              value={term}
            />
          </div>
        </form>
      </div>
    );

}

// class SearchBar extends React.Component {
  // state = { term: "" };

  // onInputChange = (event) => {
  //   this.setState({ term: event.target.value });
  // };

  // onFormSubmit = (event) => {
  //   event.preventDefault();
  //   this.props.onFormSubmit(this.state.term);
  // };

  // render() {
    // return (
    //   <div className="search-bar ui segment">
    //     <form className="ui form" onSubmit={this.onFormSubmit}>
    //       <div className="field">
    //         <label>Video Search</label>
    //         <input
    //           type="text"
    //           onChange={this.onInputChange}
    //           value={this.state.term}
    //         />
    //       </div>
    //     </form>
    //   </div>
    // );
//   }
// }

export default SearchBar;
