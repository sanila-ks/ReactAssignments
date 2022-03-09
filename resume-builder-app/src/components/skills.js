import { useState, useEffect, useRef } from "react";
import './styleComponent/skills.css'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router'
import { AddSkillsAction } from '../resumeRedux/resumeAction'

function Skills(props) {

    let navigate = useNavigate();
    console.log('Inside skill.....', props.skills)
    const HandleFormSubmit = (e) => {
        e.preventDefault();
        if ((props.skills).length !== 0) {
            navigate('/resume');
        }
        else {
            document.getElementById('skills').placeholder = 'Enter skills....'
        }
    }

    const HandleButtonClick = () => {
        props.AddSkillsAction();
        setValue('')
    }

    const  options = ["C", "C++", "Java","HTML","CSS","Vue.js","SQL","JavaScript","React js","Angular js", "Python","R","Ruby"]
    const [value, setValue] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const suggestions = options.filter(option => option.toLowerCase().includes(value.toLowerCase()))
    
    const autocompleteRef = useRef();

    useEffect(() => {
        const handleClick = (event) => {
            if (autocompleteRef.current && !autocompleteRef.current.contains(event.target)) {
                setShowSuggestions(false)
            }
        };
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick)
        }
    }, [])

    const handleChange = event => {
        setShowSuggestions(true);
        setValue(event.target.value);
        
    }

    const handleSuggestionClick = (suggetion) => {
        setValue(suggetion);
        setShowSuggestions(false);
    }

    return (
        <div className='formContainer' onSubmit={HandleFormSubmit}>
            <form className="sform" autoComplete="off" >
                <div className='d-flex flex-row justify-content-center '>
                    <h3>Skills</h3>
                </div>
                <div className='main'>
                    <div>
                        <label>Technical skills</label>
                    </div>
                    <div className="autocomplete" ref={autocompleteRef}>
                        <input
                            value={value}
                            onChange={handleChange}
                            placeholder="Search"
                            id="skills"
                        />
                        {showSuggestions && (
                            <ul className="suggestions">
                                {suggestions.map(suggestion => (
                                    <li onClick={() => handleSuggestionClick(suggestion)} key={suggestion}>
                                        {suggestion}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    {/* <div>
                      <input type="text" id='skills' /> 
                        
                    </div> */}
                </div>
                <div>
                    <ul className='skill-list'>
                        <h4><u>Skills</u></h4>
                        {props.skills.map((item, i = 0) => {
                            return (
                                <li key={i + 1}>{item.skill}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className='btnS'>
                    <button className="btn btn-primary align-self-center"
                        type='button'
                        onClick={HandleButtonClick}>ADD</button>
                    <button
                        className="btn btn-primary align-self-center"
                        type="submit"
                        id='sbtn'
                    >Submit</button>
                </div>

            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        skills: state.skills
    }
}

const mapDispatchToProps = dispatch => {
    return {
        AddSkillsAction: () => {
            const skills = {
                skill: document.getElementById('skills').value,
            }
            dispatch(AddSkillsAction(skills))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Skills)