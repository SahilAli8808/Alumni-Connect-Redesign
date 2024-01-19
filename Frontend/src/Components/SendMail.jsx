import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

const SendEmailInfo = (props) => {
  const [countryList, setCountryList] = useState([]);
  const [selected, setSelected] = useState(null);
  const [cityListState, setCityListState] = useState([]);
  const [yesNo, setYesNo] = useState(false);
  const [selectedCity, setSelectedCity] = useState([]);

  useEffect(() => {
    // Initialization logic goes here
  }, []);

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="box">
          {props.user === 'admin' && props.colleges.length !== 0 ? (
            <div>
              <h6>College Name</h6>
              <Select
                required
                value={props.college}
                options={props.colleges}
                isMulti
                isSearchable
                placeholder="Select Colleges .."
                name="college"
                onChange={props.onChangeCollege}
              />
            </div>
          ) : null}
          <br />
          {props.yearList.length !== 0 ? (
            <div>
              <h6>Batch</h6>
              <Select
                required
                value={props.year}
                options={props.yearList}
                isMulti
                isSearchable
                placeholder="Select which Batch .."
                name="year"
                onChange={props.setYears}
              />
            </div>
          ) : null}
          <br />
          {props.BranchList.length !== 0 ? (
            <div>
              <h6>Branch</h6>
              <Select
                required
                value={props.branch}
                options={props.BranchList}
                isMulti
                isSearchable
                placeholder="Select which Branch .."
                name="branch"
                onChange={props.setBranch}
              />
            </div>
          ) : null}
          <br />
          <div>
            <h6>Country</h6>
            <Select
              value={selected}
              options={countryList}
              isSearchable
              placeholder="Select Country"
              name="location.country"
              onChange={(selectedOption) => setSelected(selectedOption)}
            />
          </div>
          <br />
          <div>
            {yesNo ? (
              <div>
                <h6>City</h6>
                <Select
                  value={selectedCity}
                  options={cityListState}
                  isMulti
                  isSearchable
                  placeholder="Select City"
                  name="location.city"
                  onChange={(selectedOption) => setSelectedCity(selectedOption)}
                />
                <br />
              </div>
            ) : null}
          </div>
          <div>
            <div className="field">
              <label className="label">Subject</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  required
                  placeholder="Subject"
                  name="subject"
                  onChange={props.onChangeInput}
                ></input>
              </div>
            </div>

            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea
                  className="textarea"
                  type="text"
                  placeholder="Message"
                  required
                  name="message"
                  onChange={props.onChangeInput}
                ></textarea>
              </div>
            </div>
          </div>

          <button className="button is-black" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.Auth_token,
    user: state.Auth_user,
  };
};

export default connect(mapStateToProps, null)(SendEmailInfo);
