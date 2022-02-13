import React from 'react'; 

export const Form = ({ onSubmit, onFileChange, onFileUpload }) => {

    return (
        <form>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input className="form-control" id="name" />
            </div>
            <div className="form-group">
                <input type="file"/>
                <button>
                    Upload!
                </button>
            </div>
            <div className="form-group">
                <button className="form-control btn btn-primary" type="submit">
                    Submit
                </button>
            </div>
        </form>
    );
};
export default Form;