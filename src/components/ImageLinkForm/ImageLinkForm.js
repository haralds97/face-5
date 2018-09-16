import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return(
		<div>
			<div className="f3 center white">
				<p>
					This Magic Brain will  faces in pictures
				</p>
			</div>		
			<div className="center">
				<div className="form center pa4 br2 shadow-5">
					<input className="f4 pa2 w-70 center" type="text" onChange={onInputChange}/>
					<button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onButtonSubmit}>Detect</button>
				</div>
			</div>
		</div>
	)
}

export default ImageLinkForm;