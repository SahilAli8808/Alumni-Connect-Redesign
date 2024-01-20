import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const Feedback = () => {
  const [experienceRating, setExperienceRating] = useState(5); // Assuming a scale of 1 to 5
  const [agree, setAgree] = useState(null);
  const [stronglyAgree, setStronglyAgree] = useState(null);
  const [feedbackComments, setFeedbackComments] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleFeedbackSubmit = () => {
    // Handle the submission of feedback data
    console.log({
      experienceRating,
      agree,
      stronglyAgree,
      feedbackComments,
      selectedOption,
    });
  };

  const agreeDisagreeOptions = ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'];

  return (
    <div className="container-sm mx-40 p-6">
      <h2 className="text-2xl font-bold mb-4">Provide your Valueable Feedback & Suggestions</h2>

      {/* Experience Rating */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">How would you rate your overall experience with Alumni Connect?</label>
        <input
          type="range"
          min="1"
          max="5"
          value={experienceRating}
          onChange={(e) => setExperienceRating(parseInt(e.target.value))}
          className="mt-2 w-1/2 h-3 bg-black rounded-md focus:outline-none focus:shadow-outline"
          
        />
        <span className="text-lg font-semibold">{experienceRating}</span>
      </div>

      {/* Agree/Disagree Options */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">To what extent do you agree with the statements below?</label>
        {agreeDisagreeOptions.map((option) => (
          <div key={option} className="flex items-center">
            <input
              type="radio"
              id={option}
              name="agree"
              value={option}
              checked={agree === option}
              onChange={() => setAgree(option)}
              className="mr-2"
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>

      {/* Strongly Agree Options */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">For the following statements, please indicate how strongly you agree:</label>
        {agreeDisagreeOptions.map((option) => (
          <div key={option} className="flex items-center">
            <input
              type="radio"
              id={`stronglyAgree_${option}`}
              name="stronglyAgree"
              value={option}
              checked={stronglyAgree === option}
              onChange={() => setStronglyAgree(option)}
              className="mr-2"
            />
            <label htmlFor={`stronglyAgree_${option}`}>{option}</label>
          </div>
        ))}
      </div>

      {/* Additional Feedback Comments */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Do you have any additional comments or suggestions for improvement? (Optional)</label>
        <textarea
          rows="4"
          value={feedbackComments}
          onChange={(e) => setFeedbackComments(e.target.value)}
          className="mt-2 p-2 border border-gray-300 rounded-md w-full"
          placeholder="Type here..."
        />
      </div>

      {/* Meaningful Dropdown */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Please select the option that best describes your primary reason for using Alumni Connect:</label>
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="mt-2 p-2 border border-gray-300 rounded-md w-full"
        >
          <option value="">Select an option</option>
          <option value="jobSeeking">Job Seeking</option>
          <option value="networking">Networking</option>
          <option value="keepingInTouch">Keeping in touch with classmates</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        className="bg-black hover:bg-grey-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleFeedbackSubmit}
      >
      <FaCheck className="inline-block mr-2 mb-1" />
        Submit Feedback
      </button>
    </div>
  );
};

export default Feedback;
