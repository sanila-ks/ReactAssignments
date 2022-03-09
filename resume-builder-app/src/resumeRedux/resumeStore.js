
import { createStore } from 'redux';
import ResumeReducer from './resumeReducer';

const ResumeStore = createStore(
    ResumeReducer
)

export default ResumeStore
