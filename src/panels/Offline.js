import React from 'react';
import './Persik.css';
import Icon56ErrorOutline from '@vkontakte/icons/dist/56/error_outline';
import {Group, Panel, Placeholder, Div} from "@vkontakte/vkui";


const Persik = props => (
	<Panel id={props.id}>


			<Group >
		<Div style={{height: "20vh"}}>
			<Placeholder
				style={{height: "100%"}}
				icon={<Icon56ErrorOutline />}
				header="No internet connection"
			>
				Come back when the internet is available
			</Placeholder>
		</Div>
		</Group>

	</Panel>
);



export default Persik;
