import React from 'react';
import {Div, PanelHeader, Panel, CardGrid, Card, Button, Group} from '@vkontakte/vkui';


import Icon28BugOutline from '@vkontakte/icons/dist/28/bug_outline';
import {Icon28DoorArrowLeftOutline} from "@vkontakte/icons";
import logo from "../img/PNG2.png";

const Error = ({ id, go, error,error2,resetApp,isDesktop}) => {
	return (
	<Panel id={id}>

		<PanelHeader
			id="topm"
			separator={isDesktop}
			right={
				isDesktop ?
				<Button
					mode="outline"
					size="l"  before={<Icon28DoorArrowLeftOutline  />} onClick={resetApp}>Log out</Button>
					: null
			}

		>
			{isDesktop ? null :
				<p style={{textAlign: "center", width: "95vw"}}>
					<img src={logo} width="80px" alt=""/>
				</p>
			}
		</PanelHeader>


		<Group>
		<Div separator={false} style={{textAlign: "center", marginTop: '15px'}}>
			<Icon28BugOutline width={56} height={56} style={{margin: "0 auto"}} />

			<h1>Error</h1>
			<h3>{error !== '' ? "Number: #"+error : ''}</h3>
			<CardGrid size="l">
				<Card>
					<p style={{textAlign: "left",margin: 20}}>{error2}</p>
				</Card>
			</CardGrid>
			<Button size="l" onClick={()=>document.location.reload()} style={{marginTop: "20px"}}>Reload</Button>

		</Div>
		</Group>
	</Panel>
);
};

export default Error;
