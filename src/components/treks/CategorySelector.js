import React from 'react';
import { connect } from 'react-redux';
import { categoryOptions } from './TreksNavData';
import { fetchRecentTreks } from '../../state/treks/treks.actions';

const CategorySelector = ({ fetchRecentTreks, startLoading, stopLoading }) => {
  const handleChange = (ev) => {
    ev.preventDefault();
    const category = ev.target.value;
    fetchRecentTreks({ category: category }, startLoading, stopLoading);
  };
  return (
        <div className="trek m-2 category-selector-wrapper">
            <select name="category-selector" id="category-selector" className="caps" onChange={handleChange}>
                {categoryOptions.map((key) => (
                    <option key={key.option} className="ovepass medium-text caps" value={key.option}>{key.option}</option>
                ))}
            </select>
        </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchRecentTreks: (info, startLoading, stopLoading) => dispatch(fetchRecentTreks(info, startLoading, stopLoading))
});

export default connect(null, mapDispatchToProps)(CategorySelector);
