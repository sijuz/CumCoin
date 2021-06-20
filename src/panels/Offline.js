import React from 'react';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import './Persik.css';
import Icon56ErrorOutline from '@vkontakte/icons/dist/56/error_outline';
import {Group, Panel, Placeholder, Div} from "@vkontakte/vkui";


const Persik = props => (
	<Panel id={props.id}>

		<div style={{height: '100vh',display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
			<Group >
		<Div style={{height: "90vh"}}>
			<Placeholder
				style={{height: "100%"}}
				icon={<Icon56ErrorOutline />}
				header="No internet connection"
			>
				Come back when the internet is available
			</Placeholder>
		</Div>
		</Group>
		</div>
	</Panel>
);



export default Persik;
