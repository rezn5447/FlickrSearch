import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch_results, change_text } from '../actions';
class Search extends Component {
  handleChange(event) {
    let text = event.target.value;
    this.props.change_text(text);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.fetch_results(this.props.text);
  }

  render() {
    const { text, fetch_results } = this.props;
    return (
      <div className="row">
        <div className="col s12">
          Search for Flickr Images by Tag:
          <div className="input-field inline">
            <input
              onChange={this.handleChange.bind(this)}
              value={this.props.text}
              id="search"
              type="text"
              className="validate"
            />
          </div>
          <button
            onClick={this.handleClick.bind(this)}
            className="waves-effect waves-light btn"
            type="button"
            name="action"
          >
            <i className="material-icons right">search</i>Search
          </button>
        </div>
        <div className="container">
          {this.props.results.length === 0 ? 'Nothing yet' : ' mad results'}
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ search }) => {
  const { results, text } = search;
  return { results, text };
};
export default connect(mapStateToProps, { change_text, fetch_results })(Search);
